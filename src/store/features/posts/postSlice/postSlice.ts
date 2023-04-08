import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../../../api/Services/PostService/types'
import { PostsStateSchema } from '../types/posts'


const initialState: PostsStateSchema = {
    data: [],
    isLoading: false
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        initPosts: (state, action: PayloadAction<Post[]>) => {
            state.data = action.payload
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload
        },
        selectPost: (state, action: PayloadAction<Post>) => {
            state.selectedPost = action.payload
        }
    },
})

export const {
    reducer: postReducer,
    actions: postActions
} = postSlice

