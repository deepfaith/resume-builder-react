/**
 * Represents a project with both native and optional English descriptions.
 */
export class Project {
    /** Optional unique identifier for the project */
    id?: string;

    /** Name of the project */
    name: string;

    /** URL of the project */
    url: string;

    /** Description of the project in the native language */
    nativeDesc: string;

    /** Flag to indicate if an English description is available */
    hasEnglishDesc: boolean;

    /** Optional English description of the project */
    englishDesc?: string;

    /**
     * Constructs a new instance of the Project class.
     */
    constructor() {
        this.id = undefined; // Initially undefined ID
        this.name = ''; // Initially empty project name
        this.url = ''; // Initially empty URL
        this.nativeDesc = ''; // Initially empty native language description
        this.hasEnglishDesc = false; // Initially set to false indicating no English description
        this.englishDesc = undefined; // Initially undefined English description
    }
}
