import {AxiosResponse} from 'axios';
import {Experience} from '../../modules/portfolio';
import {portfolioApi} from '../portfolioApi';

/**
 * Posts an experience object to the server.
 * @param experience The experience data to post.
 * @returns A promise that resolves to the Axios response containing the message and ID.
 */
export const postExperience = async (experience: Experience): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    import.meta.env.DEV && console.log(experience);
    const postExperienceEndpoint = '/Experience'; // Endpoint for posting experience
    return await portfolioApi(true).post(postExperienceEndpoint, experience);
};

/**
 * Updates an existing experience object on the server.
 * @param experience The updated experience data.
 * @returns A promise that resolves to the Axios response containing the message.
 */
export const putExperience = async (experience: Experience): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(experience);
    const putExperienceEndpoint = '/Experience'; // Endpoint for updating experience
    return await portfolioApi(true).put(putExperienceEndpoint, experience);
};

/**
 * Deletes an experience object from the server by ID.
 * @param id The ID of the experience to delete.
 * @returns A promise that resolves to the Axios response containing the message.
 */
export const deleteExperience = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(id);
    const deleteExperienceEndpoint = `/Experience/${id}`; // Endpoint for deleting experience
    return await portfolioApi(true).delete(deleteExperienceEndpoint);
};
