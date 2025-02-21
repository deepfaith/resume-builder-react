import {useDispatch} from 'react-redux';
import type {AppDispatch} from '..';

/**
 * Custom hook for using the dispatch function in a type-safe manner.
 * @returns {AppDispatch} The dispatch function from the Redux store.
 */
export const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();
