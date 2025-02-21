import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {ViewContainer} from '../../components';
import {UserSkill} from '../../models';
import {SkillComponent} from '../components';

/**
 * Component to display skills of a user.
 * @returns JSX.Element - The rendered component.
 */
export const SkillView: React.FC = (): JSX.Element => {
    // Accessing activeUser from the portfolio state using useSelector hook.
    const {activeUser} = useSelector((state: RootState) => state.portfolio);

    /**
     * Function to order skills by type and name.
     * @param a - The first UserSkill to compare.
     * @param b - The second UserSkill to compare.
     * @returns number - The order result.
     */
    const orderSkills = (a: UserSkill, b: UserSkill): number => {
        const {name: nameA, type: typeA} = a.skillInfo;
        const {name: nameB, type: typeB} = b.skillInfo;
        if (typeA > typeB) return 1;
        if (typeA < typeB) return -1;
        if (nameA > nameB) return 1;
        return -1;
    };

    // Creating a new array from activeUser.skills, sorting it using orderSkills function.
    const skills = (new Array<UserSkill>().concat(activeUser.skills).sort(orderSkills));

    return (
        <ViewContainer title='Skills' to='edit/skills'>
            <div className='flex flex-row flex-wrap justify-evenly px-4'>
                {skills.map(skill => <SkillComponent key={skill.id} skill={skill}/>)}
            </div>
        </ViewContainer>
    );
};
