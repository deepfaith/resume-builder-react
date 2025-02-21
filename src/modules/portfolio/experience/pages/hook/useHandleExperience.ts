import {SubmitHandler, useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {RootState, useAppDispatch} from '../../../../../store';
import {startAddingExperience, startUpdatingExperience} from '../../../../../store/portfolio';
import {breaklineCount} from '../../../helpers';
import {Experience} from '../../../models';

interface Inputs extends Experience {
    monthStart?: number;
    yearStart?: number;
    monthEnd?: number;
    yearEnd?: number;
}

/**
 * Custom hook for handling the form submission and state of the experience section.
 * @returns An object containing several properties and methods for managing the experience form.
 */
export const useHandleExperience = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {id, username} = useParams<{ id?: string; username?: string }>();

    // Retrieve active user and loading state from Redux store
    const {activeUser, loading} = useSelector((state: RootState) => state.portfolio);

    // Redirect if the experience ID is not found in the active user's experiences
    if (id && activeUser.experiences.find(exp => exp.id === id) === undefined) {
        navigate(`/${username}`);
    }

    // Determine the experience to be edited or create a new one if ID is not provided
    const experience = id ? activeUser.experiences.find(exp => exp.id === id) as Experience : new Experience();

    // Setup form with react-hook-form
    const {register, handleSubmit, watch} = useForm<Inputs>({
        defaultValues: {
            ...experience,
            monthStart: experience.start ? new Date(experience.start).getUTCMonth() + 1 : undefined,
            yearStart: experience.start ? new Date(experience.start).getUTCFullYear() : undefined,
            monthEnd: experience.end ? new Date(experience.end).getUTCMonth() + 1 : undefined,
            yearEnd: experience.end ? new Date(experience.end).getUTCFullYear() : undefined,
        }
    });

    // Watch specific form fields for changes
    const hasEnglishDesc = watch('hasEnglishDesc');
    const isActual = watch('isActual');

    // Function to handle redirection after form actions
    const onRedirect = () => navigate(`/${username}/edit/experiences`);

    /**
     * Helper function to format dates into a string.
     * @param year The year part of the date.
     * @param month The month part of the date.
     * @returns A string representing the first day of the given month and year.
     */
    const formattedDate = (year: number, month: number): string => {
        const formattedMonth = month < 10 && !month.toString().startsWith('0') ? `0${month.toString()}` : month;
        return `${year}-${formattedMonth}-01`;
    };

    /**
     * Handler for form submission.
     * @param data The form data.
     */
    const onSubmitExperience: SubmitHandler<Inputs> = data => {
        if (breaklineCount(data.nativeDesc) > 2) return toast.error('The description cannot have more than 3 lines!');

        if (!hasEnglishDesc) data.englishDesc = undefined;
        else if (breaklineCount(data.englishDesc) > 2) return toast.error('Description could not be more than 3 lines!');

        data.start = formattedDate(data.yearStart as number, data.monthStart as number);

        if (!data.isActual) data.end = formattedDate(data.yearEnd as number, data.monthEnd as number);

        data.type = parseInt(data.type.toString());

        if (id) {
            return dispatch(startUpdatingExperience(data, onRedirect));
        }
        return dispatch(startAddingExperience(data, onRedirect));
    };

    // Prepare the onSubmit function from react-hook-form
    const onSubmit = handleSubmit(onSubmitExperience);

    return {
        hasEnglishDesc,
        isActual,
        loading,
        onSubmit,
        register
    };
};
