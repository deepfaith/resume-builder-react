import toast from 'react-hot-toast';
import {deleteSocialMedia, postSocialMedia, putSocialMedia} from '../../../api';
import {SocialMedia} from '../../../modules/portfolio';
import {AppDispatch} from '../../types';
import {addSocialMedia, editSocialMedia, loading, notLoading, removeSocialMedia} from '../portfolioSlice';
import {handleAxiosError} from '../../helper';

/**
 * Initiates the process of adding a new social media entry.
 * @param socialMedia - The social media details to be added.
 * @param onRedirect - Callback function to execute after successful addition.
 */
export const startAddingSocialMedia = (socialMedia: SocialMedia, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const {data} = await postSocialMedia(socialMedia);
            const {id, msg} = data;
            socialMedia.id = id;
            dispatch(addSocialMedia({socialMedia, msg}));
            onRedirect();
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

/**
 * Initiates the process of updating an existing social media entry.
 * @param socialMedia - The updated social media details.
 * @param onRedirect - Callback function to execute after successful update.
 */
export const startUpdatingSocialMedia = (socialMedia: SocialMedia, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const {data} = await putSocialMedia(socialMedia);
            const {msg} = data;
            dispatch(editSocialMedia({socialMedia, msg}));
            onRedirect();
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};

/**
 * Initiates the process of deleting a social media entry.
 * @param id - The ID of the social media entry to delete.
 */
export const startDeletingSocialMedia = (id: string): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading());
        try {
            const {data} = await deleteSocialMedia(id);
            const {msg} = data;
            dispatch(removeSocialMedia({id, msg}));
        } catch (err: unknown) {
            const msg = handleAxiosError(err);
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};
