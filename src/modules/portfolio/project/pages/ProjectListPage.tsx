import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {AddIcon, DeleteIcon, EditIcon} from '../../../../icons';
import {RootState, useAppDispatch} from '../../../../store';
import {startDeletingProject} from '../../../../store/portfolio';

/**
 * Represents the project list page component.
 * @returns The project list page component.
 */
export const ProjectListPage: React.FC = () => {

    // Selects the active user from the Redux store.
    const {activeUser} = useSelector((state: RootState) => state.portfolio);

    // Provides the dispatch function from the Redux store.
    const dispatch = useAppDispatch();

    /**
     * Dispatches the action to delete a project.
     * @param id The ID of the project to delete.
     */
    const onDeleteSocialMedia = (id: string) => dispatch(startDeletingProject(id));

    return (
        <section>
            {/* Link to add a new project */}
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon/>
            </NavLink>
            <h1 className='text-center'>PROJECT LIST</h1>
            {activeUser.projects.map(proj =>
                <div className='flex justify-center mb-3' key={proj.id}>
                    <p className='mr-6 text-secondary'>{proj.name}</p>
                    <div className='grid grid-cols-2 gap-3 my-auto'>
                        {/* Link to edit a project */}
                        <NavLink to={proj.id as string}>
                            <EditIcon/>
                        </NavLink>
                        {/* Link to delete a project */}
                        <NavLink to='.' onClick={() => onDeleteSocialMedia(proj.id as string)}>
                            <DeleteIcon/>
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
};
