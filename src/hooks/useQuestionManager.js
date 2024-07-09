import { useState, useEffect, useCallback } from 'react';
import { getManifest, loadQuestion } from '../questionParser';

export const useQuestionManager = () => {
  const [manifest, setManifest] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManifest = async () => {
      const manifestData = await getManifest();
      setManifest(manifestData);
      setLoading(false);

      // Load the first question automatically
      if (manifestData.categories.length > 0 && manifestData.categories[0].questions.length > 0) {
        const firstQuestionId = manifestData.categories[0].questions[0].id;
        loadQuestionById(firstQuestionId);
      }
    };
    fetchManifest();
  }, []);

  const loadQuestionById = useCallback(async (questionId) => {
    if (!manifest) return;

    const question = manifest.categories
      .flatMap(category => category.questions)
      .find(q => q.id === questionId);

    if (!question) {
      console.error(`Question with id ${questionId} not found`);
      return null;
    }

    const questionContent = await loadQuestion(question.url);
    setCurrentQuestion({ ...question, ...questionContent });
    setCurrentQuestionId(questionId);
  }, [manifest]);

  const nextQuestion = useCallback(() => {
    if (!manifest || !currentQuestionId) return;

    const allQuestions = manifest.categories.flatMap(category => category.questions);
    const currentIndex = allQuestions.findIndex(q => q.id === currentQuestionId);
    
    if (currentIndex < allQuestions.length - 1) {
      const nextQuestionId = allQuestions[currentIndex + 1].id;
      loadQuestionById(nextQuestionId);
    }
  }, [manifest, currentQuestionId, loadQuestionById]);

  const selectQuestion = useCallback((questionId) => {
    loadQuestionById(questionId);
  }, [loadQuestionById]);

  const categories = manifest ? manifest.categories.map(c => c.name) : [];
  const isLastQuestion = manifest 
    ? currentQuestionId === manifest.categories.flatMap(c => c.questions).slice(-1)[0].id
    : false;

  return {
    currentQuestion,
    currentQuestionId,
    categories,
    nextQuestion,
    selectQuestion,
    isLastQuestion,
    loading,
    manifest
  };
};