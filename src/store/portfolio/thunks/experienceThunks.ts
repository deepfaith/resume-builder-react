import {toast} from 'react-hot-toast';
import {deleteExperience, postExperience, putExperience} from '../../../api';
import {Experience} from '../../../modules/portfolio';
import {AppDispatch} from '../../types';
import {addExperience, editExperience, loading, notLoading, removeExperience} from '../portfolioSlice';
import {handleAxiosError} from '../../helper';

/**
 * Initiates the process of adding a new experience.
 * @param experience - The experience object to be added.
 * @param onRedirect - Callback function to execute after adding the experience.
 * @returns A dispatch function that handles the process.
 */
export const startAddingExperience = (experience: Experience, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch): Promise<void> => {
        dispatch(loading());
        try {
            const {data} = await postExperience(experience);
            const {id, msg} = data;
            experience.id = id;
            dispatch(addExperience({experience, msg}));
            onRedirect();
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

/**
 * Initiates the process of updating an existing experience.
 * @param experience - The experience object to be updated.
 * @param onRedirect - Callback function to execute after updating the experience.
 * @returns A dispatch function that handles the process.
 */
export const startUpdatingExperience = (experience: Experience, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch): Promise<void> => {
        dispatch(loading());
        try {
            const {data} = await putExperience(experience);
            const {msg} = data;
            dispatch(editExperience({experience, msg}));
            onRedirect();
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

/**
 * Initiates the process of deleting an existing experience.
 * @param id - The ID of the experience to be deleted.
 * @returns A dispatch function that handles the process.
 */
export const startDeletingExperience = (id: string): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch): Promise<void> => {
        dispatch(loading());
        try {
            const {data} = await deleteExperience(id);
            const {msg} = data;
            dispatch(removeExperience({id, msg}));
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};
