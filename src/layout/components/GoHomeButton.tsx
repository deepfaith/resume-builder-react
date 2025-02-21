import {NavLink} from 'react-router-dom';
import {HomeIcon} from '../../icons';
import React from 'react';

/**
 * Represents a button that navigates to the home page.
 * @returns {JSX.Element} The home navigation button component.
 */
export const GoHomeButton: React.FC = (): JSX.Element => {
    return (
        <NavLink to='/'>
            <HomeIcon/>
        </NavLink>
    );
};
