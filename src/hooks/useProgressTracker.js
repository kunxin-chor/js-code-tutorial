import { useState, useEffect } from 'react';
import { saveProgress, loadProgress } from '../utils/localStorageUtils';

export const useProgressTracker = (initialCurrentQuestion) => {
  const [userProgress, setUserProgress] = useState({});

  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setUserProgress(savedProgress);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(userProgress).length > 0) {
      saveProgress(userProgress);
    }
  }, [userProgress]);

  const updateProgress = (questionIndex, data) => {
    setUserProgress(prev => ({
      ...prev,
      [questionIndex]: {
        ...prev[questionIndex],
        ...data,
      },
    }));
  };

  const getCompletedQuestions = () => {
    return Object.entries(userProgress)
      .filter(([key, value]) => key !== 'currentQuestion' && value.completed)
      .map(([key]) => parseInt(key));
  };

  return {
    userProgress,
    updateProgress,
    getCompletedQuestions,
  };
};