import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {StatusType} from './helpers';

/**
 * Interface representing the authentication state.
 */
export interface AuthState {
    id: string;
    username: string;
    email: string;
    status: StatusType;
}

// Initial state of the auth module, conditionally set based on the environment.
const initialState: AuthState = import.meta.env.DEV
    ? {
        id: import.meta.env.VITE_ALANONTUE_ID,
        username: 'alan.ontue',
        email: 'alan.ontue@gmail.com',
        status: StatusType.AUTHENTICATED
    }
    : {
        id: '',
        username: '',
        email: '',
        status: StatusType.NOT_AUTHENTICATED
    };

/**
 * Slice for authentication related actions and state management.
 */
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        /**
         * Handles user login.
         * @param state - The current state of the auth slice.
         * @param action - The action payload containing the new auth state.
         */
        login: (state, action: PayloadAction<AuthState>) => {
            const {id, username, email, status} = action.payload;
            state.id = id;
            state.username = username;
            state.email = email;
            state.status = status;
        },
        /**
         * Handles user logout.
         * @param state - The current state of the auth slice.
         * @param action - The action payload containing the logout message.
         */
        logout: (state, action: PayloadAction<string>) => {
            state.id = initialState.id;
            state.username = initialState.username;
            state.email = initialState.email;
            state.status = initialState.status;
            toast(action.payload, {icon: '👋'});
        },
        /**
         * Handles authentication errors.
         * @param state - The current state of the auth slice.
         * @param action - The action payload containing the error message.
         */
        authError: (state, action: PayloadAction<string>) => {
            state.id = initialState.id;
            state.username = initialState.username;
            state.email = initialState.email;
            state.status = initialState.status;
            toast.error(action.payload);
        },
        /**
         * Sets the authentication status to checking.
         * @param state - The current state of the auth slice.
         */
        checkingCredentials: (state) => {
            state.status = StatusType.CHECKING;
        },
    }
});

// Exporting actions for easy access.
export const {login, logout, authError, checkingCredentials} = authSlice.actions;
