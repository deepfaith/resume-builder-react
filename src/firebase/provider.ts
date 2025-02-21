import {FirebaseError} from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth';
import {FirebaseAuth} from './config';

// Google authentication provider instance
const googleProvider = new GoogleAuthProvider();

export interface ProviderResponse {
    email: string;
    errorCode: string;
    ok: boolean;
    uid: string;
}

/**
 * Signs in a user using Google authentication.
 * @returns A promise that resolves to a ProviderResponse object.
 */
export const signInWithGoogle = async (): Promise<ProviderResponse> => {
    try {
        const {user} = await signInWithPopup(FirebaseAuth, googleProvider);
        const {email, uid} = user;
        return {email: email as string, errorCode: '', ok: true, uid: uid};
    } catch (err: unknown) {
        console.error('Firebase Error: ');
        console.error(err);
        const {code} = err as FirebaseError;
        return {email: '', errorCode: code, ok: false, uid: ''};
    }
};

/**
 * Registers a user with email and password.
 * @param email The user's email address.
 * @param password The user's password.
 * @returns A promise that resolves to a ProviderResponse object.
 */
export const registerUserWithEmailPassword = async (email: string, password: string): Promise<ProviderResponse> => {
    try {
        const {user} = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid} = user;
        return {ok: true, email: email, uid, errorCode: ''};
    } catch (err: unknown) {
        console.error('Firebase Error: ');
        console.error(err);
        const {code} = err as FirebaseError;
        return {ok: false, email: '', uid: '', errorCode: code};
    }
};

/**
 * Logs in a user with email and password.
 * @param email The user's email address.
 * @param password The user's password.
 * @returns A promise that resolves to a ProviderResponse object.
 */
export const loginUserWithEmailPassword = async (email: string, password: string): Promise<ProviderResponse> => {
    try {
        const {user} = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid} = user;
        return {ok: true, email: email, uid: uid, errorCode: ''};
    } catch (err: unknown) {
        console.error('Firebase Error: ');
        console.error(err);
        const {code} = err as FirebaseError;
        return {ok: false, email: '', uid: '', errorCode: code};
    }
};

/**
 * Logs out the current user from Firebase.
 * @returns A promise that resolves when the user is logged out.
 */
export const logoutFirebase = async (): Promise<void> => {
    return await FirebaseAuth.signOut();
};
