import {useNavigate, useParams} from 'react-router-dom';
import {RootState, useAppDispatch} from '../../../../../store';
import {useSelector} from 'react-redux';
import {UserSkill} from '../../../models';
import {SubmitHandler, useForm} from 'react-hook-form';
import {startAddingSkill, startUpdatingSkill} from '../../../../../store/portfolio';
import {useEffect, useState} from 'react';
import {getSkill} from '../../../../../api';
import {Skill} from '../../../models/Skill';

/**
 * Custom hook for handling skill operations.
 * @returns An object containing various states and functions for skill management.
 */
export const useHandleSkill = (): {
    loading: boolean,
    availableSkills: Skill[],
    disable: boolean,
    skill: UserSkill,
    onSubmit: () => void,
    register: ReturnType<typeof useForm>['register']
} => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {id, username} = useParams<{ id?: string, username?: string }>();

    // State to hold skills that are not already used by the user
    const [availableSkills, setAvailableSkills] = useState<Skill[]>([]);

    // Extracting necessary parts of the state
    const {activeUser, loading} = useSelector((state: RootState) => state.portfolio);

    // Determine if the form should be disabled based on the presence of an ID
    const disable: boolean = id ? true : false;

    // Redirect if the skill ID is not found in the user's skills
    if (id && activeUser.skills.find(skl => skl.id === id) === undefined) {
        navigate(`/${username}`);
    }

    // Fetch and filter available skills on mount if the form is not disabled
    useEffect(() => {
        if (!disable) {
            getSkill().then(({data: skills}) => {
                const usedSkillIds: string[] = activeUser.skills.map(skl => skl.skillInfo.id);
                const availableSkls = skills.filter(skl => !usedSkillIds.includes(skl.id));
                setAvailableSkills(availableSkls);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Determine the initial skill data based on the presence of an ID
    const skill = id ? activeUser.skills.find(skl => skl.id === id) as UserSkill : new UserSkill();

    // Setup form handling
    const {register, handleSubmit} = useForm<UserSkill>({defaultValues: {...skill}});

    // Function to handle redirection after form submission
    const onRedirect = () => navigate(`/${username}/edit/skills`);

    // Function to handle form submission
    const onSubmitSkill: SubmitHandler<UserSkill> = data => {
        if (!disable) {
            data.skillInfo = availableSkills.find(skl => skl.id === data.skillInfo.id) as Skill;
        }
        if (id) {
            return dispatch(startUpdatingSkill(data, onRedirect));
        }
        return dispatch(startAddingSkill(data, onRedirect));
    };

    // Prepare the submit function from useForm
    const onSubmit = handleSubmit(onSubmitSkill);

    return {
        loading,
        availableSkills,
        disable,
        skill,
        onSubmit,
        register
    };
};
