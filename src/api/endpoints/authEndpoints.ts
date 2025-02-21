import {AxiosResponse} from 'axios';
import {portfolioApi} from '../portfolioApi';

/**
 * Registers a new user.
 * @param params - The registration parameters including id, email, username, and name.
 * @returns A promise that resolves to the Axios response with the registration result as a string.
 */
export const postRegister = async (params: {
    id: string,
    email: string,
    username: string,
    name: string
}): Promise<AxiosResponse<string>> => {
    import.meta.env.DEV && console.log(params);
    const postRegisterEndpoint = '/Auth/Register'; // Endpoint for registering a new user
    return await portfolioApi(false).post(postRegisterEndpoint, params);
};

/**
 * Checks if a user is already registered.
 * @param id - The user's ID.
 * @param email - The user's email.
 * @returns A promise that resolves to the Axios response indicating whether the user is registered.
 */
export const getIsRegistered = async ({id, email}: { id: string, email: string }): Promise<AxiosResponse<boolean>> => {
    import.meta.env.DEV && console.log({id, email});
    const getIsRegisteredBackendEndpoint = `/Auth/Registered?email=${email}&id=${id}`; // Endpoint to check if user is registered
    return await portfolioApi(false).get(getIsRegisteredBackendEndpoint);
};

/**
 * Logs in a user.
 * @param login - The login details including id, username, and email.
 * @returns A promise that resolves to the Axios response with the login result as a string.
 */
export const postLogin = async (login: {
    id: string,
    username: string,
    email: string
}): Promise<AxiosResponse<string>> => {
    import.meta.env.DEV && console.log(login);
    const postLoginEndpoint = '/Auth/Login'; // Endpoint for user login
    return await portfolioApi(false).post(postLoginEndpoint, login);
};
