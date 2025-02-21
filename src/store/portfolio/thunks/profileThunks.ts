import {toast} from 'react-hot-toast';
import {putProfile} from '../../../api';
import {ProfileInfo} from '../../../modules/portfolio';
import {AppDispatch} from '../../types';
import {editProfile, loading, notLoading} from '../portfolioSlice';
import {handleAxiosError} from '../../helper';

/**
 * Initiates the profile update process.
 * @param profileInfo - The profile information to update.
 * @param onRedirect - Callback function to execute after successful update.
 * @returns An asynchronous dispatch function that handles the update process.
 */
export const startUpdatingProfile = (profileInfo: ProfileInfo, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => {
    return async (dispatch: AppDispatch): Promise<void> => {
        dispatch(loading());
        try {
            const {data} = await putProfile(profileInfo);
            const {msg} = data; // Extract message from response data
            dispatch(editProfile({profileInfo, msg}));
            onRedirect();
        } catch (err: unknown) {
            const msg = handleAxiosError(err); // Handle errors from Axios and get a user-friendly message
            toast.error(msg);
            return dispatch(notLoading());
        }
    };
};
