import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../../../api/Services/PostService/types'
import { PostsStateSchema } from '../types/posts'
import { fetchAllPosts } from '../model/fetchAllPosts'
import { ErrorMessage } from '../../../../shared/constants/errorMessage'
import { fetchPostById } from '../model/fetchPostById'


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
        setError: (state, action: PayloadAction<ErrorMessage | undefined>) => {
            state.error = action.payload
        },
        selectPost: (state, action: PayloadAction<Post>) => {
            state.selectedPost = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(fetchAllPosts.rejected, (state,action) => {
                state.error = action.payload as ErrorMessage
                state.isLoading = false
            })
            builder
            .addCase(fetchPostById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.selectedPost = action.payload
                state.isLoading = false
            })
            .addCase(fetchPostById.rejected, (state,action) => {
                state.error = action.payload as ErrorMessage
                state.isLoading = false
            })
    },
})

export const {
    reducer: postReducer,
    actions: postActions
} = postSlice


// redux persist 