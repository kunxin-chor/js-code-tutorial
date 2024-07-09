import React from 'react';

const SolutionDisplay = ({ solution }) => (
  <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
    <h3 style={{ color: '#333' }}>Solution</h3>
    <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f5f5f5', padding: '10px' }}>
      {solution}
    </pre>
  </div>
);

export default SolutionDisplay;