import React, { useEffect, useCallback, useState } from 'react';
import QuestionDisplay from './components/QuestionDisplay';
import CodeEditor from './components/CodeEditor';
import TestResults from './components/TestResults';
import ExplanationSection from './components/ExplanationSection';
import ActionButtons from './components/ActionButtons';
import SolutionDisplay from './components/SolutionDisplay';
import TableOfContents from './components/TableOfContents';
import LoadingOverlay from './components/LoadingOverlay';
import { useQuestionManager } from './hooks/useQuestionManager';
import { useProgressTracker } from './hooks/useProgressTracker';
import { useCodeRunner } from './hooks/useCodeRunner';

const App = () => {
  const [showSolution, setShowSolution] = useState(false);

  const {
    currentQuestion,
    currentQuestionIndex,
    categories,
    nextQuestion,
    selectQuestion,
    isLastQuestion,
    loading,
    manifest
  } = useQuestionManager();

  const {
    userProgress,
    updateProgress,
    getCompletedQuestions,
  } = useProgressTracker();

  const {
    code,
    setCode,
    testResults,
    setTestResults,
    allPassing,
    attempts,
    runUserCode,
    resetQuestion,
  } = useCodeRunner();

  const initializeQuestion = useCallback(() => {
    if (currentQuestion) {
      const questionProgress = userProgress[currentQuestionIndex] || {};
      const initialCode = questionProgress.code || currentQuestion.initialCode;
      const initialTestResults = questionProgress.testResults || 
        currentQuestion.testCases.map(tc => ({ ...tc, result: null, passed: null }));
      
      resetQuestion(initialCode, currentQuestion.testCases);
      setTestResults(initialTestResults);
    }
  }, [currentQuestion, currentQuestionIndex, userProgress, resetQuestion, setTestResults]);

  useEffect(() => {
    initializeQuestion();
  }, [initializeQuestion]);

  const handleRunCode = useCallback(() => {
    if (!currentQuestion) return;
    const { results, passing } = runUserCode(currentQuestion.testCases);
    updateProgress(currentQuestionIndex, {
      code,
      completed: passing,
      attempts: attempts + 1,
      lastAttemptDate: new Date().toISOString(),
      testResults: results,
    });
  }, [currentQuestion, runUserCode, updateProgress, currentQuestionIndex, code, attempts]);

  const handleViewSolution = useCallback(() => {
    setShowSolution(true);
    updateProgress(currentQuestionIndex, { viewedSolution: true });
  }, [updateProgress, currentQuestionIndex]);

  const handleResetQuestion = useCallback(() => {
    if (!currentQuestion) return;
    resetQuestion(currentQuestion.initialCode, currentQuestion.testCases);
    setTestResults(currentQuestion.testCases.map(tc => ({ ...tc, result: null, passed: null })));
    updateProgress(currentQuestionIndex, {
      code: currentQuestion.initialCode,
      completed: false,
      attempts: 0,
      testResults: currentQuestion.testCases.map(tc => ({ ...tc, result: null, passed: null })),
      viewedSolution: false,
    });
  }, [currentQuestion, resetQuestion, setTestResults, updateProgress, currentQuestionIndex]);

  useEffect(() => {
    setShowSolution(false);
  }, [currentQuestionIndex]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {loading && <LoadingOverlay />}
      <TableOfContents 
        manifest={manifest}
        currentQuestionIndex={currentQuestionIndex}
        completedQuestions={getCompletedQuestions()}
        onSelectQuestion={selectQuestion}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {currentQuestion && (
          <>
            <QuestionDisplay question={currentQuestion} />
            <CodeEditor code={code} setCode={setCode} />
            <ActionButtons 
              onRunCode={handleRunCode} 
              onViewSolution={handleViewSolution}
              onNextQuestion={nextQuestion}
              onResetQuestion={handleResetQuestion}
              isLastQuestion={isLastQuestion}
            />
            <TestResults testResults={testResults} />
            {showSolution && (
              <>     
                <SolutionDisplay solution={currentQuestion.solution} />
                <ExplanationSection explanation={currentQuestion.explanation} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;