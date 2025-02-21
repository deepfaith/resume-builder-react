import {useSelector} from 'react-redux';
import {MoonIcon, SunIcon} from '../../icons';
import {RootState, useAppDispatch} from '../../store';
import {setDarkMode, setLightMode} from '../../store/theme';

/**
 * Component to toggle between dark and light theme modes.
 * @returns {JSX.Element} The toggle theme button component.
 */
export const ToggleThemeButton: React.FC = () => {
    const dispatch = useAppDispatch();

    // Retrieve the current theme mode from Redux state
    const {isDarkMode} = useSelector((state: RootState) => state.darkMode);

    /**
     * Toggles the theme between light and dark mode.
     */
    const toggleTheme = (): void => {
        isDarkMode ? dispatch(setLightMode()) : dispatch(setDarkMode());
    };

    return (
        <div
            onClick={toggleTheme}
            className='
                group
                flex items-center
                cursor-pointer
                hover:text-accent
                transition duration-200 ease-in-out;
            '
        >
            <SunIcon className='mr-0.5'/>
            <div className='w-8 h-4 flex items-center rounded-full'>
                {/* Animated circle that moves based on the theme mode */}
                <div
                    className={`rounded-full w-3 h-3 transform mx-auto duration-300 ease-in-out bg-[var(--color-text-primary)] group-hover:bg-[var(--color-text-accent)] ${isDarkMode ? 'translate-x-2' : '-translate-x-2'}`}></div>
            </div>
            <MoonIcon className='ml-0.5'/>
        </div>
    );
};
