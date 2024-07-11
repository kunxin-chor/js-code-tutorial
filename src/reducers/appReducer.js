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
        codeHasRun: false 
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
    case 'RUN_CODE':
      const { results, passing, error } = codeRunnerService.runUserCode(
        state.code,
        state.currentQuestion.testCases,
        state.currentQuestionId
      );

      const newAttempts = state.attempts + 1;
      
      // Update user progress
      const updatedProgress = progressTrackerService.updateProgress(
        state.userProgress,
        state.currentQuestionId,
        {
          attempts: newAttempts,
          completed: passing,
          code: state.code, // Save the current code in the progress
        }
      );

      return {
        ...state,
        testResults: results,
        allPassing: passing,
        attempts: newAttempts,
        codeHasRun: true,
        showSolution: passing, // Optionally show solution if all tests pass
        error: error, // Set the error if there is one
        userProgress: updatedProgress,
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