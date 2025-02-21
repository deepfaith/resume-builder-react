import {createSlice, PayloadAction} from '@reduxjs/toolkit';

/** Interface defining the shape of the dark mode state */
export interface DarkModeState {
    isDarkMode: boolean;
}

/** Initial state of the dark mode slice */
const initialState: DarkModeState = {
    isDarkMode: true
};

/** Slice for handling dark mode settings */
export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        /**
         * Sets the application theme to dark mode.
         * @param state - The current state of the dark mode slice.
         */
        setDarkMode: (state: DarkModeState): void => {
            state.isDarkMode = true;
            const root = window.document.documentElement;
            root.classList.remove('light');
            root.classList.add('dark');
        },
        /**
         * Sets the application theme to light mode.
         * @param state - The current state of the dark mode slice.
         */
        setLightMode: (state: DarkModeState): void => {
            state.isDarkMode = false;
            const root = window.document.documentElement;
            root.classList.remove('dark');
            root.classList.add('light');
        }
    }
});

/** Export actions for use in the application */
export const {setDarkMode, setLightMode} = darkModeSlice.actions;
