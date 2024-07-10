import { useState, useCallback } from 'react';
import { runCode } from '../utils/codeUtils';

export const useCodeRunner = (initialCode = '', initialTestCases = []) => {
  const [code, setCode] = useState(initialCode);
  const [testResults, setTestResults] = useState([]);
  const [allPassing, setAllPassing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState(null);

  const runUserCode = useCallback((testCases = [], questionId) => {
    if (!code || testCases.length === 0) {
      const errorMsg = 'No code or test cases provided';
      setError(errorMsg);
      return { results: [], passing: false, error: errorMsg };
    }

    try {
      const results = runCode(code, testCases, questionId);
      
      // Check if any test case resulted in an error
      const errorResult = results.find(r => r.error);
      if (errorResult) {
        setError(errorResult.error);
        setTestResults(results);
        setAllPassing(false);
        setAttempts(prev => prev + 1);
        return { results, passing: false, error: errorResult.error };
      }
      
      setTestResults(results);
      const passing = results.every(r => r.passed);
      setAllPassing(passing);
      setAttempts(prev => prev + 1);
      setError(null);
      return { results, passing, error: null };
    } catch (error) {
      console.error('Error running code:', error);
      setTestResults([]);
      setAllPassing(false);
      setAttempts(prev => prev + 1);
      const errorMessage = error.message || 'An error occurred while running the code';
      setError(errorMessage);
      return { results: [], passing: false, error: errorMessage };
    }
  }, [code]);

  const resetQuestion = useCallback((newCode = '', newTestCases = []) => {
    setCode(newCode);
    setTestResults(newTestCases.map(tc => ({ 
      ...tc, 
      result: null, 
      passed: null 
    })));
    setAllPassing(false);
    setAttempts(0);
    setError(null);
  }, []);

  return {
    code,
    setCode,
    testResults,
    setTestResults,
    allPassing,
    attempts,
    runUserCode,
    resetQuestion,
    error,
    setError,
  };
};