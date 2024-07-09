import React from 'react';
import ReactMarkdown from 'react-markdown';

const WalkthroughDisplay = ({ walkthrough }) => (
  <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px', backgroundColor: '#f9f9f9' }}>
    <h3 style={{ color: '#333' }}>Walkthrough</h3>
    <ReactMarkdown>{walkthrough}</ReactMarkdown>
  </div>
);

export default WalkthroughDisplay;