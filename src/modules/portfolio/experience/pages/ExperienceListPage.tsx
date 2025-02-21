import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {AddIcon, DeleteIcon, EditIcon} from '../../../../icons';
import {RootState, useAppDispatch} from '../../../../store';
import {startDeletingExperience} from '../../../../store/portfolio';

/**
 * Component to display a list of experiences.
 * @returns JSX.Element
 */
export const ExperienceListPage: React.FC = (): JSX.Element => {
    // Retrieve active user data from the Redux store
    const {activeUser} = useSelector((state: RootState) => state.portfolio);

    // Hook to dispatch actions
    const dispatch = useAppDispatch();

    /**
     * Dispatches an action to delete an experience.
     * @param id - The ID of the experience to delete.
     */
    const onDeleteSocialMedia = (id: string): void => {
        dispatch(startDeletingExperience(id));
    };

    return (
        <section>
            {/* Link to add a new experience */}
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon/>
            </NavLink>
            {/* Page title */}
            <h1 className='text-center'>EXPERIENCE LIST</h1>
            {/* List of experiences */}
            {activeUser.experiences.map(exp =>
                <div className='flex justify-center mb-3' key={exp.id}>
                    <p className='mr-6 text-secondary'>{exp.position} - {exp.company}</p>
                    <div className='grid grid-cols-2 gap-3 my-auto'>
                        {/* Link to edit an experience */}
                        <NavLink to={exp.id as string}>
                            <EditIcon/>
                        </NavLink>
                        {/* Link to delete an experience */}
                        <NavLink to='.' onClick={() => onDeleteSocialMedia(exp.id as string)}>
                            <DeleteIcon/>
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
};
