import {toast} from 'react-hot-toast';
import {deleteProject, postProject, putProject} from '../../../api';
import {Project} from '../../../modules/portfolio';
import {AppDispatch} from '../../types';
import {addProject, editProject, loading, notLoading, removeProject} from '../portfolioSlice';
import {handleAxiosError} from '../../helper';

/**
 * Initiates the addition of a new project.
 * @param project - The project details to be added.
 * @param onRedirect - Callback function to execute after successful addition.
 */
export const startAddingProject = (project: Project, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => async (dispatch: AppDispatch) => {
    dispatch(loading());
    try {
        const {data} = await postProject(project);
        const {id, msg} = data;
        project.id = id;
        dispatch(addProject({project, msg}));
        onRedirect();
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        toast.error(msg);
        return dispatch(notLoading());
    }
};

/**
 * Initiates the update of an existing project.
 * @param project - The project details to be updated.
 * @param onRedirect - Callback function to execute after successful update.
 */
export const startUpdatingProject = (project: Project, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => async (dispatch: AppDispatch) => {
    dispatch(loading());
    try {
        const {data} = await putProject(project);
        const {msg} = data;
        dispatch(editProject({project, msg}));
        onRedirect();
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        toast.error(msg);
        return dispatch(notLoading());
    }
};

/**
 * Initiates the deletion of a project.
 * @param id - The ID of the project to be deleted.
 */
export const startDeletingProject = (id: string): (dispatch: AppDispatch) => Promise<void> => async (dispatch: AppDispatch) => {
    dispatch(loading());
    try {
        const {data} = await deleteProject(id);
        const {msg} = data;
        dispatch(removeProject({id, msg}));
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        toast.error(msg);
        return dispatch(notLoading());
    }
};
