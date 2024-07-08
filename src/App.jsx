import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import ReactMarkdown from 'react-markdown';

const questionsData = [
  {
    id: 1,
    question: "Write a function that adds two numbers.\n\n```javascript\nfunction add(a, b) {\n  // Your code here\n}\n```\n\nMake sure your function:\n- Takes two parameters\n- Returns the sum of these parameters",
    initialCode: "function add(a, b) {\n  // Your code here\n}",
    testCases: [
      { func: "add(2, 3)", expected: 5, type: "return" },
      { func: "add(-1, 1)", expected: 0, type: "return" },
      { func: "add(0, 0)", expected: 0, type: "return" },
    ],
    explanation: "The `add` function should take two parameters and return their sum.",
    solution: "function add(a, b) {\n  return a + b;\n}"
  },
  {
    id: 2,
    question: "Write a function that prints a pyramid of asterisks with a given number of rows.\n\n```javascript\nfunction printPyramid(rows) {\n  // Your code here\n}\n```\n\nFor example, `printPyramid(3)` should output:\n```\n  *\n ***\n*****\n```",
    initialCode: "function printPyramid(rows) {\n  // Your code here\n}",
    testCases: [
      { func: "printPyramid(3)", expected: "  *\n ***\n*****", type: "console" },
      { func: "printPyramid(1)", expected: "*", type: "console" },
      { func: "printPyramid(5)", expected: "    *\n   ***\n  *****\n *******\n*********", type: "console" },
    ],
    explanation: "The `printPyramid` function should use console.log to print a pyramid of asterisks with the given number of rows.",
    solution: `function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = ' '.repeat(rows - i) + '*'.repeat(2 * i - 1);
    console.log(row);
  }
}`
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [allPassing, setAllPassing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [solutionOutput, setSolutionOutput] = useState([]);

  useEffect(() => {
    setCode(questionsData[currentQuestion].initialCode);
    setTestResults(questionsData[currentQuestion].testCases.map(tc => ({...tc, result: null, passed: null})));
    setAllPassing(false);
    setAttempts(0);
    setShowSolution(false);
    setSolutionOutput([]);
  }, [currentQuestion]);

  const runCode = (codeToRun) => {
    const results = questionsData[currentQuestion].testCases.map(({ func, expected, type }) => {
      try {
        let result;
        let consoleOutput = [];
        const mockConsoleLog = (...args) => {
          consoleOutput.push(args.join(' '));
        };

        if (type === "console") {
          const testFunction = new Function('console', `
            ${codeToRun}
            ${func};
          `);
          testFunction({ log: mockConsoleLog });
          result = consoleOutput.join('\n');
        } else {
          const testFunction = new Function(`
            ${codeToRun}
            return ${func};
          `);
          result = testFunction();
        }

        const passed = compareResults(result, expected);
        return { func, expected, result, passed, type };
      } catch (error) {
        return { func, expected, result: error.toString(), passed: false, type };
      }
    });

    return results;
  };

  const handleRunCode = () => {
    const results = runCode(code);
    setTestResults(results);
    setAllPassing(results.every(r => r.passed));
    setAttempts(attempts + 1);

    if (results.every(r => r.passed) || attempts >= 2) {
      const solutionResults = runCode(questionsData[currentQuestion].solution);
      setSolutionOutput(solutionResults);
    }
  };

  const compareResults = (result, expected) => {
    if (typeof result === 'string' && typeof expected === 'string') {
      return result.trim() === expected.trim();
    } else {
      return result === expected;
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleViewSolution = () => {
    setShowSolution(true);
    const solutionResults = runCode(questionsData[currentQuestion].solution);
    setSolutionOutput(solutionResults);
  };

  const formatOutput = (output) => {
    if (typeof output === 'string') {
      return output.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < output.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return String(output);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
        <h2>Question {currentQuestion + 1}</h2>
        <ReactMarkdown>{questionsData[currentQuestion].question}</ReactMarkdown>
      </div>

      <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
        <h2>Your Code</h2>
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

      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleRunCode} style={{ marginRight: '10px', padding: '10px', cursor: 'pointer' }}>Run Code</button>
        {(allPassing || attempts >= 3) && !showSolution && (
          <button onClick={handleViewSolution} style={{ padding: '10px', cursor: 'pointer' }}>View Solution</button>
        )}
        {allPassing && <button onClick={nextQuestion} style={{ marginLeft: '10px', padding: '10px', cursor: 'pointer' }}>Next Question</button>}
      </div>

      {showSolution && (
        <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
          <h2>Solution</h2>
          <pre style={preStyle}>{questionsData[currentQuestion].solution}</pre>
        </div>
      )}

      <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
        <h2>Test Results</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Test Case</th>
              <th style={tableHeaderStyle}>Expected Result</th>
              <th style={tableHeaderStyle}>Your Result</th>
              <th style={tableHeaderStyle}>Solution Result</th>
              <th style={tableHeaderStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {testResults.map((result, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{result.func}</td>
                <td style={tableCellStyle}>
                  <pre style={preStyle}>{formatOutput(result.expected)}</pre>
                </td>
                <td style={tableCellStyle}>
                  <pre style={preStyle}>
                    {result.result !== null ? formatOutput(result.result) : 'Not run yet'}
                  </pre>
                </td>
                <td style={tableCellStyle}>
                  <pre style={preStyle}>
                    {solutionOutput[index] ? formatOutput(solutionOutput[index].result) : 'Not shown'}
                  </pre>
                </td>
                <td style={tableCellStyle}>
                  {result.passed === null ? 'Not run yet' : 
                   result.passed ? '✅ PASS' : '❌ FAIL'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
        <h2>Explanation</h2>
        <ReactMarkdown>{questionsData[currentQuestion].explanation}</ReactMarkdown>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd'
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd'
};

const preStyle = {
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
  margin: 0,
  fontFamily: 'monospace'
};

export default App;