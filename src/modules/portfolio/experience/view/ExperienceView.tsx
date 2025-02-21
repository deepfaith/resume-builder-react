import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {ViewContainer} from '../../components';
import {ExperienceComponent} from '../components';
import {Experience} from '../../models';
import {dateComparer} from '../../helpers';

/**
 * Component to display the user's experiences.
 * @returns JSX.Element - The experience view component.
 */
export const ExperienceView: React.FC = (): JSX.Element => {
    // Accessing state from Redux store
    const {activeUser, isEnglishMode} = useSelector((state: RootState) => state.portfolio);

    /**
     * Orders experiences by their end date.
     * @param {Experience} a - First experience to compare.
     * @param {Experience} b - Second experience to compare.
     * @returns {number} - Sorting order number.
     */
    const orderExperiences = (a: Experience, b: Experience): number => {
        const {end: endA} = a;
        const {end: endB} = b;
        if (endA === null || endA === undefined) return -1;
        if (endB === null || endB === undefined) return 1;
        return dateComparer(new Date(endA), new Date(endB));
    };

    // Combining and sorting experiences
    const experiences: Experience[] = [...activeUser.experiences].sort(orderExperiences);

    return (
        <ViewContainer title='Experience' to='edit/experiences'>
            <div className='divide-y divide-dashed divide-primary'>
                {experiences.map(exp => (
                    <ExperienceComponent key={exp.id} isEnglishMode={isEnglishMode} experience={exp}/>
                ))}
            </div>
        </ViewContainer>
    );
};
