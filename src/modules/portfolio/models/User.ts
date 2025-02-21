import {Education} from './Education';
import {Experience} from './Experience';
import {Project} from './Project';
import {SocialMedia} from './SocialMedia';
import {UserSkill} from './UserSkill';

/**
 * Class representing profile information.
 */
export class ProfileInfo {
    name: string; // User's name
    email: string; // User's email address
    username: string; // User's username
    isEnglishModeEnabled: boolean; // Flag to check if English mode is enabled
    nativeDesc?: string; // Description in the user's native language
    hasEnglishDesc: boolean; // Flag to indicate if there is an English description
    englishDesc?: string; // Description in English
    locationCountry?: string; // User's country location
    locationState?: string; // User's state location
    nativeAboutMe?: string; // About me in the user's native language
    hasEnglishAboutMe: boolean; // Flag to indicate if there is an English 'About Me'
    englishAboutMe?: string; // 'About Me' in English

    /**
     * Creates an instance of ProfileInfo.
     * @param {User} [user] - Optional user data to initialize the profile.
     */
    constructor(user?: User) {
        this.name = user ? user.name : '';
        this.email = user ? user.email : '';
        this.username = user ? user.username : '';
        this.isEnglishModeEnabled = user ? user.isEnglishModeEnabled : false;
        this.nativeDesc = user ? user.nativeDesc : '';
        this.hasEnglishDesc = user ? user.hasEnglishDesc : false;
        this.englishDesc = user ? user.englishDesc : undefined;
        this.locationCountry = user ? user.locationCountry : undefined;
        this.locationState = user ? user.locationState : undefined;
        this.nativeAboutMe = user ? user.nativeAboutMe : '';
        this.hasEnglishAboutMe = user ? user.hasEnglishAboutMe : false;
        this.englishAboutMe = user ? user.englishAboutMe : undefined;
    }
}

/**
 * Class representing a user, extending ProfileInfo.
 */
export class User extends ProfileInfo {
    educations: Education[]; // Array of user's education history
    experiences: Experience[]; // Array of user's work experiences
    projects: Project[]; // Array of user's projects
    skills: UserSkill[]; // Array of user's skills
    socialMedias: SocialMedia[]; // Array of user's social media links

    /**
     * Creates an instance of User.
     */
    constructor() {
        super();
        this.educations = [];
        this.experiences = [];
        this.projects = [];
        this.skills = [];
        this.socialMedias = [];
    }
}
