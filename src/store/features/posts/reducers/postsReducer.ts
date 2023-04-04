import { Post } from "../../../../api/Services/PostService/types"
import { PostActionTypes } from "../types/posts"

type Payload = Post[] | boolean | string


interface ActionType {
    type: PostActionTypes
    payload: Payload
}

interface PostsStateSchema {
    data: Post[],
    isLoading: boolean,
    error?: string
}

const initialState: PostsStateSchema = {
    data: [],
    isLoading: false
}

export function postsReducer(state = initialState, action: ActionType): PostsStateSchema {
    switch (action.type) {
        case PostActionTypes.SET_LOADING:
            return { ...state, isLoading: action.payload as boolean }
        case PostActionTypes.INIT_POSTS:
            return { ...state, data: action.payload as Post[] }
        case PostActionTypes.SET_ERROR:
            return { ...state, error: action.payload as string }
        default:
            return state
    }
}
