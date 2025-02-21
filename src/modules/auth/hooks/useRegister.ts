import {SubmitHandler, useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../../store';
import {startRegisterUserBackend, startRegisterUserFirebase, StatusType} from '../../../store/auth';

interface Inputs {
    name: string;
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}

/**
 * Custom hook for handling user registration.
 * @returns An object containing the registration status, register function, and onSubmit function.
 */
export const useRegister = () => {
    const dispatch = useAppDispatch();

    // Retrieve authentication status and user ID from Redux store
    const {status, id} = useSelector((state: RootState) => state.auth);

    // Setup form handling with react-hook-form
    const {register, handleSubmit} = useForm<Inputs>();

    /**
     * Handles the form submission for user registration.
     * @param data - The form data.
     */
    const onSubmitRegister: SubmitHandler<Inputs> = async (data) => {
        const {email, name, password, repeatPassword, username} = data;
        if (name.length < 4) return toast.error('Name must be 4 or more characters.');
        if (username.length < 4) return toast.error('Username must be 4 or more characters.');
        if (status === StatusType.NOT_REGISTERED) return dispatch(startRegisterUserBackend({
            id,
            email,
            username,
            name
        }));
        if (password !== repeatPassword) return toast.error('Passwords do not match.');
        return await dispatch(startRegisterUserFirebase({email, username, name, password}));
    };

    // Prepare the onSubmit function using react-hook-form's handleSubmit
    const onSubmit = handleSubmit(onSubmitRegister);

    return {
        status,
        register,
        onSubmit
    };
};
