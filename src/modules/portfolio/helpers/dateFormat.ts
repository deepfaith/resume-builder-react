/**
 * Formats the start date into a string representation of month and year.
 * @param start The start date as a string.
 * @returns The formatted start date as "month/year".
 */
export const formatedStartDate = (start: string): string => {
    const startDate = new Date(start);
    return `${startDate.getUTCMonth() + 1}/${startDate.getUTCFullYear()}`;
};

/**
 * Formats the end date into a string representation of month and year or returns "Present" if ongoing.
 * @param end The end date as a string or undefined if ongoing.
 * @param isActual Boolean indicating if the end date is the current date.
 * @returns The formatted end date as "month/year" or "Present" if ongoing.
 */
export const formatedEndDate = (end: string | undefined, isActual: boolean): string => {
    if (!isActual && end) {
        const endDate = new Date(end);
        return `${endDate.getUTCMonth() + 1}/${endDate.getUTCFullYear()}`;
    }
    return 'Present';
};
