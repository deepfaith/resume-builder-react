import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { portfolioSlice } from './portfolio';
import { darkModeSlice } from './theme';
/**
 * Configures and returns the Redux store with specific reducers and middleware.
 * @returns {ReturnType<typeof configureStore>} The configured Redux store.
 */
export const store: ReturnType<typeof configureStore> = configureStore({
    // Reducers for handling different parts of the application state
    reducer: {
        auth: authSlice.reducer,
        darkMode: darkModeSlice.reducer,
        portfolio: portfolioSlice.reducer
    },
    // Middleware configuration to enhance the dispatch function
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Disables serializable checks
    })
});
