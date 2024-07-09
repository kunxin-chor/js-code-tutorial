const QUESTIONS_ROOT_URL = process.env.REACT_APP_QUESTIONS_ROOT_URL;
const MANIFEST_URL = process.env.REACT_APP_MANIFEST_URL;

const fetchContent = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.text();
};

const parseQuestionContent = (content) => {
  const sections = content.split(/---(\w+)---/).slice(1);
  const question = {};

  for (let i = 0; i < sections.length; i += 2) {
    const sectionName = sections[i].toLowerCase();
    const sectionContent = sections[i + 1].trim();

    switch (sectionName) {
      case 'title':
      case 'description':
      case 'explanation':
        question[sectionName] = sectionContent;
        break;
      case 'initialcode':
        question.initialCode = sectionContent;
        break;
      case 'testcases':
        question.testCases = JSON.parse(sectionContent);
        break;
      case 'solution':
        question.solution = sectionContent;
        break;
    }
  }

  return question;
};

export const getManifest = async () => {
  const manifestContent = await fetchContent(MANIFEST_URL);
  return JSON.parse(manifestContent);
};

export const loadQuestion = async (questionPath) => {
  const content = await fetchContent(`${QUESTIONS_ROOT_URL}/${questionPath}`);
  return parseQuestionContent(content);
};