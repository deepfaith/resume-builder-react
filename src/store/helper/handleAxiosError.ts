import {AxiosError} from 'axios';

/**
 * Handles errors thrown by Axios requests.
 * @param err - The error object caught.
 * @returns A string message describing the error.
 */
export const handleAxiosError = (err: unknown): string => {
    // Check if the environment is development for logging
    if (import.meta.env.DEV) {
        console.error('Axios Error: ');
        console.error(err);
    }

    // Cast the error to an AxiosError type
    const error = err as AxiosError;

    // Check if the error has a response object
    if (error.response) {
        // Extract and return the message from the response data
        const {msg} = error.response.data as { msg: string };
        return msg;
    } else {
        // Return the error message directly from the error object
        const msg = error.message;
        return msg;
    }
};
