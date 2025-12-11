// Theme Toggle Utility
// Provides three exported functions for theme management

const THEME_KEY = 'jagtrack-theme'

/**
 * Initialize theme on app load
 * Checks localStorage for saved preference, defaults to 'light'
 * Applies theme to document
 */
export function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY)
  const theme = savedTheme || 'light'
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}

/**
 * Toggle between light and dark themes
 * Saves preference to localStorage
 * Returns the new theme
 */
export function toggleTheme() {
  const currentTheme = getCurrentTheme()
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem(THEME_KEY, newTheme)
  return newTheme
}

/**
 * Get the current theme
 * Returns 'light' or 'dark'
 */
export function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light'
}
