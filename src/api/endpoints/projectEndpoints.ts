import {AxiosResponse} from 'axios';
import {Project} from '../../modules/portfolio';
import {portfolioApi} from '../portfolioApi';

/**
 * Posts a new project to the server.
 * @param project The project data to post.
 * @returns The Axios response with message and project ID.
 */
export const postProject = async (project: Project): Promise<AxiosResponse<{ msg: string, id: string }>> => {
    // Log the project data in development environment
    import.meta.env.DEV && console.log(project);
    // API endpoint for posting a new project
    const postProjectEndpoint = '/Project';
    return await portfolioApi(true).post(postProjectEndpoint, project);
};

/**
 * Updates an existing project on the server.
 * @param project The project data to update.
 * @returns The Axios response with a message.
 */
export const putProject = async (project: Project): Promise<AxiosResponse<{ msg: string }>> => {
    // Log the project data in development environment
    import.meta.env.DEV && console.log(project);
    // API endpoint for updating an existing project
    const putProjectEndpoint = '/Project';
    return await portfolioApi(true).put(putProjectEndpoint, project);
};

/**
 * Deletes a project from the server.
 * @param id The ID of the project to delete.
 * @returns The Axios response with a message.
 */
export const deleteProject = async (id: string): Promise<AxiosResponse<{ msg: string }>> => {
    // Log the project ID in development environment
    import.meta.env.DEV && console.log(id);
    // API endpoint for deleting a project
    const deleteProjectEndpoint = `/Project/${id}`;
    return await portfolioApi(true).delete(deleteProjectEndpoint);
};
