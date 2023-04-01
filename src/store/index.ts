import { combineReducers, createStore } from "redux";
import { settingsReducer } from "./features/settings/reducers/settingsReducer";
import { counterReducer } from "./features/counter/reducers/counterReducer";


const reducers = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})


export const store = createStore(reducers)