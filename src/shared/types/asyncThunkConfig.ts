import { RootState } from "../../store"
import { ErrorMessage } from "../constants/errorMessage"

export type AsyncThunkConfig = {
    state: RootState
    rejectValue: ErrorMessage
}