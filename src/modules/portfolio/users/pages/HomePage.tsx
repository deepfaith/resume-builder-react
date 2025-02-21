import {NavLink} from 'react-router-dom';
import {NextIcon, PreviousIcon} from '../../../../icons';
import {useUsers} from './hook';
import {FC} from 'react';

/**
 * Represents the home page component.
 * @returns The home page component with user navigation and pagination.
 */
export const HomePage: FC = () => {
    // Destructuring properties from the custom hook
    const {goNextPage, goPreviousPage, loading, page, totalUsers, users} = useUsers();

    // Display loader when data is being fetched
    if (loading) {
        return (<span className='loader'></span>);
    }

    return (
        <>
            {/* User list display */}
            <div className='flex flex-col'>
                {
                    users.map(user => (
                        <NavLink to={`/${user.username}`} className='font-semibold text-lg mb-4'
                                 key={user.username}>{user.name}</NavLink>
                    ))
                }
            </div>
            {/* Pagination footer */}
            {
                totalUsers > 10 && (
                    <footer className='
                        mt-4 w-2/6 md:w-1/6 h-10
                        flex flex-row justify-between items-center
                        rounded-lg overflow-hidden
                    '>
                        <button onClick={goPreviousPage} className='rounded-r-none border-l-0 hover:border-primary'>
                            <PreviousIcon/>
                        </button>

                        <p className='text-lg text-center'>{page + 1}</p>

                        <button onClick={goNextPage} className='rounded-l-none border-r-0 hover:border-primary'>
                            <NextIcon/>
                        </button>
                    </footer>
                )
            }
        </>
    );
};
