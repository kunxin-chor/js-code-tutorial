import { useState, useEffect } from 'react';
import { getQuestionsFromMarkdown } from '../questionParser';

export const useQuestionManager = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getQuestionsFromMarkdown("https://raw.githubusercontent.com/kunxin-chor/js-code-tutorial/main/questions.md");
      setQuestionsData(questions);
      if (questions.length > 0) {
        setCurrentQuestion(0);
      }
    };
    fetchQuestions();
  }, []);

  const nextQuestion = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const selectQuestion = (index) => {
    if (index >= 0 && index < questionsData.length) {
      setCurrentQuestion(index);
    }
  };

  return {
    questionsData,
    currentQuestion,
    nextQuestion,
    selectQuestion,
    isLastQuestion: currentQuestion >= questionsData.length - 1,
  };
};