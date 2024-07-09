import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({ code, setCode }) => (
  <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
    <h3 style={{ color: '#333' }}>Your Code</h3>
    <MonacoEditor
      width="100%"
      height="200"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={{
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
      }}
      onChange={setCode}
    />
  </div>
);

export default CodeEditor;