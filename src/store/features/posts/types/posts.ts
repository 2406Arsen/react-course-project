// export enum PostActionTypes {
//     SET_LOADING = 'SET_LOADING',
//     INIT_POSTS = 'INIT_POSTS',
//     SET_ERROR = 'SET_ERROR',
//     SELECT_POST = 'SELECT_POST'
// }

import { Post } from "../../../../api/Services/PostService/types";


export interface PostsStateSchema {
    data: Post[],
    isLoading: boolean,
    error?: string,
    selectedPost?: Post
}