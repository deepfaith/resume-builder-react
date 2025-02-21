import {SubmitHandler, useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {RootState, useAppDispatch} from '../../../../../store';
import {startUpdatingProfile} from '../../../../../store/portfolio';
import {breaklineCount} from '../../../helpers';
import {ProfileInfo} from '../../../models';

/**
 * Custom hook to handle profile operations.
 * @returns An object containing various states and functions for profile management.
 */
export const useHandleProfile = (): {
    hasEnglishDesc: boolean,
    hasEnglishAboutMe: boolean,
    loading: boolean,
    locationState: string,
    locationCountry: string,
    register: ReturnType<typeof useForm<ProfileInfo>['register']>,
    onSubmit: () => void
} => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    // Extracting user and loading state from Redux store
    const {activeUser, loading} = useSelector((state: RootState) => state.portfolio);

    // Setting up form handling with react-hook-form
    const {register, handleSubmit, watch} = useForm<ProfileInfo>({
        defaultValues: {
            name: activeUser.name,
            email: activeUser.email,
            username: activeUser.username,
            isEnglishModeEnabled: activeUser.isEnglishModeEnabled,
            nativeDesc: activeUser.nativeDesc,
            hasEnglishDesc: activeUser.hasEnglishDesc,
            englishDesc: activeUser.englishDesc,
            locationCountry: activeUser.locationCountry,
            locationState: activeUser.locationState,
            nativeAboutMe: activeUser.nativeAboutMe,
            hasEnglishAboutMe: activeUser.hasEnglishAboutMe,
            englishAboutMe: activeUser.englishAboutMe
        }
    });

    // Watching specific fields for changes
    const hasEnglishDesc = watch('hasEnglishDesc');
    const hasEnglishAboutMe = watch('hasEnglishAboutMe');
    const locationState = watch('locationState') as string;
    const locationCountry = watch('locationCountry') as string;
    const username = watch('username');

    // Function to handle redirection after profile update
    const onRedirect = () => navigate(`/${username}`);

    /**
     * Handles the form submission for profile updates.
     * @param data - The data from the form as ProfileInfo type.
     */
    const onSubmitProfile: SubmitHandler<ProfileInfo> = data => {
        if (breaklineCount(data.nativeDesc) > 2) return toast.error('The headline cannot have more than 3 lines!');

        if (!hasEnglishDesc) data.englishDesc = undefined;
        else if (breaklineCount(data.englishDesc) > 2) return toast.error('The headline could not be more than 3 lines!');

        if (breaklineCount(data.nativeAboutMe) > 4) return toast.error('Cannot have more than 5 lines!');

        if (!hasEnglishAboutMe) data.englishAboutMe = undefined;
        else if (breaklineCount(data.englishAboutMe) > 4) return toast.error('Could not be more than 5 lines!');

        return dispatch(startUpdatingProfile(data, onRedirect));
    };

    // Function to handle form submission with validation
    const onSubmit = handleSubmit(onSubmitProfile);

    return {
        hasEnglishDesc,
        hasEnglishAboutMe,
        loading,
        locationState,
        locationCountry,
        register,
        onSubmit
    };
};
