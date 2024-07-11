import { saveProgress, loadProgress } from '../utils/localStorageUtils';

function loadUserProgress() {
  return loadProgress() || {};
}

function updateProgress(userProgress, questionIndex, data) {
  const updatedProgress = {
    ...userProgress,
    [questionIndex]: {
      ...userProgress[questionIndex],
      ...data,
    },
  };
  saveProgress(updatedProgress);
  return updatedProgress;
}

function getCompletedQuestions(userProgress) {
  return Object.entries(userProgress)
    .filter(([key, value]) => key !== 'currentQuestion' && value.completed)
    .map(([key]) => parseInt(key));
}

function saveCode(questionId, code) {
  const progress = loadProgress() || {};
  progress[questionId] = { ...progress[questionId], code };
  saveProgress(progress);
}

function getSavedCode(questionId) {
  const progress = loadProgress() || {};
  return progress[questionId]?.code || null;
}

export const progressTrackerService = {
  loadUserProgress,
  updateProgress,
  getCompletedQuestions,
  saveCode,
  getSavedCode,
};