import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TableOfContents = ({ manifest, currentQuestionId, userProgress, selectQuestion }) => {
  const getCategoryForQuestion = (questionId) => {
    return manifest?.categories.find(category => 
      category.questions.some(question => question.id === questionId)
    );
  };

  const currentCategory = getCategoryForQuestion(currentQuestionId);
  
  const [userExpandedCategories, setUserExpandedCategories] = useState({});

  if (!manifest) return null;

  const isQuestionCompleted = (questionId) => {
    return userProgress && userProgress[questionId]?.completed || false;
  };

  const toggleCategory = (categoryName) => {
    setUserExpandedCategories(prev => {
      const newState = { ...prev };
      if (newState[categoryName]) {
        delete newState[categoryName];
      } else {
        newState[categoryName] = true;
      }
      return newState;
    });
  };

  const isCategoryExpanded = (categoryName) => {
    return userExpandedCategories.hasOwnProperty(categoryName) 
      ? userExpandedCategories[categoryName]
      : (currentCategory && currentCategory.name === categoryName);
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
              icon={isCategoryExpanded(category.name) ? faChevronDown : faChevronRight} 
              style={{ marginRight: '10px' }}
            />
            {category.name}
          </h3>
          {isCategoryExpanded(category.name) && (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {category.questions.map((question) => (
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
                  {isQuestionCompleted(question.id) && (
                    <span style={{ color: 'green' }}>✓</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;