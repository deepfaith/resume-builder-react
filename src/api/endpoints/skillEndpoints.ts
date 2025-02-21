import {AxiosResponse} from 'axios';
import {UserSkill} from '../../modules/portfolio';
import {Skill} from '../../modules/portfolio/models/Skill';
import {portfolioApi} from '../portfolioApi';

/**
 * Fetches all skills from the server.
 * @returns {Promise<AxiosResponse<Skill[]>>} A promise that resolves to the Axios response containing the array of skills.
 */
export const getSkill: () => Promise<AxiosResponse<Skill[]>> = async () => {
    const getSkillEndpoint = '/Skill'; // Endpoint for getting skills
    return await portfolioApi(false).get(getSkillEndpoint);
};

/**
 * Posts a new skill to the server.
 * @param {UserSkill} skill - The skill to post.
 * @returns {Promise<AxiosResponse<{ msg: string, id: string }>>} A promise that resolves to the Axios response containing the message and ID of the created skill.
 */
export const postSkill: (skill: UserSkill) => Promise<AxiosResponse<{ msg: string, id: string }>> = async (skill) => {
    import.meta.env.DEV && console.log(skill); // Log skill in development environment
    const postSkillEndpoint = '/Skill'; // Endpoint for posting skills
    return await portfolioApi(true).post(postSkillEndpoint, skill);
};

/**
 * Updates an existing skill on the server.
 * @param {UserSkill} skill - The skill to update.
 * @returns {Promise<AxiosResponse<{ msg: string }>>} A promise that resolves to the Axios response containing the update message.
 */
export const putSkill: (skill: UserSkill) => Promise<AxiosResponse<{ msg: string }>> = async (skill) => {
    import.meta.env.DEV && console.log(skill); // Log skill in development environment
    const putSkillEndpoint = '/Skill'; // Endpoint for updating skills
    return await portfolioApi(true).put(putSkillEndpoint, skill);
};

/**
 * Deletes a skill from the server.
 * @param {string} id - The ID of the skill to delete.
 * @returns {Promise<AxiosResponse<{ msg: string }>>} A promise that resolves to the Axios response containing the deletion message.
 */
export const deleteSkill: (id: string) => Promise<AxiosResponse<{ msg: string }>> = async (id) => {
    import.meta.env.DEV && console.log(id); // Log ID in development environment
    const deleteSkillEndpoint = `/Skill/${id}`; // Endpoint for deleting skills
    return await portfolioApi(true).delete(deleteSkillEndpoint);
};
