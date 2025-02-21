import {FirebaseApp, FirebaseOptions, initializeApp} from 'firebase/app';
import {Auth, getAuth} from 'firebase/auth';

/**
 * Configuration for Firebase based on environment variables.
 */
const config: FirebaseOptions = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

/**
 * Initializes the Firebase application with the specified configuration.
 * @returns {FirebaseApp} The initialized Firebase application instance.
 */
export const initializeFirebaseApp = (): FirebaseApp => {
    return initializeApp(config);
};

/**
 * Gets the Firebase authentication service associated with the default app.
 * @param app The Firebase application instance.
 * @returns {Auth} The Firebase Auth service instance.
 */
export const getFirebaseAuth = (app: FirebaseApp): Auth => {
    return getAuth(app);
};

// Export initialized Firebase application and authentication service.
export const FirebaseApp = initializeFirebaseApp();
export const FirebaseAuth = getFirebaseAuth(FirebaseApp);
