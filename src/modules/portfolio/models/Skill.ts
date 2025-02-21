/**
 * Represents a skill with an ID, name, and type.
 */
export class Skill {
    /** Unique identifier for the skill */
    id: string;

    /** Name of the skill */
    name: string;

    /** Numeric type of the skill */
    type: number;

    /**
     * Constructs a new instance of the Skill class.
     */
    constructor() {
        this.id = ''; // Initialize the id with an empty string
        this.name = ''; // Initialize the name with an empty string
        this.type = 0; // Initialize the type with default value 0
    }
}
