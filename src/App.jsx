import React, { useReducer, useCallback, useEffect } from 'react';
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
import ErrorDisplay from './components/ErrorDisplay';
import { appReducer, initialState } from './reducers/appReducer';
import { questionManagerService } from './services/questionManagerService';
import { progressTrackerService } from './services/progressTrackerService';
import { codeRunnerService } from './services/codeRunnerService';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const loadQuestion = useCallback(async (manifest, questionId) => {
    try {
      const question = await questionManagerService.loadQuestionById(manifest, questionId);
      const savedCode = progressTrackerService.getSavedCode(questionId);
      const savedTestResults = progressTrackerService.getSavedTestResults(questionId);
      dispatch({ 
        type: 'SET_CURRENT_QUESTION', 
        payload: { 
          question, 
          questionId, 
          code: savedCode || question.initialCode,
          testResults: savedTestResults || question.testCases.map(tc => ({ ...tc, result: null, passed: null }))
        } 
      });
    } catch (error) {
      console.error('Error loading question:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load the question. Please try again.' });
    }
  }, []);

  useEffect(() => {
    async function initializeApp() {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const manifest = await questionManagerService.fetchManifest();
        const userProgress = progressTrackerService.loadUserProgress();
        dispatch({ type: 'INITIALIZE_APP', payload: { manifest, userProgress } });

        let questionToLoad;
        const lastAttemptedQuestionId = progressTrackerService.getLastAttemptedQuestionId();
        
        if (lastAttemptedQuestionId) {
          questionToLoad = lastAttemptedQuestionId;
        } else if (manifest.categories.length > 0 && manifest.categories[0].questions.length > 0) {
          questionToLoad = manifest.categories[0].questions[0].id;
        }

        if (questionToLoad) {
          await loadQuestion(manifest, questionToLoad);
        }
      } catch (error) {
        console.error('Error initializing app:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Failed to initialize the app. Please try again.' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }
    initializeApp();
  }, [loadQuestion]);

  const handleQuestionChange = useCallback(async (newQuestionId) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await loadQuestion(state.manifest, newQuestionId);
    } catch (error) {
      console.error('Error changing question:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load the question. Please try again.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [state.manifest, loadQuestion]);

  const handleRunCode = useCallback(() => {
    const { code, currentQuestion, currentQuestionId } = state;
    const { results, passing, error } = codeRunnerService.runUserCode(code, currentQuestion.testCases, currentQuestionId);
    
    if (error) {
      dispatch({ type: 'RUN_CODE_FAILURE', payload: { error, results } });
    } else {
      dispatch({ type: 'RUN_CODE_SUCCESS', payload: { results, passing } });
    }
  }, [state]);

  const handleViewSolution = useCallback(() => {
    dispatch({ type: 'VIEW_SOLUTION' });
  }, []);

  const handleResetQuestion = useCallback(() => {
    dispatch({ type: 'RESET_QUESTION' });
  }, []);

  const toggleHints = useCallback(() => {
    dispatch({ type: 'TOGGLE_HINTS' });
  }, []);

  const toggleWalkthrough = useCallback(() => {
    dispatch({ type: 'TOGGLE_WALKTHROUGH' });
  }, []);

  const handleNextQuestion = useCallback(async () => {
    const nextQuestionId = questionManagerService.getNextQuestionId(state.manifest, state.currentQuestionId);
    if (nextQuestionId) {
      await handleQuestionChange(nextQuestionId);
    }
  }, [state.manifest, state.currentQuestionId, handleQuestionChange]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {state.loading && <LoadingOverlay />}
      {state.manifest && (
        <TableOfContents 
          manifest={state.manifest}
          currentQuestionId={state.currentQuestionId}
          userProgress={state.userProgress}
          selectQuestion={handleQuestionChange}
        />
      )}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {state.currentQuestion && (
          <>
            <QuestionDisplay question={state.currentQuestion} />
            <CodeEditor 
              code={state.code} 
              setCode={(newCode) => dispatch({ type: 'SET_CODE', payload: newCode })} 
            />
            <ErrorDisplay errorMessage={state.error} />
            <ActionButtons 
              onRunCode={handleRunCode} 
              onViewSolution={handleViewSolution}
              onNextQuestion={handleNextQuestion}
              onResetQuestion={handleResetQuestion}
              onToggleHints={toggleHints}
              onToggleWalkthrough={toggleWalkthrough}
              isLastQuestion={state.isLastQuestion}
            />
            <TestResults testResults={state.testResults} />
            {state.showHints && <HintsDisplay hints={state.currentQuestion.hints} />}
            {state.showWalkthrough && <WalkthroughDisplay walkthrough={state.currentQuestion.walkthrough} />}
            {state.showSolution && (
              <>     
                <SolutionDisplay solution={state.currentQuestion.solution} />
                <ExplanationSection explanation={state.currentQuestion.explanation} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;