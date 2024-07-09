const runCode = (code, testCases) => {
  try {
    return testCases.map(({ func, expected, type, prompts }) => {
      try {
        let result;
        let consoleOutput = [];
        const originalConsoleLog = console.log;
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
  
        if (type === "console") {
          const testFunction = new Function('prompt', `
            ${code}
            ${func};
          `);
          testFunction(mockPrompt);
          result = consoleOutput.join('\n');
        } else {
          const testFunction = new Function('prompt', `
            ${code}
            return ${func};
          `);
          result = testFunction(mockPrompt);
        }
  
        console.log = originalConsoleLog;  // Restore original console.log
  
        const passed = compareResults(result, expected);
        return { func, expected, result, passed, type };
      } catch (error) {
        console.log = originalConsoleLog;  // Restore original console.log in case of error
        return { func, expected, result: error.toString(), passed: false, type };
      }
    });
  } catch (error) {

  }
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