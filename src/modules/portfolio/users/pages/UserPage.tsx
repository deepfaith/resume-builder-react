import {useEffect, FC} from 'react';
import {useSelector} from 'react-redux';
import {usePathInfo} from '../../../../hooks';
import {RootState, useAppDispatch} from '../../../../store';
import {startGettingActiveUser} from '../../../../store/portfolio';
import {EducationView} from '../../education';
import {ExperienceView} from '../../experience';
import {AboutMeView, ProfileView} from '../../profile';
import {ProjectView} from '../../project';
import {SkillView} from '../../skill';
import {SocialMediaView} from '../../social-media';

/**
 * Represents the user page component.
 * @returns The user page component with various user information views.
 */
export const UserPage: FC = () => {
    // Hook to dispatch actions
    const dispatch = useAppDispatch();

    // Custom hook to get path information
    const {username, isOwnProfile} = usePathInfo();

    // Effect to fetch active user data on username change
    useEffect(() => {
        dispatch(startGettingActiveUser(username as string));
    }, [dispatch, username]);

    // Selector to get user data and loading state from Redux store
    const {activeUser, loading} = useSelector((state: RootState) => state.portfolio);

    // Show loader if data is still loading
    if (loading) {
        return <span className='loader'></span>;
    }

    // Render user views conditionally based on data availability or ownership
    return (
        <>
            <ProfileView/>
            {(activeUser.nativeAboutMe || isOwnProfile) && <AboutMeView/>}
            {(activeUser.experiences.length > 0 || isOwnProfile) && <ExperienceView/>}
            {(activeUser.educations.length > 0 || isOwnProfile) && <EducationView/>}
            {(activeUser.projects.length > 0 || isOwnProfile) && <ProjectView/>}
            {(activeUser.skills.length > 0 || isOwnProfile) && <SkillView/>}
            {(activeUser.socialLinks.length > 0 || isOwnProfile) && <SocialMediaView/>}
        </>
    );
};
