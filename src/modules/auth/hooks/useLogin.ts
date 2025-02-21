import {SubmitHandler, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../../store';
import {startLoginWithEmailPassword} from '../../../store/auth';

interface Inputs {
    email: string;
    password: string;
}

/**
 * Custom hook for handling user login.
 * @returns An object containing the login status, register function, and onSubmit function.
 */
export const useLogin = (): { status: string; register: any; onSubmit: () => void } => {

    // Dispatch function from Redux store
    const dispatch = useAppDispatch();

    // Selector to get the auth status from the Redux state
    const {status} = useSelector((state: RootState) => state.auth);

    // useForm hook for handling form submission and registration
    const {handleSubmit, register} = useForm<Inputs>();

    /**
     * Handles the form submission for login.
     * @param data - The form data containing email and password.
     */
    const onSubmitLogin: SubmitHandler<Inputs> = data => {
        dispatch(startLoginWithEmailPassword({email: data.email, password: data.password}));
    };

    // Function to handle form submission with validation
    const onSubmit = handleSubmit(onSubmitLogin);

    return {
        status,
        register,
        onSubmit
    };
};
