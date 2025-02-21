import {AxiosResponse} from 'axios';
import {ProfileInfo, User} from '../../modules/portfolio';
import {portfolioApi} from '../portfolioApi';

/**
 * Fetches a list of users from a specific page.
 * @param page The page number to fetch.
 * @returns A promise that resolves to the Axios response.
 */
export const getUsers = async (page: number): Promise<AxiosResponse> => {
    import.meta.env.DEV && console.log(page);
    const getUsersEndpoint = `/User/page?number=${page}`;
    return portfolioApi(false).get(getUsersEndpoint);
};

/**
 * Fetches the total count of users.
 * @returns A promise that resolves to the Axios response with the count of users.
 */
export const getUsersCount = async (): Promise<AxiosResponse<number>> => {
    const getUsersCountEndpoint = '/User/count';
    return portfolioApi(false).get(getUsersCountEndpoint);
};

/**
 * Checks if a username is available.
 * @param username The username to check.
 * @returns A promise that resolves to the Axios response with a boolean indicating availability.
 */
export const getIsUsernameAvailable = async (username: string): Promise<AxiosResponse<boolean>> => {
    import.meta.env.DEV && console.log(username);
    const getIsUsernameAvailableEndpoint = `/User/available?username=${username}`;
    return portfolioApi(false).get(getIsUsernameAvailableEndpoint);
};

/**
 * Fetches the username based on user ID and email.
 * @param id The user ID.
 * @param email The user email.
 * @returns A promise that resolves to the Axios response with the username.
 */
export const getUsername = async ({id, email}: { id: string, email: string }): Promise<AxiosResponse<string>> => {
    import.meta.env.DEV && console.log({id, email});
    const getUsernameEndpoint = `/User/username?email=${email}&id=${id}`;
    return portfolioApi(false).get(getUsernameEndpoint);
};

/**
 * Fetches a user by username.
 * @param username The username to fetch.
 * @returns A promise that resolves to the Axios response with user data.
 */
export const getUser = async (username: string): Promise<AxiosResponse<User>> => {
    import.meta.env.DEV && console.log(username);
    const getUserEndpoint = `/User/${username}`;
    return portfolioApi(false).get(getUserEndpoint);
};

/**
 * Updates a user's profile information.
 * @param profileInfo The profile information to update.
 * @returns A promise that resolves to the Axios response with a message.
 */
export const putProfile = async (profileInfo: ProfileInfo): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(profileInfo);
    const putProfileEndpoint = '/User';
    return portfolioApi(true).put(putProfileEndpoint, profileInfo);
};

/**
 * Deletes a user.
 * @returns A promise that resolves to the Axios response with a message.
 */
export const deleteUser = async (): Promise<AxiosResponse<{ msg: string }>> => {
    const deleteUserEndpoint = '/User';
    return portfolioApi(true).delete(deleteUserEndpoint);
};
