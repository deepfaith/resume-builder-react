import {toast} from 'react-hot-toast';
import {deleteEducation, postEducation, putEducation} from '../../../api';
import {Education} from '../../../modules/portfolio';
import {AppDispatch} from '../../types';
import {addEducation, editEducation, loading, notLoading, removeEducation} from '../portfolioSlice';
import {handleAxiosError} from '../../helper';

/**
 * Initiates the process of adding an education entry.
 * @param education - The education details to be added.
 * @param onRedirect - Callback function to execute after successful addition.
 * @returns A dispatchable function that handles the addition process.
 */
export const startAddingEducation = (education: Education, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const {data} = await postEducation(education);
            const {id, msg} = data;
            education.id = id;
            dispatch(addEducation({education, msg}));
            onRedirect();
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

/**
 * Initiates the process of updating an existing education entry.
 * @param education - The updated education details.
 * @param onRedirect - Callback function to execute after successful update.
 * @returns A dispatchable function that handles the update process.
 */
export const startUpdatingEducation = (education: Education, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const {data} = await putEducation(education);
            const {msg} = data;
            dispatch(editEducation({education, msg}));
            onRedirect();
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

/**
 * Initiates the process of deleting an education entry.
 * @param id - The ID of the education entry to be deleted.
 * @returns A dispatchable function that handles the deletion process.
 */
export const startDeletingEducation = (id: string): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const {data} = await deleteEducation(id);
            const {msg} = data;
            dispatch(removeEducation({id, msg}));
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};
