import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {UserIcon} from '../../icons'; // Importing UserIcon component
import {RootState} from '../../store'; // Importing RootState type

/**
 * Component to navigate to the user profile page.
 * @returns {JSX.Element} The NavLink component wrapped around the UserIcon.
 */
export const GoProfileButton: React.FC = (): JSX.Element => {
    // Extracting username from the auth state using useSelector hook
    const {username} = useSelector((state: RootState) => state.auth);

    return (
        <NavLink to={`/${username}`}>
            <UserIcon/>
        </NavLink>
    );
};
