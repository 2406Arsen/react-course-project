import { Post } from "../../../../api/Services/PostService/types";
import { PostActionTypes } from "../types/posts";


export const setLoading = (payload: boolean) => ({
    type: PostActionTypes.SET_LOADING,
    payload
})

export const initPostsAction = (payload: Post[]) => ({
    type: PostActionTypes.INIT_POSTS,
    payload
})
export const setGetAllPostsErrorAction = (payload?: string) => ({
    type: PostActionTypes.SET_ERROR,
    payload
})