import {toast} from 'react-hot-toast';
import {getUser, getUsers, getUsersCount} from '../../../api';
import {AppDispatch} from '../../types';
import {loading, setActiveUser, setTotalUsers, setUsers} from '../portfolioSlice';
import {handleAxiosError} from '../../helper';

/**
 * Initiates the process of fetching users from the server.
 * @param page The page number to fetch users from.
 * @returns A dispatch function that handles the state update.
 */
export const startGettingUsers = (page: number = 0) => async (dispatch: AppDispatch) => {
    dispatch(loading());
    try {
        const {data: count} = await getUsersCount();
        dispatch(setTotalUsers(count));

        const {data: users} = await getUsers(page);
        return dispatch(setUsers(users));
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        // Display an error message and suggest reloading the page or trying again later.
        toast.error(`${msg}\n\nReload the page or try again later.`);
    }
};

/**
 * Fetches and sets the active user based on the provided username.
 * @param username The username of the user to fetch.
 * @returns A dispatch function that updates the active user state.
 */
export const startGettingActiveUser = (username: string) => async (dispatch: AppDispatch) => {
    dispatch(loading());
    try {
        const {data: user} = await getUser(username);
        return dispatch(setActiveUser(user));
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        // Display an error message and suggest reloading the page or trying again later.
        toast.error(`${msg}\n\nReload the page or try again later.`);
    }
};
