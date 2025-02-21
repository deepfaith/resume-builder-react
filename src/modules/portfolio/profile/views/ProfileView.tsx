import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {usePathInfo} from '../../../../hooks';
import {EditIcon} from '../../../../icons';
import {RootState} from '../../../../store';
import {ParagraphWithBreakLine} from '../../components';

/**
 * Represents the profile view component.
 * @returns The profile view JSX element.
 */
export const ProfileView: React.FC = () => {
    // Retrieve active user and language mode from Redux store
    const {activeUser, isEnglishMode} = useSelector((state: RootState) => state.portfolio);

    // Determine if the current profile belongs to the logged-in user
    const {isOwnProfile} = usePathInfo();

    return (
        <section className='mt-16 mb-2'>
            {/* Edit profile link shown only for own profile */}
            {isOwnProfile && <NavLink to='edit/profile' className='absolute top-3 right-6'><EditIcon/></NavLink>}
            <figure className='flex justify-center'>
                <img
                    src='./src/assets/profileImg.png'
                    className='
                        w-[100px] sm:w-[150px]
                        absolute -top-16
                        shadow-xl rounded-full border-none
                    '
                    alt='Profile'
                />
            </figure>
            <div className='text-center mt-5 sm:mt-20'>
                <h1 className='name'>{activeUser.name}</h1>
                {/* Display location if available */}
                {activeUser.locationState && activeUser.locationCountry && <div
                  className='text-xs font-light text-secondary uppercase'> {activeUser.locationState}, {activeUser.locationCountry}</div>}
            </div>
            {/* Display user description based on selected language */}
            {
                activeUser.hasEnglishDesc && isEnglishMode
                    ?
                    activeUser.englishDesc &&
                  <ParagraphWithBreakLine className='mt-3 pt-3 px-6 text-secondary border-t border-primary text-center'
                                          str={activeUser.englishDesc as string}/>
                    :
                    activeUser.nativeDesc &&
                  <ParagraphWithBreakLine className='mt-3 pt-3 px-6 text-secondary border-t border-primary text-center'
                                          str={activeUser.nativeDesc as string}/>
            }
        </section>
    );
};
