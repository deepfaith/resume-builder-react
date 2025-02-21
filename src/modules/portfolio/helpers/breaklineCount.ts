/**
 * Counts the number of newline characters in a given string.
 * @param {string | null | undefined} str - The string to count newlines in.
 * @returns {number} The number of newline characters.
 */
export const breaklineCount = (str: string | null | undefined): number =>
    str ? str.split('\n').length - 1 : 0;
