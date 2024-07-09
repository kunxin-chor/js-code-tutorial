import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TableOfContents = ({ manifest, currentQuestionId, userProgress, selectQuestion }) => {
  const [expandedCategories, setExpandedCategories] = useState({});
 
  if (!manifest) return null;

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const isQuestionCompleted = (questionId) => {
    const completed = userProgress && userProgress[questionId]?.completed;
    return completed || false;
  };

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
      {manifest.categories.map((category) => (
        <div key={category.name}>
          <h3 
            onClick={() => toggleCategory(category.name)}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <FontAwesomeIcon 
              icon={expandedCategories[category.name] ? faChevronDown : faChevronRight} 
              style={{ marginRight: '10px' }}
            />
            {category.name}
          </h3>
          {expandedCategories[category.name] && (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {category.questions.map((question) => {
                const completed = isQuestionCompleted(question.id);
                return (
                  <li 
                    key={question.id}
                    style={{
                      padding: '10px',
                      marginBottom: '10px',
                      backgroundColor: question.id === currentQuestionId ? '#e0e0e0' : 'white',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    onClick={() => selectQuestion(question.id)}
                  >
                    <span>{question.title || 'Untitled Question'}</span>
                    {completed && (
                      <span style={{ color: 'green' }}>✓</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;