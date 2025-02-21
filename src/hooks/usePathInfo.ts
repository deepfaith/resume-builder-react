import {useSelector} from 'react-redux';
import {useLocation, useParams} from 'react-router-dom';
import {RootState} from '../store';
import {StatusType} from '../store/auth';

/**
 * Custom hook to get information related to the current URL path.
 * @returns An object containing boolean flags about the path and the username from the path.
 */
export const usePathInfo: () => {
    isAuthPath: boolean;
    isHomePath: boolean;
    isEditPath: boolean;
    isOwnProfile: boolean;
    username: string | undefined;
} = () => {

    // Extracts the current pathname from the URL
    const {pathname} = useLocation();

    // Extracts username parameter from the URL if available
    const {username: usernameFromPath} = useParams<{ username?: string }>();

    // Selects authentication status and username from the Redux store
    const {status, username: usernameFromAuth} = useSelector((state: RootState) => state.auth);

    // Determines if the current path is the home page
    const isHomePath = pathname === '/';

    // Checks if the current path includes 'auth'
    const isAuthPath = pathname.split('/').includes('auth');

    // Checks if the current path includes 'edit'
    const isEditPath = pathname.split('/').includes('edit');

    // Checks if the user is authenticated
    const isAuthenticated = status === StatusType.AUTHENTICATED;

    // Checks if the current profile path is the authenticated user's own profile
    const isOwnProfile = isAuthenticated && usernameFromPath === usernameFromAuth;

    return {
        isAuthPath,
        isHomePath,
        isEditPath,
        isOwnProfile,
        username: usernameFromPath
    };
};
