import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {ViewContainer} from '../../components'; // Importing the ViewContainer component
import {ProjectComponent} from '../components'; // Importing the ProjectComponent

/**
 * Represents the project view component.
 * @returns The ProjectView component which displays a list of projects.
 */
export const ProjectView: React.FC = () => {
    // Extracting activeUser and isEnglishMode from the portfolio state using useSelector hook
    const {activeUser, isEnglishMode} = useSelector((state: RootState) => state.portfolio);

    return (
        <ViewContainer title='Projects' to='edit/projects'>
            <>
                <div className='divide-y divide-dashed divide-primary'>
                    {/* Mapping over activeUser.projects and rendering a ProjectComponent for each project */}
                    {activeUser.projects.map(proj => (
                        <ProjectComponent key={proj.id} isEnglishMode={isEnglishMode} project={proj}/>
                    ))}
                </div>
            </>
        </ViewContainer>
    );
};
