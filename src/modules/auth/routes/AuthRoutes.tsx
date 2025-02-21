import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {RootState, useAppDispatch} from '../../../store';
import {startGoogleSignIn, StatusType} from '../../../store/auth';
import {LoginPage, RegisterPage} from '../pages';

/**
 * Component to handle authentication routes.
 * @returns {JSX.Element} The routes for authentication.
 */
export const AuthRoutes: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    /**
     * Triggers the Google sign-in process.
     */
    const signInWithGoogle = (): void => {
        dispatch(startGoogleSignIn());
    };

    // Retrieve the authentication status from the Redux store
    const {status} = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    // Redirect to home page if authenticated and not in development mode
    useEffect(() => {
        if (status === StatusType.AUTHENTICATED && !import.meta.env.DEV) {
            navigate('/');
        }
    }, [navigate, status]);

    return (
        <Routes>
            <Route path='login' element={<LoginPage signInWithGoogle={signInWithGoogle}/>}/>
            <Route path='register' element={<RegisterPage signInWithGoogle={signInWithGoogle}/>}/>
            <Route path='*' element={<Navigate to='login'/>}/>
        </Routes>
    );
};
