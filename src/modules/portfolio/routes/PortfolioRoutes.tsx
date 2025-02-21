import {Navigate, Route, Routes} from 'react-router-dom';
import {FC} from 'react';
import {HomePage, UserPage} from '../users/pages';
import {EditRoutes} from './EditRoutes';

/**
 * Defines the routes for the portfolio application.
 * @returns The component with defined routes.
 */
export const PortfolioRoutes: FC = () => {
    return (
        <Routes>
            {/* Route for the home page */}
            <Route path='' element={<HomePage/>}/>
            {/* Route for a user's page */}
            <Route path='/:username' element={<UserPage/>}/>
            {/* Route for editing a user's details */}
            <Route path='/:username/edit/*' element={<EditRoutes/>}/>
            {/* Redirect all other paths to the home page */}
            <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
    );
};
