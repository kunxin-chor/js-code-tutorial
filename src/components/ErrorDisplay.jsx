import React from 'react';

const ErrorDisplay = ({ errorMessage }) => {
  if (!errorMessage) return null;

  let displayMessage = errorMessage;
  if (errorMessage instanceof Error) {
    displayMessage = errorMessage.message;
  }

  return (
    <div style={{ 
      backgroundColor: '#ffebee', 
      color: '#c62828', 
      padding: '10px', 
      borderRadius: '4px', 
      marginBottom: '20px' 
    }}>
      <strong>Error:</strong> {displayMessage}
    </div>
  );
};

export default ErrorDisplay;