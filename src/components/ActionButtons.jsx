import React from 'react';

const ActionButtons = ({ onRunCode, onViewSolution, onNextQuestion, onToggleHints, onToggleWalkthrough, onResetQuestion, isLastQuestion }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
    <button
      onClick={onRunCode}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Run Code
    </button>
    <button
      onClick={onToggleHints}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#FFA500',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Toggle Hints
    </button>
    <button
      onClick={onToggleWalkthrough}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#9932CC',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Toggle Walkthrough
    </button>
    <button
      onClick={onViewSolution}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#2196F3',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Show Solution
    </button>
    <button
      onClick={onResetQuestion}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Reset Question
    </button>
    <button
      onClick={onNextQuestion}
      disabled={isLastQuestion}

      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        opacity: isLastQuestion ? 0.5 : 1
      }}
    >
      Next Question
    </button>
  </div>
);

export default ActionButtons;