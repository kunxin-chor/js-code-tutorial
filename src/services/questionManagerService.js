import { getManifest, loadQuestion } from '../questionParser';

async function fetchManifest() {
  return await getManifest();
}

async function loadQuestionById(manifest, questionId) {
  if (!manifest) return null;

  const question = manifest.categories
    .flatMap(category => category.questions)
    .find(q => q.id === questionId);

  if (!question) {
    console.error(`Question with id ${questionId} not found`);
    return null;
  }

  const questionContent = await loadQuestion(question.url);
  return { ...question, ...questionContent };
}

function getNextQuestionId(manifest, currentQuestionId) {
  if (!manifest || !currentQuestionId) return null;

  const allQuestions = manifest.categories.flatMap(category => category.questions);
  const currentIndex = allQuestions.findIndex(q => q.id === currentQuestionId);
  
  if (currentIndex < allQuestions.length - 1) {
    return allQuestions[currentIndex + 1].id;
  }
  return null;
}

function isLastQuestion(manifest, currentQuestionId) {
  if (!manifest) return false;
  const lastQuestion = manifest.categories.flatMap(c => c.questions).slice(-1)[0];
  return currentQuestionId === lastQuestion.id;
}

export const questionManagerService = {
  fetchManifest,
  loadQuestionById,
  getNextQuestionId,
  isLastQuestion,
};