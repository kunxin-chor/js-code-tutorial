import { useState, useCallback } from 'react';
import { runCode } from '../utils/codeUtils';

export const useCodeRunner = () => {
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [allPassing, setAllPassing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const runUserCode = useCallback((testCases) => {
    const results = runCode(code, testCases);
    setTestResults(results);
    const passing = results.every(r => r.passed);
    setAllPassing(passing);
    setAttempts(prev => prev + 1);
    return { results, passing };
  }, [code]);

  const resetQuestion = useCallback((initialCode, testCases) => {
    setCode(initialCode);
    setTestResults(testCases.map(tc => ({ ...tc, result: null, passed: null })));
    setAllPassing(false);
    setAttempts(0);
    setShowSolution(false);
  }, []);

  const viewSolution = () => {
    setShowSolution(true);
  };

  return {
    code,
    setCode,
    testResults,
    setTestResults,
    allPassing,
    attempts,
    showSolution,
    runUserCode,
    resetQuestion,
    viewSolution,
  };
};