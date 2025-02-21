import {NavLink} from 'react-router-dom';
import {LoginIcon} from '../../icons';
import React from 'react'; // Import React for JSX support

/**
 * Represents a login button component that navigates to the login page.
 * @returns {JSX.Element} The login button component.
 */
export const LoginButton: React.FC = (): JSX.Element => {
    return (
        <NavLink to='/auth/login' className='flex'>
            <p className='mr-1'>SIGN IN</p> {/* Text label for the button */}
            <LoginIcon/> {/* Icon component for the button */}
        </NavLink>
    );
};
