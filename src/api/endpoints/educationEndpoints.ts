import {AxiosResponse} from 'axios';
import {Education} from '../../modules/portfolio';
import {portfolioApi} from '../portfolioApi';

/**
 * Posts an education object to the server.
 * @param education The education object to post.
 * @returns A promise that resolves to the Axios response containing the message and ID.
 */
export const postEducation = async (education: Education): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    import.meta.env.DEV && console.log(education); // Log the education object if in development environment
    const postEducationEndpoint = '/Education'; // API endpoint for posting education
    return await portfolioApi(true).post(postEducationEndpoint, education);
};

/**
 * Updates an existing education object on the server.
 * @param education The education object to update.
 * @returns A promise that resolves to the Axios response containing the message.
 */
export const putEducation = async (education: Education): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(education); // Log the education object if in development environment
    const putEducationEndpoint = 'Education'; // API endpoint for updating education
    return await portfolioApi(true).put(putEducationEndpoint, education);
};

/**
 * Deletes an education object from the server by ID.
 * @param id The ID of the education object to delete.
 * @returns A promise that resolves to the Axios response containing the message.
 */
export const deleteEducation = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(id); // Log the ID if in development environment
    const deleteEducationEndpoint = `/Education/${id}`; // API endpoint for deleting education
    return await portfolioApi(true).delete(deleteEducationEndpoint);
};
