import {ParagraphWithBreakLine} from '../../components';
import {formatedEndDate, formatedStartDate} from '../../helpers';
import {Education} from '../../models';

/**
 * Component to display education details.
 *
 * @param education - The education data to display.
 * @param isEnglishMode - Flag to determine if English descriptions should be used.
 * @returns The JSX.Element containing the education details.
 */
export const EducationComponent: React.FC<{ education: Education, isEnglishMode: boolean }> = ({
                                                                                                   education,
                                                                                                   isEnglishMode
}) => {
    /**
     * Converts the education type to a string representation.
     *
     * @returns The string representation of the education type.
     */
    const educationTypeToString = (): string => {
        switch (education.type) {
            case 0:
                return 'High School';
            case 1:
                return 'College';
            case 2:
                return 'Graduate School';
            case 3:
                return 'Tertiary Degree';
            case 4:
                return 'Course';
            default:
                return 'Unknown';
        }
    };

    return (
        <div className='text-secondary mb-2'>
            {/* Title of the education */}
            <h2 className='mt-2 underline'>{education.titleName}</h2>
            {/* Institute name */}
            <h3 className='mb-1'>{education.institute}</h3>
            {/* Description based on language preference */}
            {
                education.hasEnglishDesc && isEnglishMode
                    ?
                    <ParagraphWithBreakLine className='mb-3 text-justify' str={education.englishDesc as string}/>
                    :
                    <ParagraphWithBreakLine className='mb-3 text-justify' str={education.nativeDesc as string}/>
            }
            {/* Education duration and type */}
            <div className='flex flex-row justify-between'>
                <h2>{formatedStartDate(education.start)} - {formatedEndDate(education.end, education.isActual)}</h2>
                <h2>{educationTypeToString()}</h2>
            </div>
        </div>
    );
};
