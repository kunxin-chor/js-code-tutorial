import { useState, useCallback } from 'react';
import { runCode } from '../utils/codeUtils';

export const useCodeRunner = (initialCode = '', initialTestCases = []) => {
  const [code, setCode] = useState(initialCode);
  const [testResults, setTestResults] = useState([]);
  const [allPassing, setAllPassing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const runUserCode = useCallback((testCases = []) => {
    if (!code || testCases.length === 0) {
      console.warn('No code or test cases provided');
      return { results: [], passing: false };
    }

    const results = runCode(code, testCases);
    setTestResults(results);
    const passing = results.every(r => r.passed);
    setAllPassing(passing);
    setAttempts(prev => prev + 1);
    return { results, passing };
  }, [code]);

  const resetQuestion = useCallback((newCode = '', newTestCases = []) => {
    setCode(newCode);
    setTestResults(newTestCases.map(tc => ({ ...tc, result: null, passed: null })));
    setAllPassing(false);
    setAttempts(0);
    setShowSolution(false);
  }, []);

  const viewSolution = useCallback(() => {
    setShowSolution(true);
  }, []);

  return {
    code,
    setCode,
    testResults,
    allPassing,
    attempts,
    showSolution,
    runUserCode,
    resetQuestion,
    viewSolution,
  };
};