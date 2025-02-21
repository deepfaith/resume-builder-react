import { store } from './store';

/** Type representing the root state of the application */
export type RootState = ReturnType<typeof store.getState>;  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

/** Type representing the dispatch function from the Redux store */
export type AppDispatch = typeof store.dispatch;

