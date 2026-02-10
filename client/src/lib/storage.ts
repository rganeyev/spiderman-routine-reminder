/**
 * Storage utilities for persisting task completion with daily reset
 */

const STORAGE_KEY = 'spiderman-routine-tasks';
const DATE_KEY = 'spiderman-routine-date';

interface StoredTasks {
  [sectionTitle: string]: number[]; // Array of checked task indices
}

/**
 * Get today's date as a string (YYYY-MM-DD)
 */
function getTodayString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

/**
 * Check if stored data is from today
 */
function isDataFromToday(): boolean {
  const storedDate = localStorage.getItem(DATE_KEY);
  return storedDate === getTodayString();
}

/**
 * Load checked tasks for a section
 */
export function loadCheckedTasks(sectionTitle: string): Set<number> {
  try {
    // If data is not from today, clear it
    if (!isDataFromToday()) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(DATE_KEY);
      return new Set();
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return new Set();

    const data: StoredTasks = JSON.parse(stored);
    const taskIndices = data[sectionTitle] || [];
    return new Set(taskIndices);
  } catch (error) {
    console.warn('Error loading tasks:', error);
    return new Set();
  }
}

/**
 * Save checked tasks for a section
 */
export function saveCheckedTasks(sectionTitle: string, checkedTasks: Set<number>) {
  try {
    // Update the date
    localStorage.setItem(DATE_KEY, getTodayString());

    // Load existing data
    const stored = localStorage.getItem(STORAGE_KEY);
    const data: StoredTasks = stored ? JSON.parse(stored) : {};

    // Update the section's tasks
    data[sectionTitle] = Array.from(checkedTasks);

    // Save back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Error saving tasks:', error);
  }
}
