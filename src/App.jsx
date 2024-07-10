import React, { useEffect, useCallback, useState } from 'react';
import QuestionDisplay from './components/QuestionDisplay';
import CodeEditor from './components/CodeEditor';
import TestResults from './components/TestResults';
import ExplanationSection from './components/ExplanationSection';
import ActionButtons from './components/ActionButtons';
import SolutionDisplay from './components/SolutionDisplay';
import TableOfContents from './components/TableOfContents';
import LoadingOverlay from './components/LoadingOverlay';
import HintsDisplay from './components/HintsDisplay';
import WalkthroughDisplay from './components/WalkthroughDisplay';
import { useQuestionManager } from './hooks/useQuestionManager';
import { useProgressTracker } from './hooks/useProgressTracker';
import { useCodeRunner } from './hooks/useCodeRunner';

const App = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const [codeHasRun, setCodeHasRun] = useState(false);

  const {
    currentQuestion,
    currentQuestionId,
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

  useEffect(() => {
    if (currentQuestion) {
      const questionProgress = userProgress[currentQuestion.id] || {};
      const initialCode = questionProgress.code || currentQuestion.initialCode;
      
      setCode(initialCode);
      
      if (questionProgress.completed && questionProgress.testResults) {
        // If the question was previously completed, use the stored test results
        setTestResults(questionProgress.testResults);
      } else if (!codeHasRun) {
        // Only initialize test results if the code hasn't been run yet
        setTestResults(currentQuestion.testCases.map(tc => ({
          ...tc,
          result: null,
          passed: null
        })));
      }
      // Don't reset codeHasRun here
    }
  }, [currentQuestion, userProgress, setCode, setTestResults, codeHasRun]);

  useEffect(() => {
    setCodeHasRun(false);
  }, [currentQuestion]);

  const handleRunCode = useCallback(() => {
    if (!currentQuestion) return;
    const { results, passing } = runUserCode(currentQuestion.testCases, currentQuestion.id);
    const updatedResults = currentQuestion.testCases.map(testCase => {
      const result = results.find(r => r.id === testCase.id);
      return {
        ...testCase,
        result: result ? result.result : null,
        passed: result ? result.passed : false, // Change null to false
      };
    });
    
    console.log('Updated test results:', updatedResults);
    
    setTestResults(updatedResults);
    setCodeHasRun(true);
    
    const updatedProgress = {
      code,
      completed: passing,
      attempts: attempts + 1,
      lastAttemptDate: new Date().toISOString(),
      testResults: updatedResults,
    };
    
    updateProgress(currentQuestion.id, updatedProgress);
  }, [currentQuestion, runUserCode, updateProgress, code, attempts]);

  const handleViewSolution = useCallback(() => {
    setShowSolution(true);
    updateProgress(currentQuestion.id, { viewedSolution: true });
  }, [updateProgress, currentQuestion]);

  const handleResetQuestion = useCallback(() => {
    if (!currentQuestion) return;
    resetQuestion(currentQuestion.initialCode, currentQuestion.testCases);
    setTestResults(currentQuestion.testCases.map(tc => ({ ...tc, result: null, passed: null })));
    setCodeHasRun(false);
    updateProgress(currentQuestion.id, {
      code: currentQuestion.initialCode,
      completed: false,
      attempts: 0,
      testResults: currentQuestion.testCases.map(tc => ({ ...tc, result: null, passed: null })),
      viewedSolution: false,
    });
  }, [currentQuestion, resetQuestion, setTestResults, updateProgress]);

  const toggleHints = useCallback(() => {
    setShowHints(prev => !prev);
  }, []);

  const toggleWalkthrough = useCallback(() => {
    setShowWalkthrough(prev => !prev);
  }, []);

  useEffect(() => {
    setShowSolution(false);
    setShowHints(false);
    setShowWalkthrough(false);
  }, [currentQuestion]);

  const handleQuestionChange = useCallback((newQuestionId) => {
    setCodeHasRun(false);
    selectQuestion(newQuestionId);
  }, [selectQuestion]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {loading && <LoadingOverlay />}
      <TableOfContents 
        manifest={manifest}
        currentQuestionId={currentQuestionId}
        userProgress={userProgress}
        selectQuestion={handleQuestionChange}
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
              onToggleHints={toggleHints}
              onToggleWalkthrough={toggleWalkthrough}
              isLastQuestion={isLastQuestion}
            />
            <TestResults testResults={testResults} />
            {showHints && <HintsDisplay hints={currentQuestion.hints} />}
            {showWalkthrough && <WalkthroughDisplay walkthrough={currentQuestion.walkthrough} />}
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