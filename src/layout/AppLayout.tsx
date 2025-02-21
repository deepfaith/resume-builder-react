import {GoHomeButton, GoProfileButton, LoginButton, LogoutButton, ToggleThemeButton} from './components';
import {usePathInfo} from '../hooks';
import {RootState} from '../store';
import {useSelector} from 'react-redux';
import {StatusType} from '../store/auth';

/**
 * Represents the layout of the application, including navigation elements.
 * @returns The navigation component with buttons based on authentication and path.
 */
export const AppLayout: React.FC = (): JSX.Element => {
    // Custom hook to get information about the current path
    const {isAuthPath, isHomePath} = usePathInfo();

    // Extracting authentication status from Redux store
    const {status} = useSelector((state: RootState) => state.auth);

    // Determine if the user is authenticated
    const isAuthenticated: boolean = status === StatusType.AUTHENTICATED;

    return (
        <nav>
            {isAuthenticated && <GoProfileButton/>}
            {!isHomePath && <GoHomeButton/>}
            {/* Conditionally render LogoutButton or LoginButton based on authentication status and path */}
            {isAuthenticated && !isAuthPath && <LogoutButton/>}
            {!isAuthenticated && !isAuthPath && <LoginButton/>}
            <ToggleThemeButton/>
        </nav>
    );
};
