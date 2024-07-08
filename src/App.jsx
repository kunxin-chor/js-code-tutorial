import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import ReactMarkdown from 'react-markdown';
import { getQuestionsFromMarkdown } from './questionParser';



const App = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [allPassing, setAllPassing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [solutionOutput, setSolutionOutput] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getQuestionsFromMarkdown("https://raw.githubusercontent.com/kunxin-chor/js-code-tutorial/main/questions.md");
      setQuestionsData(questions);
      if (questions.length > 0) {
        setCurrentQuestion(0);  // Set the initial question
      }
    };
    fetchQuestions();
  }, []);
  
  useEffect(() => {
    if (questionsData.length > 0) {
      setCode(questionsData[currentQuestion].initialCode);
      setTestResults(questionsData[currentQuestion].testCases.map(tc => ({ ...tc, result: null, passed: null })));
      setAllPassing(false);
      setAttempts(0);
      setShowSolution(false);
      setSolutionOutput([]);
    }
  }, [currentQuestion, questionsData]); 

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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {questionsData.length > 0 ? (
        <>
          <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: '#333' }}>{questionsData[currentQuestion].title}</h2>
            <ReactMarkdown>{questionsData[currentQuestion].description}</ReactMarkdown>
          </div>

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

          <button 
            onClick={handleRunCode} 
            style={{ 
              marginBottom: '20px', 
              padding: '10px 20px', 
              fontSize: '16px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            Run Code
          </button>

          <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '15px' }}>
            <h3 style={{ color: '#333' }}>Test Results</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Test Case</th>
                  <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Expected Result</th>
                  <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Your Result</th>
                  <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Solution Result</th>
                  <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {testResults.map((result, index) => (
                  <tr key={index}>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{result.func}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{JSON.stringify(result.expected)}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{result.result !== null ? JSON.stringify(result.result) : 'Not run yet'}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{solutionOutput[index] ? JSON.stringify(solutionOutput[index].result) : 'Not shown'}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                      {result.passed === null ? 'Not run yet' : 
                       result.passed ? '✅ PASS' : '❌ FAIL'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ color: '#333' }}>Explanation</h3>
            <ReactMarkdown>{questionsData[currentQuestion].explanation}</ReactMarkdown>
          </div>
        </>
      ) : (
        <div>Loading questions...</div>
      )}
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