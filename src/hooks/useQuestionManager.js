import { useState, useEffect, useCallback } from 'react';
import { getManifest, loadQuestion } from '../questionParser';

export const useQuestionManager = () => {
  const [manifest, setManifest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManifest = async () => {
      const manifestData = await getManifest();
      setManifest(manifestData);
      setLoading(false);
    };
    fetchManifest();
  }, []);

  const loadQuestionByIndex = useCallback(async (index) => {
    if (!manifest) return;

    setLoading(true);
    const flatQuestions = manifest.categories.flatMap(category => 
      category.questions.map(q => ({ ...q, category: category.name }))
    );
    
    if (index >= 0 && index < flatQuestions.length) {
      const questionInfo = flatQuestions[index];
      const questionData = await loadQuestion(questionInfo.url);
      setCurrentQuestion({ ...questionData, category: questionInfo.category });
      setCurrentQuestionIndex(index);
    }
    setLoading(false);
  }, [manifest]);

  useEffect(() => {
    if (manifest) {
      loadQuestionByIndex(0);
    }
  }, [manifest, loadQuestionByIndex]);

  const nextQuestion = useCallback(() => {
    const totalQuestions = manifest.categories.reduce((sum, category) => sum + category.questions.length, 0);
    if (currentQuestionIndex < totalQuestions - 1) {
      loadQuestionByIndex(currentQuestionIndex + 1);
    }
  }, [currentQuestionIndex, manifest, loadQuestionByIndex]);

  const selectQuestion = useCallback((index) => {
    loadQuestionByIndex(index);
  }, [loadQuestionByIndex]);

  const categories = manifest ? manifest.categories.map(c => c.name) : [];
  const isLastQuestion = manifest 
    ? currentQuestionIndex >= manifest.categories.reduce((sum, category) => sum + category.questions.length, 0) - 1
    : false;

  return {
    currentQuestion,
    currentQuestionIndex,
    categories,
    nextQuestion,
    selectQuestion,
    isLastQuestion,
    loading,
    manifest
  };
};