const runCode = (code, testCases) => {
  const results = testCases.map(({ func, expected, type, prompts }) => {
    let result;
    let consoleOutput = [];
    const originalConsoleLog = console.log;
  
    
    try {
      console.log = (...args) => {
        consoleOutput.push(args.join(' '));
        originalConsoleLog.apply(console, args);
      };

      let promptIndex = 0;
      const mockPrompt = () => {
        if (prompts && promptIndex < prompts.length) {
          return prompts[promptIndex++];
        }
        throw new Error('Unexpected prompt or out of prompts');
      };

      // Create a new execution context for each test case
      const executionContext = {
        prompt: mockPrompt,
        console: { log: console.log }
      };

      // Execute the user's code in the new context
      const userFunction = new Function('context', `
        with (context) {
          ${code}
          return ${func};
        }
      `);
      
      result = userFunction(executionContext);
      
      

      if (type === "console") {
        originalConsoleLog("console output =>", consoleOutput);
        result = consoleOutput.join('\n');
      }

      originalConsoleLog("result =>", result);

      const passed = compareResults(result, expected);
      const returnObj  = { func, expected, result, passed, type }
      console.log("returnObj =>", returnObj);
      return returnObj;
    } catch (error) {
      return { 
        func, 
        expected, 
        result: error.toString(), 
        passed: false, 
        type, 
        error: func ? `Error in test case "${func}": ${error.message}` : `Error: ${error.message}`
      };
    } finally {
      console.log = originalConsoleLog;  // Restore original console.log
    }
  });

  // Check if all test cases resulted in errors
  if (results.every(r => r.error)) {
    throw new Error(results[0].error);
  }

  return results;
};

const compareResults = (result, expected) => {
  if (typeof result === 'string' && typeof expected === 'string') {
    // Remove all whitespace, including newlines, before comparing
    return result.replace(/\s/g, '') === expected.replace(/\s/g, '');
  } else {
    return result === expected;
  }
};

export { runCode };