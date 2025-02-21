import {FC} from 'react';
import {ParagraphWithBreakLine} from '../../components';
import {Project} from '../../models';

/**
 * Represents a component that displays project details.
 * @param {Project} project - The project object containing details to display.
 * @param {boolean} isEnglishMode - Flag to determine if the description should be in English.
 * @returns {JSX.Element} The JSX code for project component.
 */
export const ProjectComponent: FC<{ project: Project; isEnglishMode: boolean }> = ({project, isEnglishMode}) => {
    return (
        <div className='text-secondary mb-2'> {/* Container for the project component */}
            <h2 className='mt-2 underline'>{project.name}</h2> {/* Project name with underline */}
            {
                project.hasEnglishDesc && isEnglishMode
                    ? // Conditionally render English or native description based on the flag
                    <ParagraphWithBreakLine className='my-3 text-justify' str={project.englishDesc as string}/>
                    :
                    <ParagraphWithBreakLine className='my-3 text-justify' str={project.nativeDesc as string}/>
            }
            <a href={project.url} target='_blank' rel='noreferrer'
               className='italic text-primary opacity-75 font-semibold'>Link</a> {/* Link to the project */}
        </div>
    );
};
