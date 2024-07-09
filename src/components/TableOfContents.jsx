import React from 'react';

const TableOfContents = ({ questions, currentQuestion, completedQuestions, onSelectQuestion }) => {
  return (
    <div style={{
      width: '250px',
      height: '100vh',
      overflowY: 'auto',
      padding: '20px',
      borderRight: '1px solid #ddd',
      backgroundColor: '#f5f5f5'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Questions</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {questions.map((question, index) => (
          <li 
            key={index}
            style={{
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: index === currentQuestion ? '#e0e0e0' : 'white',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            onClick={() => onSelectQuestion(index)}
          >
            <span>{question.title}</span>
            {completedQuestions.includes(index) && (
              <span style={{ color: 'green' }}>✓</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;