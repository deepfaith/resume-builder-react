import {Skill} from './Skill';

/**
 * Represents a user's skill with associated proficiency percentage.
 */
export class UserSkill {
    /** Unique identifier for the UserSkill */
    id?: string;

    /** Proficiency percentage of the skill */
    percentage: number;

    /** Detailed information about the skill */
    skillInfo: Skill;

    /**
     * Constructs a new UserSkill instance with default values.
     */
    constructor() {
        this.id = undefined; // Initially, no ID is assigned
        this.percentage = 0; // Default proficiency percentage is 0
        this.skillInfo = new Skill(); // Create a new instance of Skill
    }
}
