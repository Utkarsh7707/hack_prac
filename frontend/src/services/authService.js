// Authentication API service
import apiClient from './api';

export const authService = {
  /**
   * Sign up new user
   * @param {string} name - User full name
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise} User data with token
   */
  signup: (name, email, password) =>
    apiClient.post('/auth/signup', { name, email, password }),

  /**
   * Log in existing user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise} User data with token
   */
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),

  /**
   * Log out user (clear local storage)
   */
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Check if user is authenticated
   * @returns {boolean} True if token exists
   */
  isAuthenticated: () => !!localStorage.getItem('token'),

  /**
   * Get stored user data
   * @returns {Object} User object from localStorage
   */
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  /**
   * Get stored token
   * @returns {string} JWT token
   */
  getToken: () => localStorage.getItem('token'),
};
