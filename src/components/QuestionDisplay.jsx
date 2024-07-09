import React from 'react';
import ReactMarkdown from 'react-markdown';

const QuestionDisplay = ({ question }) => (
  <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px', backgroundColor: '#f9f9f9' }}>
    <h2 style={{ color: '#333' }}>{question.title}</h2>
    <ReactMarkdown>{question.description}</ReactMarkdown>
  </div>
);

export default QuestionDisplay;