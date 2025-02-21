import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {usePathInfo} from '../../../../hooks';
import {
    EditIcon,
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    PortfolioIcon,
    TwitterIcon,
    WhatsappIcon,
    YoutubeIcon
} from '../../../../icons';
import {RootState} from '../../../../store';

/**
 * Maps social media numeric identifiers to corresponding icon components.
 * @param smName - The numeric identifier of the social media.
 * @returns A JSX element representing the social media icon.
 */
const smToIcon = (smName: number): JSX.Element => {
    switch (smName) {
        case 0:
            return <FacebookIcon className='mb-6 sm:mb-2'/>;
        case 1:
            return <GithubIcon className='mb-6 sm:mb-2'/>;
        case 2:
            return <InstagramIcon className='mb-6 sm:mb-2'/>;
        case 3:
            return <LinkedinIcon className='mb-6 sm:mb-2'/>;
        case 4:
            return <TwitterIcon className='mb-6 sm:mb-2'/>;
        case 5:
            return <PortfolioIcon className='mb-6 sm:mb-2'/>;
        case 6:
            return <WhatsappIcon/>;
        case 7:
            return <YoutubeIcon className='mb-6 sm:mb-2'/>;
        default:
            throw new Error('Unknown social media type');
    }
};

/**
 * Component to display social media icons linked to user profiles.
 * @returns A JSX element representing the social media view.
 */
export const SocialMediaView: React.FC = () => {
    const {activeUser} = useSelector((state: RootState) => state.portfolio);

    const {isOwnProfile, isEditPath} = usePathInfo();

    return (
        <aside>
            {/* Conditionally render the edit icon if it's the user's own profile and not on the edit path */}
            {!isEditPath && isOwnProfile &&
              <NavLink to='edit/social-media'><EditIcon className='mb-6 sm:mb-2'/></NavLink>}
            {/* Map over each social media entry and create a link with the appropriate icon */}
            {activeUser.socialMedias.map(sm => (
                <a target='_blank' rel='noreferrer' href={sm.url} key={sm.id}>
                    {smToIcon(sm.name)}
                </a>
            ))}
        </aside>
    );
};
