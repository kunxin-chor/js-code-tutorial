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
        testResults: action.payload.testResults,
        attempts: action.payload.attempts,
        error: null,
        showSolution: false,
        showHints: false,
        showWalkthrough: false
      };
    case 'SET_CODE':
      progressTrackerService.saveCode(state.currentQuestionId, action.payload);
      return { ...state, code: action.payload };
    case 'SET_TEST_RESULTS':
      return { ...state, testResults: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_SHOW_SOLUTION':
      console.log("show solution");
      return { ...state, showSolution: action.payload };
    case 'TOGGLE_HINTS':
      console.log("show hints");
      return { ...state, showHints: !state.showHints };
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
        attempts: action.payload.attempts,
      };

    case 'RUN_CODE_FAILURE':
      return {
        ...state,
        error: action.payload.error,
        testResults: action.payload.results,
        allPassing: false,
        codeHasRun: true,
        attempts: action.payload.attempts,
      };

    case 'RESET_QUESTION':
      return {
        ...state,
        code: action.payload.code,
        testResults: action.payload.testResults,
        error: null,
        showSolution: false,
        showHints: false,
        showWalkthrough: false,
        attempts: 0,
        allPassing: false,
        userProgress: action.payload.userProgress
      };

    default:
      return state;
  }
}

export { appReducer, initialState };