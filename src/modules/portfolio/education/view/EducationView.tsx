import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {ViewContainer} from '../../components';
import {EducationComponent} from '../components';
import {Education} from '../../models';
import {dateComparer} from '../../helpers';

/**
 * Component to display the education section of a user's portfolio.
 * @returns JSX.Element - The rendered component.
 */
export const EducationView: React.FC = (): JSX.Element => {
    // Accessing state from the Redux store
    const {activeUser, isEnglishMode} = useSelector((state: RootState) => state.portfolio);

    /**
     * Compares two education objects by their end dates.
     * @param {Education} a - The first education object.
     * @param {Education} b - The second education object.
     * @returns {number} - The comparison result.
     */
    const orderEducations = (a: Education, b: Education): number => {
        const {end: endA} = a;
        const {end: endB} = b;
        if (endA === null || endA === undefined) return -1;
        if (endB === null || endB === undefined) return 1;
        return dateComparer(new Date(endA), new Date(endB));
    };

    // Sorting educations based on the end date
    const educations = [...activeUser.educations].sort(orderEducations);

    return (
        <ViewContainer title='Education' to='edit/educations'>
            <div className='divide-y divide-dashed divide-primary'>
                {educations.map(education => (
                    <EducationComponent key={education.id} education={education} isEnglishMode={isEnglishMode}/>
                ))}
            </div>
        </ViewContainer>
    );
};
