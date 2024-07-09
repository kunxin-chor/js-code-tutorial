import React, { useEffect } from 'react';
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
    allPassing,
    attempts,
    showSolution,
    runUserCode,
    resetQuestion,
    viewSolution,
  } = useCodeRunner();

  useEffect(() => {
    if (currentQuestion) {
      const questionProgress = userProgress[currentQuestionIndex] || {};
      resetQuestion(
        questionProgress.code || currentQuestion.initialCode,
        currentQuestion.testCases
      );
    }
  }, [currentQuestion, currentQuestionIndex, userProgress, resetQuestion]);

  const handleRunCode = () => {
    if (!currentQuestion) return;
    const { results, passing } = runUserCode(currentQuestion.testCases);
    updateProgress(currentQuestionIndex, {
      code,
      completed: passing,
      attempts: attempts + 1,
      lastAttemptDate: new Date().toISOString(),
      testResults: results,
    });
  };

  const handleViewSolution = () => {
    viewSolution();
    updateProgress(currentQuestionIndex, { viewedSolution: true });
  };

  const handleResetQuestion = () => {
    if (!currentQuestion) return;
    resetQuestion(currentQuestion.initialCode, currentQuestion.testCases);
    updateProgress(currentQuestionIndex, {
      code: currentQuestion.initialCode,
      completed: false,
      attempts: 0,
      testResults: [],
      viewedSolution: false,
    });
  };

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
            <ExplanationSection explanation={currentQuestion.explanation} />
            {showSolution && (
              <SolutionDisplay solution={currentQuestion.solution} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;