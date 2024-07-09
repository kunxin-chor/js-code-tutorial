import React, { useEffect } from 'react';
import QuestionDisplay from './components/QuestionDisplay';
import CodeEditor from './components/CodeEditor';
import TestResults from './components/TestResults';
import ExplanationSection from './components/ExplanationSection';
import ActionButtons from './components/ActionButtons';
import SolutionDisplay from './components/SolutionDisplay';
import TableOfContents from './components/TableOfContents';
import { useQuestionManager } from './hooks/useQuestionManager';
import { useProgressTracker } from './hooks/useProgressTracker';
import { useCodeRunner } from './hooks/useCodeRunner';

const App = () => {
  const {
    questionsData,
    currentQuestion,
    nextQuestion,
    selectQuestion,
    isLastQuestion,
  } = useQuestionManager();

  const {
    userProgress,
    updateProgress,
    getCompletedQuestions,
  } = useProgressTracker(currentQuestion);

  const {
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
  } = useCodeRunner();

  useEffect(() => {
    if (questionsData.length > 0) {
      const questionProgress = userProgress[currentQuestion] || {};
      const currentQuestionData = questionsData[currentQuestion];
      resetQuestion(
        questionProgress.code || currentQuestionData.initialCode,
        currentQuestionData.testCases
      );
      if (questionProgress.testResults) {
        setTestResults(questionProgress.testResults);
      }
    }
  }, [currentQuestion, questionsData, userProgress, resetQuestion, setTestResults]);

  const handleRunCode = () => {
    const currentQuestionData = questionsData[currentQuestion];
    const { results, passing } = runUserCode(currentQuestionData.testCases);
    updateProgress(currentQuestion, {
      code,
      completed: passing,
      attempts: attempts + 1,
      lastAttemptDate: new Date().toISOString(),
      testResults: results,
    });
  };

  const handleViewSolution = () => {
    viewSolution();
    updateProgress(currentQuestion, { viewedSolution: true });
  };

  const handleResetQuestion = () => {
    const currentQuestionData = questionsData[currentQuestion];
    resetQuestion(currentQuestionData.initialCode, currentQuestionData.testCases);
    updateProgress(currentQuestion, {
      code: currentQuestionData.initialCode,
      completed: false,
      attempts: 0,
      testResults: currentQuestionData.testCases.map(tc => ({ ...tc, result: null, passed: null })),
      viewedSolution: false,
    });
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <TableOfContents 
        questions={questionsData}
        currentQuestion={currentQuestion}
        completedQuestions={getCompletedQuestions()}
        onSelectQuestion={selectQuestion}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {questionsData.length > 0 ? (
          <>
            <QuestionDisplay question={questionsData[currentQuestion]} />
            <CodeEditor code={code} setCode={setCode} />
            <ActionButtons 
              onRunCode={handleRunCode} 
              onViewSolution={handleViewSolution}
              onNextQuestion={nextQuestion}
              onResetQuestion={handleResetQuestion}
              isLastQuestion={isLastQuestion}
            />
            <TestResults testResults={testResults} />
            <ExplanationSection explanation={questionsData[currentQuestion].explanation} />
            {showSolution && (
              <SolutionDisplay solution={questionsData[currentQuestion].solution} />
            )}
          </>
        ) : (
          <div>Loading questions...</div>
        )}
      </div>
    </div>
  );
};

export default App;