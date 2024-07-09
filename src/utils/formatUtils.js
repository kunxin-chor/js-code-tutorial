export const formatOutput = (output) => {
    if (typeof output === 'string') {
      return output.replace(/\\n/g, '\n').replace(/\\"/g, '"');
    }
    return String(output);
  };