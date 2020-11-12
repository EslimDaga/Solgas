/**
 * Local Cache Manager
 * @author Elias
 */
const storage = window.localStorage;

export default {
  /**
   * @param {string} key
   * @param {object} value
   * @return {Object}
   */
  setItem: (key, value) => {
    storage.setItem(key, JSON.stringify(value));
    return value;
  },

  /**
   * @param {string} key
   * @returns {Boolean}
   */
  hasThis: (key) => {
    return storage.hasOwnProperty(key);
  },

  /**
   * @param {string} key
   * @returns {Object}
   */
  getItem: (key) => {
    return JSON.parse(storage.getItem(key));
  },

  /**
   * @param {string} key
   * @param {object} value
   * @returns {Object}
   */
  remember: (key, value) => {
    if (storage.hasOwnProperty(key)) {
      return JSON.parse(storage.getItem(key));
    } else {
      storage.setItem(key, JSON.stringify(value));
      return value;
    }
  },

  /**
   * @param {string} key
   * @returns  {void}
   */
  removeItem: (key) => {
    return storage.removeItem(key);
  },

  /**
   * @returns {void}
   */
  cleanAll: () => {
    return storage.clear();
  },
};
