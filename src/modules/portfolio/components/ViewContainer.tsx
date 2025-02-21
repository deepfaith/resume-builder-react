import {NavLink} from 'react-router-dom';
import {usePathInfo} from '../../../hooks';
import {EditIcon} from '../../../icons';

interface Props {
    children: JSX.Element[] | JSX.Element; // Children components to be rendered
    title: string; // Title of the view container
    to: string; // Navigation path for the edit link
}

/**
 * Renders a view container with a title and optional edit link.
 *
 * @param {Props} props - The properties for the view container.
 * @returns {JSX.Element} The view container component.
 */
export const ViewContainer: React.FC<Props> = ({children, title, to}: Props): JSX.Element => {
    const {isOwnProfile} = usePathInfo(); // Determines if the current profile is the user's own profile

    return (
        <article className='my-2'>
            <div className='flex justify-between w-full border-b border-b-primary mb-2'>
                <h1>{title}</h1>
                {isOwnProfile && <NavLink to={to} className='ml-4 h-full'><EditIcon/></NavLink>}
            </div>
            {children}
        </article>
    );
};
