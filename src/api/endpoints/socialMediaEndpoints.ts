import {AxiosResponse} from 'axios';
import {SocialMedia} from '../../modules/portfolio';
import {portfolioApi} from '../portfolioApi';

/**
 * Posts a new social media entry to the server.
 * @param socialMedia The social media data to post.
 * @returns A promise that resolves to the Axios response with message and ID.
 */
export const postSocialMedia = async (socialMedia: SocialMedia): Promise<AxiosResponse<{
    msg: string,
    id: string
}>> => {
    import.meta.env.DEV && console.log(socialMedia);
    const postSocialMediaEndpoint = '/SocialMedia'; // Endpoint for posting social media data
    return await portfolioApi(true).post(postSocialMediaEndpoint, socialMedia);
};

/**
 * Updates an existing social media entry on the server.
 * @param socialMedia The social media data to update.
 * @returns A promise that resolves to the Axios response with a message.
 */
export const putSocialMedia = async (socialMedia: SocialMedia): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(socialMedia);
    const putSocialMediaEndpoint = '/SocialMedia'; // Endpoint for updating social media data
    return await portfolioApi(true).put(putSocialMediaEndpoint, socialMedia);
};

/**
 * Deletes a social media entry from the server.
 * @param id The ID of the social media entry to delete.
 * @returns A promise that resolves to the Axios response with a message.
 */
export const deleteSocialMedia = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    import.meta.env.DEV && console.log(id);
    const deleteSocialMediaEndpoint = `/SocialMedia/${id}`; // Endpoint for deleting social media data
    return await portfolioApi(true).delete(deleteSocialMediaEndpoint);
};
