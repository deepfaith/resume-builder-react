import toast from 'react-hot-toast';
import {deleteSkill, getSkill, postSkill, putSkill} from '../../../api';
import {UserSkill} from '../../../modules/portfolio';
import {AppDispatch} from '../../types';
import {addSkill, editSkill, loading, notLoading, removeSkill} from '../portfolioSlice';
import {handleAxiosError} from '../../helper';

/**
 * Starts the process of fetching skills information.
 * @returns A thunk action that fetches skills and handles loading state.
 */
export const startGettingSkillsInfo = (): (dispatch: AppDispatch) => Promise<any> => async (dispatch) => {
    dispatch(loading());
    try {
        const {data: SkillsInfo} = await getSkill();
        return SkillsInfo;
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        toast.error(msg);
        return dispatch(notLoading());
    }
};

/**
 * Starts the process of adding a new skill.
 * @param skill - The skill to add.
 * @param onRedirect - Callback function to execute after adding the skill.
 * @returns A thunk action that posts a skill and handles loading state.
 */
export const startAddingSkill = (skill: UserSkill, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => async (dispatch) => {
    dispatch(loading());
    try {
        const {data} = await postSkill(skill);
        const {id, msg} = data;
        skill.id = id;
        dispatch(addSkill({skill, msg}));
        onRedirect();
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        toast.error(msg);
        return dispatch(notLoading());
    }
};

/**
 * Starts the process of updating an existing skill.
 * @param skill - The skill to update.
 * @param onRedirect - Callback function to execute after updating the skill.
 * @returns A thunk action that updates a skill and handles loading state.
 */
export const startUpdatingSkill = (skill: UserSkill, onRedirect: () => void): (dispatch: AppDispatch) => Promise<void> => async (dispatch) => {
    dispatch(loading());
    try {
        const {data} = await putSkill(skill);
        const {msg} = data;
        dispatch(editSkill({skill, msg}));
        onRedirect();
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        toast.error(msg);
        return dispatch(notLoading());
    }
};

/**
 * Starts the process of deleting a skill.
 * @param id - The ID of the skill to delete.
 * @returns A thunk action that deletes a skill and handles loading state.
 */
export const startDeletingSkill = (id: string): (dispatch: AppDispatch) => Promise<void> => async (dispatch) => {
    dispatch(loading());
    try {
        const {data} = await deleteSkill(id);
        const {msg} = data;
        dispatch(removeSkill({id, msg}));
    } catch (err: unknown) {
        const msg = handleAxiosError(err);
        toast.error(msg);
        return dispatch(notLoading());
    }
};
