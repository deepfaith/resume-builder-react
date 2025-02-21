import {UserSkill} from '../../models';

/**
 * Represents a component that displays a skill.
 * @param {UserSkill} skill - The skill to display.
 * @returns The skill component JSX.
 */
export const SkillComponent: React.FC<{ skill: UserSkill }> = ({skill}) => {
    /**
     * Converts skill type to a string representation.
     * @returns {string} The string representation of the skill type.
     */
    const skillTypeToString = (): string => {
        switch (skill.skillInfo.type) {
            case 0:
                return 'Front End';
            case 1:
                return 'Back End';
            case 2:
                return 'Developer Tool';
            default:
                return 'Unknown Type';
        }
    };

    // Main component layout
    return (
        <div className='
            group
            h-20 w-20 mx-1 mt-2 p-2
            relative
            flex flex-col items-center justify-center
            rounded-3xl border
            border-primary bg-primary
            cursor-default
        '>
            {/* Skill name display */}
            <p className='text-center text-xs text-secondary'>{skill.skillInfo.name}</p>
            {/* Hover effect container */}
            <div className='
                absolute text-title opacity-0
                group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)]
                group-hover:opacity-100
                transition duration-200 ease-in-out
            '>
                {/* Skill details display on hover */}
                <div className='
                    p-2 h-20 w-20
                    flex flex-col justify-center items-center
                    bg-secondary rounded-3xl border border-primary
                '>
                    <p className='text-center text-xs'>{skillTypeToString()}</p>
                    <p>-</p>
                    {/* Skill proficiency percentage */}
                    <p className='text-xs'>{skill.percentage}%</p>
                </div>
            </div>
        </div>
    );
};
