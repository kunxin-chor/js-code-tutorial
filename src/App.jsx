import React, { useState, useEffect } from 'react';
import { getQuestionsFromMarkdown } from './questionParser';
import QuestionDisplay from './components/QuestionDisplay';
import CodeEditor from './components/CodeEditor';
import TestResults from './components/TestResults';
import ExplanationSection from './components/ExplanationSection';
import ActionButtons from './components/ActionButtons';
import SolutionDisplay from './components/SolutionDisplay';
import TableOfContents from './components/TableOfContents';
import { runCode } from './utils/codeUtils';
import { saveProgress, loadProgress } from './utils/localStorageUtils';

const App = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [allPassing, setAllPassing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [userProgress, setUserProgress] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getQuestionsFromMarkdown("https://raw.githubusercontent.com/kunxin-chor/js-code-tutorial/main/questions.md");
      setQuestionsData(questions);
      
      // Load progress from localStorage
      const savedProgress = loadProgress();
      if (savedProgress) {
        setUserProgress(savedProgress);
        setCurrentQuestion(savedProgress.currentQuestion || 0);
      } else if (questions.length > 0) {
        setCurrentQuestion(0);
      }
    };
    fetchQuestions();
  }, []);
  
  useEffect(() => {
    if (questionsData.length > 0) {
      initializeQuestionState();
    }
  }, [currentQuestion, questionsData, userProgress]);

  useEffect(() => {
    // Save progress to localStorage whenever it changes
    if (Object.keys(userProgress).length > 0) {
      saveProgress(userProgress);
    }
  }, [userProgress]);

  const initializeQuestionState = () => {
    const questionProgress = userProgress[currentQuestion] || {};
    setCode(questionProgress.code || questionsData[currentQuestion].initialCode);
    setTestResults(questionProgress.testResults || 
      questionsData[currentQuestion].testCases.map(tc => ({ ...tc, result: null, passed: null })));
    setAllPassing(questionProgress.completed || false);
    setAttempts(questionProgress.attempts || 0);
    setShowSolution(questionProgress.viewedSolution || false);
  };

  const resetQuestion = () => {
    setCode(questionsData[currentQuestion].initialCode);
    setTestResults(questionsData[currentQuestion].testCases.map(tc => ({ 
      ...tc, 
      result: null, 
      passed: null 
    })));
    setAllPassing(false);
    setAttempts(0);
    setShowSolution(false);

    // Update userProgress to reflect the reset state
    setUserProgress(prev => ({
      ...prev,
      [currentQuestion]: {
        code: questionsData[currentQuestion].initialCode,
        completed: false,
        attempts: 0,
        testResults: questionsData[currentQuestion].testCases.map(tc => ({ 
          ...tc, 
          result: null, 
          passed: null 
        })),
        viewedSolution: false
      }
    }));
  };

  const handleRunCode = () => {
    const results = runCode(code, questionsData[currentQuestion].testCases);
    setTestResults(results);
    const passing = results.every(r => r.passed);
    setAllPassing(passing);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    setUserProgress(prev => ({
      ...prev,
      currentQuestion,
      [currentQuestion]: {
        code,
        completed: passing,
        attempts: newAttempts,
        lastAttemptDate: new Date().toISOString(),
        testResults: results
      }
    }));
  };

  const handleViewSolution = () => {
    setShowSolution(true);
    
    setUserProgress(prev => ({
      ...prev,
      [currentQuestion]: {
        ...prev[currentQuestion],
        viewedSolution: true
      }
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questionsData.length - 1) {
      const nextQuestionIndex = currentQuestion + 1;
      setCurrentQuestion(nextQuestionIndex);
      setUserProgress(prev => ({ ...prev, currentQuestion: nextQuestionIndex }));
    }
  };

  const selectQuestion = (index) => {
    setCurrentQuestion(index);
    setUserProgress(prev => ({ ...prev, currentQuestion: index }));
  };

  const getCompletedQuestions = () => {
    return Object.entries(userProgress)
      .filter(([key, value]) => key !== 'currentQuestion' && value.completed)
      .map(([key]) => parseInt(key));
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
              onResetQuestion={resetQuestion}
              isLastQuestion={currentQuestion >= questionsData.length - 1}
            />
            <TestResults 
              testResults={testResults}
            />
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