import { codeRunnerService } from '../services/codeRunnerService';
import { progressTrackerService } from '../services/progressTrackerService';
import { questionManagerService } from '../services/questionManagerService';

const initialState = {
  showSolution: false,
  showHints: false,
  showWalkthrough: false,
  codeHasRun: false,
  errorMessage: null,
  currentQuestion: null,
  currentQuestionId: null,
  categories: [],
  isLastQuestion: false,
  loading: true,
  manifest: null,
  userProgress: {},
  code: '',
  testResults: [],
  allPassing: false,
  attempts: 0,
  error: null,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION':
      return { 
        ...state, 
        currentQuestion: action.payload.question, 
        currentQuestionId: action.payload.questionId, 
        code: action.payload.code, 
        codeHasRun: false,
        testResults: action.payload.testResults || action.payload.question.testCases.map(tc => ({ ...tc, result: null, passed: null })),
        error: null, // Reset the error when changing questions
        showSolution: false, // Reset solution visibility
        showHints: false, // Reset hints visibility
        showWalkthrough: false // Reset walkthrough visibility
      };
    case 'SET_CODE':
      progressTrackerService.saveCode(state.currentQuestionId, action.payload);
      return { ...state, code: action.payload };
    case 'SET_TEST_RESULTS':
      return { ...state, testResults: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_SHOW_SOLUTION':
      return { ...state, showSolution: action.payload };
    case 'SET_SHOW_HINTS':
      return { ...state, showHints: action.payload };
    case 'SET_SHOW_WALKTHROUGH':
      return { ...state, showWalkthrough: action.payload };
    case 'SET_CODE_HAS_RUN':
      return { ...state, codeHasRun: action.payload };
    case 'SET_MANIFEST':
      return { ...state, manifest: action.payload, loading: false };
    case 'SET_USER_PROGRESS':
      return { ...state, userProgress: action.payload };
    case 'UPDATE_QUESTION_PROGRESS':
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          [action.payload.questionId]: {
            ...state.userProgress[action.payload.questionId],
            ...action.payload.data,
          },
        },
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'INITIALIZE_APP':
      return {
        ...state,
        manifest: action.payload.manifest,
        userProgress: action.payload.userProgress,
      };
    case 'RUN_CODE_SUCCESS':
      return {
        ...state,
        testResults: action.payload.results,
        allPassing: action.payload.passing,
        error: null,
        codeHasRun: true,
      };

    case 'RUN_CODE_FAILURE':
      return {
        ...state,
        error: action.payload.error,
        testResults: action.payload.results,
        allPassing: false,
        codeHasRun: true,
      };

    case 'RESET_QUESTION':
      const resetState = codeRunnerService.resetQuestion(
        state.currentQuestion.initialCode,
        state.currentQuestion.testCases
      );
      return {
        ...state,
        ...resetState,
        showSolution: false,
        showHints: false,
        showWalkthrough: false,
      };

    default:
      return state;
  }
}

export { appReducer, initialState };