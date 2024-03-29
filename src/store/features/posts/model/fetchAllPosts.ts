import { createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from '../../../../api/Services/PostService/types'
import PostService from '../../../../api/Services/PostService/PostService'
import { errorHandler } from '../../../../shared/utils/errorHandler'
import { AsyncThunkConfig } from '../../../../shared/types/asyncThunkConfig'

export const fetchAllPosts = createAsyncThunk<Post[], void, AsyncThunkConfig>(
    'postSlice/fetchAllPosts',
    async (_, thunkApi) => {
        try {
            const response = await PostService.getAllPosts()
            return response.data
        } catch (error: any) {
            return errorHandler(error, thunkApi)
        }
    }
)

