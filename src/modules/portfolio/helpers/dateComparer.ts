/**
 * Compares two Date objects and returns a number indicating their relative order.
 * @param {Date} date1 - The first date to compare.
 * @param {Date} date2 - The second date to compare.
 * @returns {number} - Returns -1 if date1 is later than date2, 1 if date1 is earlier than date2, and 0 if they are equal.
 */
export const dateComparer = (date1: Date, date2: Date): number => {
    if (date1 > date2) return -1; // date1 is later than date2
    if (date2 > date1) return 1;  // date2 is later than date1
    return 0; // dates are equal
};
