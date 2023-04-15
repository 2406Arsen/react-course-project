import { createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from '../../../../api/Services/PostService/types'
import PostService from '../../../../api/Services/PostService/PostService'
import { errorHandler } from '../../../../shared/utils/errorHandler'
import { AsyncThunkConfig } from '../../../../shared/types/asyncThunkConfig'

export const fetchPostById = createAsyncThunk<Post, number, AsyncThunkConfig>(
    'postSlice/fetchPostById',
    async (postId, thunkApi) => {
        try {
            thunkApi.getState()
            const response = await PostService.getPostById(postId)
            return response.data
        } catch (error: any) {
            return errorHandler(error, thunkApi)
        }
    }
)

