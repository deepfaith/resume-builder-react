/**
 * Represents an employment experience.
 */
export class Experience {
    /** Unique identifier for the experience, optional. */
    id?: string;

    /** Job position title. */
    position: string;

    /** Company name where the experience was gained. */
    company: string;

    /** Numeric type identifier for the experience. */
    type: number;

    /** Flag indicating if the experience is the current job. */
    isActual: boolean;

    /** Start date of the experience. */
    start: string;

    /** End date of the experience, optional. */
    end?: string;

    /** Description of the experience in the native language. */
    nativeDesc: string;

    /** Flag indicating if there is an English description available. */
    hasEnglishDesc: boolean;

    /** English description of the experience, optional. */
    englishDesc?: string;

    /**
     * Constructs a new Experience instance with default values.
     */
    constructor() {
        this.id = undefined; // Optional unique identifier
        this.position = ''; // Job position title
        this.company = ''; // Company name
        this.type = 0; // Numeric type identifier
        this.isActual = false; // Current job status
        this.start = ''; // Start date
        this.end = undefined; // Optional end date
        this.nativeDesc = ''; // Description in native language
        this.hasEnglishDesc = false; // Availability of English description
        this.englishDesc = undefined; // Optional English description
    }
}
