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

function saveTestResults(questionId, testResults) {
  const progress = loadProgress() || {};
  progress[questionId] = { ...progress[questionId], testResults };
  saveProgress(progress);
}

function getSavedTestResults(questionId) {
  const progress = loadProgress() || {};
  return progress[questionId]?.testResults || null;
}

function getLastAttemptedQuestionId() {
  const progress = loadProgress() || {};
  const attemptedQuestions = Object.keys(progress).filter(key => progress[key].code);
  return attemptedQuestions.length > 0 ? attemptedQuestions[attemptedQuestions.length - 1] : null;
}

export const progressTrackerService = {
  loadUserProgress,
  updateProgress,
  getCompletedQuestions,
  saveCode,
  getSavedCode,
  saveTestResults,
  getSavedTestResults,
  getLastAttemptedQuestionId,
};