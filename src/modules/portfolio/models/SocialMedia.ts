/**
 * Represents a social media profile.
 */
export class SocialMedia {
    /** Optional identifier for the social media profile */
    id?: string;

    /** Name of the social media platform */
    name: string; // Changed type from number to string

    /** URL of the social media profile */
    url: string;

    /**
     * Constructs a new instance of the SocialMedia class.
     */
    constructor() {
        this.id = undefined; // Initially undefined
        this.name = "default"; // Default name value set to "default"
        this.url = ''; // Default URL is an empty string
    }
}
