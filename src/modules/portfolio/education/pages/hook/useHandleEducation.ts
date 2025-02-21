import {SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-hot-toast';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {RootState, useAppDispatch} from '../../../../../store';
import {startAddingEducation, startUpdatingEducation} from '../../../../../store/portfolio';
import {breaklineCount} from '../../../helpers';
import {Education} from '../../../models';

interface Inputs extends Education {
    monthStart?: number;
    yearStart?: number;
    monthEnd?: number;
    yearEnd?: number;
}

/**
 * Custom hook to handle education form submission and navigation.
 * @returns Object containing form methods and state.
 */
export const useHandleEducation = (): {
    hasEnglishDesc: boolean,
    isActual: boolean,
    loading: boolean,
    onSubmit: () => void,
    register: ReturnType<typeof useForm<Inputs>['register']>
} => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id, username} = useParams<{ id?: string; username?: string }>();

    // Selectors from Redux store
    const {activeUser, loading} = useSelector((state: RootState) => state.portfolio);

    // Redirect if the specified education ID does not exist
    if (id && activeUser.educations.find(ed => ed.id === id) === undefined) {
        navigate(`/${username}`);
    }

    // Find the education entry or create a new one if ID is not provided
    const education = id ? activeUser.educations.find(ed => ed.id === id) as Education : new Education();

    // Setup form with react-hook-form
    const {register, handleSubmit, watch} = useForm<Inputs>({
        defaultValues: {
            ...education,
            monthStart: education.start ? new Date(education.start).getUTCMonth() + 1 : undefined,
            yearStart: education.start ? new Date(education.start).getUTCFullYear() : undefined,
            monthEnd: education.end ? new Date(education.end).getUTCMonth() + 1 : undefined,
            yearEnd: education.end ? new Date(education.end).getUTCFullYear() : undefined,
        }
    });

    const hasEnglishDesc = watch('hasEnglishDesc');
    const isActual = watch('isActual');

    const onRedirect = () => navigate(`/${username}/edit/educations`);

    /**
     * Formats the date into a YYYY-MM-DD string.
     * @param year The year part of the date.
     * @param month The month part of the date.
     * @returns A string representing the first day of the given month and year.
     */
    const formattedDate = (year: number, month: number): string => {
        const formattedMonth = month < 10 && !month.toString().startsWith('0') ? `0${month.toString()}` : month;
        return `${year}-${formattedMonth}-01`;
    };

    /**
     * Handles form submission for adding or updating education details.
     * @param data Form data.
     */
    const onSubmitEducation: SubmitHandler<Inputs> = data => {
        if (breaklineCount(data.nativeDesc) > 2) return toast.error('The description cannot have more than 3 lines!');

        if (!hasEnglishDesc) data.englishDesc = undefined;
        else if (breaklineCount(data.englishDesc) > 2) return toast.error('Description could not be more than 3 lines!');

        data.start = formattedDate(data.yearStart as number, data.monthStart as number);

        if (!data.isActual) data.end = formattedDate(data.yearEnd as number, data.monthEnd as number);

        data.type = parseInt(data.type.toString());

        if (id) {
            return dispatch(startUpdatingEducation(data, onRedirect));
        }
        return dispatch(startAddingEducation(data, onRedirect));
    };

    const onSubmit = handleSubmit(onSubmitEducation);

    return {
        hasEnglishDesc,
        isActual,
        loading,
        onSubmit,
        register
    };
};
