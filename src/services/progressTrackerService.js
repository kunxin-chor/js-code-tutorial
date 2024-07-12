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

function setLastAttemptedQuestionId(questionId) {
  const progress = loadProgress() || {};
  progress.lastAttemptedQuestionId = questionId;
  saveProgress(progress);
}

function getLastAttemptedQuestionId() {
  const progress = loadProgress() || {};
  return progress.lastAttemptedQuestionId || null;
}

function saveAttempts(questionId, attempts) {
  const progress = loadProgress() || {};
  progress[questionId] = { ...progress[questionId], attempts };
  saveProgress(progress);
}

function getAttempts(questionId) {
  const progress = loadProgress() || {};
  return progress[questionId]?.attempts || 0;
}

function incrementAttempts(questionId) {
  const currentAttempts = getAttempts(questionId);
  saveAttempts(questionId, currentAttempts + 1);
  return currentAttempts + 1;
}

function resetQuestionProgress(questionId) {
  const progress = loadProgress() || {};
  if (progress[questionId]) {
    progress[questionId] = {
      ...progress[questionId],
      allPassing: false,
      attempts: 0
    };
    saveProgress(progress);
  }
  return progress;
}

export const progressTrackerService = {
  loadUserProgress,
  updateProgress,
  getCompletedQuestions,
  saveCode,
  getSavedCode,
  saveTestResults,
  getSavedTestResults,
  setLastAttemptedQuestionId,
  getLastAttemptedQuestionId,
  saveAttempts,
  getAttempts,
  incrementAttempts,
  resetQuestionProgress,
};