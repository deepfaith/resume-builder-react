import {SubmitHandler, useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {RootState, useAppDispatch} from '../../../../../store';
import {startAddingProject, startUpdatingProject} from '../../../../../store/portfolio';
import {breaklineCount} from '../../../helpers';
import {Project} from '../../../models';

/**
 * Custom hook to handle project addition and updating.
 * @returns An object containing form methods and state.
 */
export const useHandleProject = (): {
    hasEnglishDesc: boolean,
    loading: boolean,
    onSubmit: () => void,
    register: ReturnType<typeof useForm<Project>['register']>
} => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {id, username} = useParams<{ id?: string, username?: string }>();

    // Retrieve active user and loading state from Redux store
    const {activeUser, loading} = useSelector((state: RootState) => state.portfolio);

    // Redirect if project ID is not found in the user's projects
    if (id && activeUser.projects.find(proj => proj.id === id) === undefined) {
        navigate(`/${username}`);
    }

    // Determine the project to be edited or create a new one
    const project = id ? activeUser.projects.find(proj => proj.id === id) as Project : new Project();

    // Setup form methods and state management
    const {register, handleSubmit, watch} = useForm<Project>({defaultValues: project});

    const hasEnglishDesc = watch('hasEnglishDesc');

    // Function to handle redirection after form submission
    const onRedirect = () => navigate(`/${username}/edit/projects`);

    /**
     * Handles the form submission for adding or updating a project.
     * @param data - The project data from the form.
     */
    const onSubmitProject: SubmitHandler<Project> = data => {
        // Check if the native description exceeds 3 lines
        if (breaklineCount(data.nativeDesc) > 2) return toast.error('The description cannot have more than 3 lines!');

        // Conditionally handle English description based on user input
        if (!hasEnglishDesc) data.englishDesc = undefined;
        else if (breaklineCount(data.englishDesc) > 2) return toast.error('Description could not be more than 3 lines!');

        // Dispatch appropriate action based on whether an ID exists
        if (id) {
            return dispatch(startUpdatingProject(data, onRedirect));
        }
        return dispatch(startAddingProject(data, onRedirect));
    };

    // Prepare the form submission handler
    const onSubmit = handleSubmit(onSubmitProject);

    return {
        hasEnglishDesc,
        loading,
        onSubmit,
        register
    };
};
