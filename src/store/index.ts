// import {
//     applyMiddleware,
//     combineReducers,
//     compose, createStore
// } from "redux";
// import { settingsReducer } from "./features/settings/reducers/settingsReducer";
// import { counterReducer } from "./features/counter/reducers/counterReducer";
// import { postsReducer } from "./features/posts/reducers/postsReducer";
// import thunk from "redux-thunk";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./features/posts";

// const reducer = combineReducers({
//     settings: settingsReducer,
//     counter: counterReducer,
//     posts: postsReducer,
// })

// const middlewareEnhancer = applyMiddleware(thunk, logger)

// const composeWithDevTools =
//     //@ts-ignore
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = configureStore({
    reducer: {
        posts: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
// export const store = createStore(reducers, composedEnhancers)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
