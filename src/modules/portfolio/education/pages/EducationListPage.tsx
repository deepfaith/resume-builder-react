import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {AddIcon, DeleteIcon, EditIcon} from '../../../../icons';
import {RootState, useAppDispatch} from '../../../../store';
import {startDeletingEducation} from '../../../../store/portfolio';

/**
 * Represents the education list page component.
 * @returns The EducationListPage component.
 */
export const EducationListPage: React.FC = () => {
    // Accessing the activeUser from the Redux store
    const {activeUser} = useSelector((state: RootState) => state.portfolio);

    // Hook to dispatch actions
    const dispatch = useAppDispatch();

    /**
     * Dispatches an action to delete an education entry.
     * @param id The unique identifier of the education entry to delete.
     */
    const onDeleteEducation = (id: string): void => {
        dispatch(startDeletingEducation(id));
    };

    return (
        <section>
            {/* Link to add a new education entry */}
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon/>
            </NavLink>
            {/* Page title */}
            <h1 className='text-center'>EDUCATION LIST</h1>
            {/* List of education entries */}
            {activeUser.educations.map(ed =>
                <div className='flex justify-center mb-3' key={ed.id}>
                    <p className='mr-6 text-secondary'>{ed.titleName} - {ed.institute}</p>
                    <div className='grid grid-cols-2 gap-3 my-auto'>
                        {/* Link to edit an education entry */}
                        <NavLink to={ed.id as string}>
                            <EditIcon/>
                        </NavLink>
                        {/* Link to delete an education entry */}
                        <NavLink to='.' onClick={() => onDeleteEducation(ed.id as string)}>
                            <DeleteIcon/>
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
};
