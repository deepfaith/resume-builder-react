import axios, {AxiosInstance} from 'axios';

/**
 * Creates an AxiosInstance configured for the portfolio API.
 * @param requiresAuth - Indicates if the API requires authentication.
 * @returns {AxiosInstance} - The configured Axios instance.
 */
export const portfolioApi = (requiresAuth: boolean): AxiosInstance =>
    requiresAuth
        ? // Create an axios instance with authentication
        axios.create({
            baseURL: import.meta.env.VITE_API_URL, // Base URL from environment variables
            headers: {'Authorization': `Bearer ${localStorage.getItem('AUTH_TKN')}`} // Authorization header using token from local storage
        })
        : // Create an axios instance without authentication
        axios.create({
            baseURL: import.meta.env.VITE_API_URL, // Base URL from environment variables
        });
