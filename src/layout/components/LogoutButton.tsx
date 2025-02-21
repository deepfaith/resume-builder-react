import {NavLink} from 'react-router-dom';
import {LogoutIcon} from '../../icons';
import {useAppDispatch} from '../../store';
import {startLogout} from '../../store/auth';

/**
 * Component for rendering a logout button.
 * @returns The NavLink component that triggers logout on click.
 */
export const LogoutButton: React.FC = () => {
    // Hook to get the dispatch function from the Redux store
    const dispatch = useAppDispatch();

    /**
     * Handles the logout action.
     */
    const onLogout = (): void => {
        dispatch(startLogout());
    };

    return (
        <NavLink to='/' onClick={onLogout} className='flex cursor-pointer'>
            <p className='mr-1'>LOGOUT</p> {/* Text label for the logout button */}
            <LogoutIcon/> {/* Icon for the logout button */}
        </NavLink>
    );
};
