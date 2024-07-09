export const runCode = (codeToRun, testCases) => {
    return testCases.map(({ func, expected, type, prompts }) => {
      try {
        let result;
        let consoleOutput = [];
        const mockConsoleLog = (...args) => {
          consoleOutput.push(args.join(' '));
        };
  
        let promptIndex = 0;
        const mockPrompt = () => {
          if (prompts && promptIndex < prompts.length) {
            return prompts[promptIndex++];
          }
          throw new Error('Unexpected prompt or out of prompts');
        };
  
        if (type === "console") {
          const testFunction = new Function('console', 'prompt', `
            ${codeToRun}
            ${func};
          `);
          testFunction({ log: mockConsoleLog }, mockPrompt);
          result = consoleOutput.join('\n');
        } else {
          const testFunction = new Function('prompt', `
            ${codeToRun}
            return ${func};
          `);
          result = testFunction(mockPrompt);
        }
  
        const passed = compareResults(result, expected);
        return { func, expected, result, passed, type };
      } catch (error) {
        return { func, expected, result: error.toString(), passed: false, type };
      }
    });
  };
  
  export const compareResults = (result, expected) => {
    if (typeof result === 'string' && typeof expected === 'string') {
      return result.trim() === expected.trim();
    } else {
      return result === expected;
    }
  };