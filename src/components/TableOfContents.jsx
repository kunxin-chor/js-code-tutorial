import React, { useState, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';

const TableOfContents = React.memo(({ manifest, currentQuestionId, userProgress, selectQuestion }) => {
  const [userExpandedCategories, setUserExpandedCategories] = useState({});

  const getCategoryForQuestion = useCallback((questionId) => {
    return manifest?.categories.find(category => 
      category.questions.some(question => question.id === questionId)
    );
  }, [manifest]);

  const currentCategory = useMemo(() => getCategoryForQuestion(currentQuestionId), [getCategoryForQuestion, currentQuestionId]);

  const isQuestionCompleted = useCallback((questionId) => {
    const questionProgress = userProgress[questionId];
    return questionProgress && questionProgress.allPassing;
  }, [userProgress]);

  const toggleCategory = useCallback((categoryName) => {
    setUserExpandedCategories(prev => {
      const newState = { ...prev };
      if (newState[categoryName]) {
        delete newState[categoryName];
      } else {
        newState[categoryName] = true;
      }
      return newState;
    });
  }, []);

  const isCategoryExpanded = useCallback((categoryName) => {
    return userExpandedCategories.hasOwnProperty(categoryName) 
      ? userExpandedCategories[categoryName]
      : (currentCategory && currentCategory.name === categoryName);
  }, [userExpandedCategories, currentCategory]);

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
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
});

export default TableOfContents;