const QUESTIONS_ROOT_URL = import.meta.env.VITE_QUESTIONS_ROOT_URL || "/questions/";
const MANIFEST_URL = import.meta.env.VITE_MANIFEST_URL || "/questions/manifest.json";

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

import { simpleChecksum } from './utils/hashUtils';

export const getManifest = async () => {
  console.log('Fetching manifest from:', MANIFEST_URL);
  const manifestContent = await fetchContent(MANIFEST_URL);
  const manifest = JSON.parse(manifestContent);

  manifest.categories.forEach((category) => {
    category.questions.forEach((question) => {
      // Create a consistent ID based on the category name and question URL
      const idSource = `${category.name}_${question.url}`;
      question.id = simpleChecksum(idSource);
    });
  });

  return manifest;
};

export const loadQuestion = async (questionPath) => {
  const fullUrl = `${QUESTIONS_ROOT_URL}${questionPath}`;
  console.log('Fetching question from:', fullUrl);
  const content = await fetchContent(fullUrl);
  return parseQuestionContent(content);
};