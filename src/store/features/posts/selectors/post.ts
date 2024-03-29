import { RootState } from "../../..";

export const getPostsData = (store: RootState) => store.posts.data

export const getSelectedPost = (store: RootState) => store.posts.selectedPost

export const getPostsLoading = (store: RootState) => store.posts.isLoading

export const getPostsError = (store: RootState) => store.posts.error