import React from 'react';
import { formatOutput } from '../utils/formatUtils';

const TestResults = ({ testResults }) => {
  console.log(testResults);
  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
      <h3 style={{ color: '#333' }}>Test Results</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Test Case</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Prompts</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Expected Result</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Your Result</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {testResults.map((result, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{result.func}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                {Array.isArray(result.prompts) ? result.prompts.join(', ') : result.prompts}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                {formatOutput(result.expected)}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                {result.result !== null ? formatOutput(result.result) : 'Not run yet'}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {result.result === null ? 'Not run yet' :
                  result.passed ? '✅ PASS' : '❌ FAIL'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TestResults;