import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {RootState} from '../../store';
import {StatusType} from '../../store/auth';

/**
 * Custom hook to redirect users to the registration page if they are logged in with Google
 * but have not completed their registration.
 */
export const useCheckNotRegistered: () => void = () => {
    // Accessing the authentication status from the Redux store
    const {status} = useSelector((state: RootState) => state.auth);

    // Hook to programmatically navigate to different routes
    const navigate = useNavigate();

    // Effect that triggers navigation based on the authentication status
    useEffect(() => {
        if (status === StatusType.NOT_REGISTERED) {
            navigate('/auth/register');
        }
    }, [navigate, status]);
};
