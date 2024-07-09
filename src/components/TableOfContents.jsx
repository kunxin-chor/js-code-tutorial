import React from 'react';

const TableOfContents = ({ manifest, currentQuestionIndex, completedQuestions, onSelectQuestion }) => {
  if (!manifest) return null;

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
      {manifest.categories.map((category, categoryIndex) => (
        <div key={category.name}>
          <h3>{category.name}</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {category.questions.map((question, questionIndex) => {
              const globalIndex = manifest.categories.slice(0, categoryIndex).reduce((sum, c) => sum + c.questions.length, 0) + questionIndex;
              return (
                <li 
                  key={question.url}
                  style={{
                    padding: '10px',
                    marginBottom: '10px',
                    backgroundColor: globalIndex === currentQuestionIndex ? '#e0e0e0' : 'white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onClick={() => onSelectQuestion(globalIndex)}
                >
                  <span>{question.title || 'Untitled Question'}</span>
                  {completedQuestions.includes(globalIndex) && (
                    <span style={{ color: 'green' }}>✓</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;