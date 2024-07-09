const fetchMarkdownContent = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.text();
};

const parseMarkdown = (markdown) => {
  const questions = [];
  const questionBlocks = markdown.split('---QUESTION---').slice(1); // Skip the first empty element

  questionBlocks.forEach(block => {
    const sections = block.split(/---(\w+)---/).slice(1); // Skip the first empty element
    const question = {};

    for (let i = 0; i < sections.length; i += 2) {
      const sectionName = sections[i].toLowerCase();
      const content = sections[i + 1].trim();

      switch (sectionName) {
        case 'title':
        case 'description':
        case 'explanation':
          question[sectionName] = content;
          break;
        case 'initialcode':
          question.initialCode = content;
          break;
        case 'testcases':
          question.testCases = JSON.parse(content);
          // The prompts are already parsed as part of the JSON, no need for additional parsing
          break;
        case 'solution':
          question.solution = content;
          break;
      }
    }

    questions.push(question);
  });

  return questions;
};

export const getQuestionsFromMarkdown = async (url) => {
  const markdown = await fetchMarkdownContent(url);
  return parseMarkdown(markdown);
};