import { createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from '../../../../api/Services/PostService/types'
import { api } from '../../../../api/api'
import { RootState } from '../../..'
import { ErrorMessage } from '../../../../constants/errorMessage'
export const fetchAllPosts = createAsyncThunk<Post[], void, { state: RootState, rejectValue: ErrorMessage }>(
    'postSlice/fetchAllPosts',
    async (_, thunkApi) => {
        try {
            const response = await api.get<Post[]>('postssss')
            // if (response.status < 200 || response.status >= 300) {
            //     return thunkApi.rejectWithValue(response.data)
            // }
            return response.data
        } catch (error: any) {
            console.log(error);

            if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
                return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST)
            }
            return []
            //     // return thunkApi.rejectWithValue(error)

        }
    }
)

