const STORAGE_KEY = 'codingTutorialProgress';

const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress to localStorage:', error);
  }
};

const loadProgress = () => {
  try {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    return savedProgress ? JSON.parse(savedProgress) : null;
  } catch (error) {
    console.error('Error loading progress from localStorage:', error);
    return null;
  }
};

const clearProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing progress from localStorage:', error);
  }
};

export {saveProgress, loadProgress, clearProgress};