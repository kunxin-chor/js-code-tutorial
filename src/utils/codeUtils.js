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
      originalConsoleLog("r=>",result);
      if (type === "console") {
        result = consoleOutput.join('\n');
      }

      const passed = compareResults(result, expected);

      return { func, expected, result, passed, type, prompts };
    } catch (error) {
      return { 
        func, 
        expected, 
        result: error.toString(), 
        passed: false, 
        type, 
        error: func ? `Error in test case "${func}": ${error.message}` : `Error: ${error.message}`,
        prompts
      };
    } finally {
      console.log = originalConsoleLog;  // Restore original console.log
    }
  });

  // Check if all test cases resulted in errors
  if (results.every(r => r.error)) {
    throw new Error(results[0].error);
  }
  console.log("results in runCode =>", results);
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