import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {AddIcon, DeleteIcon, EditIcon} from '../../../../icons';
import {RootState, useAppDispatch} from '../../../../store';
import {startDeletingSocialMedia} from '../../../../store/portfolio';

/**
 * Converts a social media numeric identifier to a string.
 * @param smName - The numeric identifier of the social media.
 * @returns The string representation of the social media.
 */
const socialMediaNameToString = (smName: number): string => {
    switch (smName) {
        case 0:
            return 'FACEBOOK';
        case 1:
            return 'GITHUB';
        case 2:
            return 'INSTAGRAM';
        case 3:
            return 'LINKEDIN';
        case 4:
            return 'TWITTER';
        case 5:
            return 'PERSONAL WEBSITE';
        case 6:
            return 'WHATSAPP';
        case 7:
            return 'YOUTUBE';
        default:
            return 'UNKNOWN';
    }
};

/**
 * Component to list and manage social media links.
 * @returns The JSX element for the social media list page.
 */
export const SocialMediaListPage: React.FC = () => {
    // Accessing the active user from the Redux store
    const {activeUser} = useSelector((state: RootState) => state.portfolio);

    // Hook to dispatch actions
    const dispatch = useAppDispatch();

    /**
     * Dispatches an action to delete a social media entry.
     * @param id - The ID of the social media to delete.
     */
    const onDeleteSocialMedia = (id: string): void => {
        dispatch(startDeletingSocialMedia(id));
    };

    return (
        <section>
            {/* Link to add a new social media entry */}
            <NavLink to='add' className='absolute top-2 right-3'>
                <AddIcon/>
            </NavLink>
            <h1 className='text-center'>Social Media List</h1>
            {/* List each social media entry */}
            {activeUser.socialMedias.map(sm => (
                <div className='flex justify-center mb-3' key={sm.id}>
                    <p className='text-secondary mr-6'>{socialMediaNameToString(sm.name)}</p>
                    <div className='grid grid-cols-2 gap-2 my-auto'>
                        {/* Link to edit a social media entry */}
                        <NavLink to={sm.id as string}>
                            <EditIcon/>
                        </NavLink>
                        {/* Link to delete a social media entry */}
                        <NavLink to='.' onClick={() => onDeleteSocialMedia(sm.id as string)}>
                            <DeleteIcon/>
                        </NavLink>
                    </div>
                </div>
            ))}
        </section>
    );
};
