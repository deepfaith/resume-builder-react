import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../../../../store';
import {startGettingUsers} from '../../../../../store/portfolio';

/**
 * Custom hook to manage and access user data with pagination.
 * @returns An object containing functions to navigate pages, loading state, current page, total users, and the list of users.
 */
export const useUsers = (): {
    goNextPage: () => void;
    goPreviousPage: () => void;
    loading: boolean;
    page: number;
    totalUsers: number;
    users: any[]; // Specify a more detailed type instead of any if possible
} => {
    const dispatch = useAppDispatch();

    // State to track the current page number
    const [page, setPage] = useState<number>(0);

    // Effect to fetch users when the page changes
    useEffect(() => {
        dispatch(startGettingUsers(page));
    }, [dispatch, page]);

    // Selecting user data from the Redux store
    const {users, totalUsers, loading} = useSelector((state: RootState) => state.portfolio);

    /**
     * Function to navigate to the previous page.
     */
    const goPreviousPage = (): void => {
        if (page > 0) setPage(page - 1);
    };

    /**
     * Function to navigate to the next page.
     */
    const goNextPage = (): void => {
        if ((page + 1) * 10 < totalUsers) setPage(page + 1);
    };

    return {
        goNextPage,
        goPreviousPage,
        loading,
        page,
        totalUsers,
        users
    };
};
