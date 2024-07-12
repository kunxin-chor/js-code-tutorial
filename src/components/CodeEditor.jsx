import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Resizable } from 're-resizable';
import 'react-resizable/css/styles.css';

const CodeEditor = ({ code, setCode }) => {
  const [height, setHeight] = useState(200);

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden' }}>
      <h3 style={{ color: '#333', padding: '15px 15px 0' }}>Your Code</h3>
      <Resizable
        size={{ width: '100%', height: height }}
        minHeight={100}
        maxHeight={500}
        onResizeStop={(e, direction, ref, d) => {
          setHeight(height + d.height);
        }}
        enable={{ bottom: true }}
      >
        <MonacoEditor
          width="100%"
          height={`${height}px`}
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
      </Resizable>
      <div 
        style={{ 
          height: '10px', 
          backgroundColor: '#f0f0f0', 
          borderTop: '1px solid #ddd',
          cursor: 'ns-resize',
          textAlign: 'center',
          fontSize: '10px',
          lineHeight: '10px'
        }}
      >
        ⋮
      </div>
    </div>
  );
};

export default CodeEditor;