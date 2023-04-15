import { Dispatch } from "redux"
import { ErrorMessage } from "../constants/errorMessage"
import { BaseThunkAPI ,} from "@reduxjs/toolkit/dist/createAsyncThunk"
import { RootState } from "../../store"
import { AxiosError } from "axios"

type ThunkApi = BaseThunkAPI<RootState, any, Dispatch, ErrorMessage>

export function errorHandler(error: AxiosError, thunkApi: ThunkApi) {
    if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
        return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST)
    }
    if (error.code === ErrorMessage.NETWORK_ERROR) {
        return thunkApi.rejectWithValue(ErrorMessage.NETWORK_ERROR)
    }
    return thunkApi.rejectWithValue(ErrorMessage.NOT_FOUND)

}