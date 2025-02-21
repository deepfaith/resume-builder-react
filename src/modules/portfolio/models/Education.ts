/**
 * Represents an educational background entry.
 */
export class Education {
    /** Optional unique identifier for the education entry */
    id?: string;

    /** Title or degree obtained */
    titleName: string;

    /** Name of the institute */
    institute: string;

    /** Type of education as a numeric code */
    type: number;

    /** Indicates if the education is current */
    isActual: boolean;

    /** Start date of the education period */
    start: string;

    /** Optional end date of the education period */
    end?: string;

    /** Description of the education in the native language */
    nativeDesc: string;

    /** Indicates if an English description is available */
    hasEnglishDesc: boolean;

    /** Optional English description of the education */
    englishDesc?: string;

    /**
     * Constructs a new instance of the Education class with default values.
     */
    constructor() {
        this.id = undefined; // Default value for optional ID
        this.titleName = ''; // Default empty string for title name
        this.institute = ''; // Default empty string for institute name
        this.type = 0; // Default type code
        this.isActual = false; // Default false indicating not current
        this.start = ''; // Default empty start date
        this.end = undefined; // Default undefined end date
        this.nativeDesc = ''; // Default empty native description
        this.hasEnglishDesc = false; // Default false for English description availability
        this.englishDesc = undefined; // Default undefined English description
    }
}
