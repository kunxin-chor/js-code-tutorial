export const formatOutput = (output) => {
  if (typeof output === 'object' && output !== null) {
    return JSON.stringify(output, null, 2);
  } else if (Array.isArray(output)) {
    return `[${output.map(item => formatOutput(item)).join(', ')}]`;
  } else if (typeof output === 'string') {
    return `"${output}"`;
  } else {
    return String(output);
  }
};