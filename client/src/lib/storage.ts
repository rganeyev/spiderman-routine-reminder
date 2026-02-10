/**
 * Storage utilities for persisting task completion with daily reset
 * Now supports separate storage for each kid
 */

type KidId = 'emin' | 'samira';

function getStorageKey(kidId: KidId): string {
  return `routine-tasks-${kidId}`;
}

function getDateKey(kidId: KidId): string {
  return `routine-date-${kidId}`;
}

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
function isDataFromToday(kidId: KidId): boolean {
  const storedDate = localStorage.getItem(getDateKey(kidId));
  return storedDate === getTodayString();
}

/**
 * Load checked tasks for a section
 */
export function loadCheckedTasks(sectionTitle: string, kidId: KidId): Set<number> {
  try {
    // If data is not from today, clear it
    if (!isDataFromToday(kidId)) {
      localStorage.removeItem(getStorageKey(kidId));
      localStorage.removeItem(getDateKey(kidId));
      return new Set();
    }

    const stored = localStorage.getItem(getStorageKey(kidId));
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
export function saveCheckedTasks(sectionTitle: string, checkedTasks: Set<number>, kidId: KidId) {
  try {
    // Update the date
    localStorage.setItem(getDateKey(kidId), getTodayString());

    // Load existing data
    const stored = localStorage.getItem(getStorageKey(kidId));
    const data: StoredTasks = stored ? JSON.parse(stored) : {};

    // Update the section's tasks
    data[sectionTitle] = Array.from(checkedTasks);

    // Save back to localStorage
    localStorage.setItem(getStorageKey(kidId), JSON.stringify(data));
  } catch (error) {
    console.warn('Error saving tasks:', error);
  }
}

/**
 * Get the selected kid from localStorage
 */
export function getSelectedKid(): KidId {
  const stored = localStorage.getItem('selected-kid');
  return (stored === 'samira' ? 'samira' : 'emin') as KidId;
}

/**
 * Save the selected kid to localStorage
 */
export function saveSelectedKid(kidId: KidId) {
  localStorage.setItem('selected-kid', kidId);
}
