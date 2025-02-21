import {onAuthStateChanged} from 'firebase/auth';
import {useEffect} from 'react';
import {FirebaseAuth} from '../firebase';
import {useAppDispatch} from '../store';
import {startGettingInfoWhenAlreadyLogged, startSettingToken} from '../store/auth';
import {setDarkMode} from '../store/theme';
import {User} from 'firebase/auth';

/**
 * Custom hook to initialize application settings and authentication state.
 * - Sets the application theme to dark mode.
 * - Retrieves and sets the authentication token if running in development mode.
 * - Checks for an existing authentication token in local storage and fetches user details if present.
 */
export const useStartApp = (): void => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Dispatch action to set the application theme to dark mode.
        dispatch(setDarkMode());

        // In development mode, dispatch action to set the authentication token.
        if (import.meta.env.DEV) {
            dispatch(startSettingToken());
        }
        // In production, check for an existing token and fetch user details if the token exists.
        else if (localStorage.getItem('AUTH_TKN')) {
            onAuthStateChanged(FirebaseAuth, (user: User | null) => {
                if (!user) return;
                dispatch(startGettingInfoWhenAlreadyLogged({email: user.email || '', id: user.uid}));
            });
        }
    }, [dispatch]);
};
