import {SubmitHandler, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {RootState, useAppDispatch} from '../../../../../store';
import {startAddingSocialMedia, startUpdatingSocialMedia} from '../../../../../store/portfolio';
import {SocialMedia} from '../../../models';

/**
 * Custom hook for handling social media operations.
 * @returns An object containing the loading state, a submit function, and a register function from react-hook-form.
 */
export const useHandleSocialMedia = () => {
    const dispatch = useAppDispatch(); // Dispatch function from Redux

    const navigate = useNavigate(); // Navigation function from react-router

    const {id, username} = useParams<{ id?: string; username?: string }>(); // URL parameters

    // Selector to get the active user and loading state from the Redux store
    const {activeUser, loading} = useSelector((state: RootState) => state.portfolio);

    // Redirect if the specified social media ID does not exist in the user's social media list
    if (id && activeUser.socialMedias.find(({id: smId}) => smId === id) === undefined) navigate(`/${username}`);

    // Find the social media by ID or create a new one if ID is not provided
    const socialMedia = id ? activeUser.socialMedias.find(({id: smId}) => smId === id) as SocialMedia : new SocialMedia();

    // Setup form handling with react-hook-form
    const {register, handleSubmit} = useForm<SocialMedia>({defaultValues: socialMedia});

    // Function to handle redirection after form submission
    const onRedirect = () => navigate(`/${username}/edit/social-media`);

    /**
     * Function to handle form submission.
     * @param data - The social media data from the form.
     */
    const onSubmitSocialMedia: SubmitHandler<SocialMedia> = data => {
        data.name = parseInt(data.name as unknown as string); // Convert name to integer (assuming 'name' should be an integer)

        // Dispatch update or add action based on the presence of an ID
        if (id) {
            return dispatch(startUpdatingSocialMedia(data, onRedirect));
        }
        return dispatch(startAddingSocialMedia(data, onRedirect));
    };

    // Prepare the submit function from react-hook-form
    const onSubmit = handleSubmit(onSubmitSocialMedia);

    return {
        loading,
        onSubmit,
        register
    };
};
