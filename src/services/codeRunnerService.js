import { runCode } from '../utils/codeUtils';

function runUserCode(code, testCases, questionId) {
  if (!code || testCases.length === 0) {
    const errorMsg = 'No code or test cases provided';
    return { results: [], passing: false, error: errorMsg };
  }

  try {
    const results = runCode(code, testCases, questionId);
    
    const errorResult = results.find(r => r.error);
    if (errorResult) {
      return { results, passing: false, error: `Error in test case "${errorResult.func}": ${errorResult.error}` };
    }
    
    const passing = results.every(r => r.passed);
    return { results, passing, error: null };
  } catch (error) {
    console.error('Error running code:', error);
    const errorMessage = error.message || 'An error occurred while running the code';
    return { results: [], passing: false, error: errorMessage };
  }
}

function resetQuestion(newCode = '', newTestCases = []) {
  return {
    code: newCode,
    testResults: newTestCases.map(tc => ({ ...tc, result: null, passed: null })),
    allPassing: false,
    attempts: 0,
    error: null,
  };
}

export const codeRunnerService = {
  runUserCode,
  resetQuestion,
};