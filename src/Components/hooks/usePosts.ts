
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PostService from '../../api/Services/PostService/PostService'
import { useDispatch, useSelector } from 'react-redux'
import { initPostsAction, selectPostAction, setGetAllPostsErrorAction, setLoading } from '../../store/features/posts/actions/postActions'
import {
    getPostsData,
    getPostsError,
    getPostsLoading,
    getSelectedPost,
} from '../../store/features/posts/selectors/post'
import { Post } from '../../api/Services/PostService/types'

export function usePosts() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector(getPostsData)
    const isLoading = useSelector(getPostsLoading)
    const error = useSelector(getPostsError)
    const selectedPost = useSelector(getSelectedPost)

    const getAllPosts = useCallback(async () => {
        dispatch(setLoading(true))
        dispatch(setGetAllPostsErrorAction(undefined))
        try {
            const posts = await PostService.getAllPosts()
            dispatch(initPostsAction(posts))
        } catch (error) {
            console.warn(error)
            dispatch(setGetAllPostsErrorAction('error message'))
        } finally {
            dispatch(setLoading(false))
        }
    }, [dispatch])



    const selectPost = useCallback((post: Post) => {
        dispatch(selectPostAction(post))
    }, [dispatch])


    const navigateSinglePostPage = useCallback((post: Post) => {
        navigate(`${post.id}`)
        selectPost(post)
    }, [navigate, selectPost])

    const getPost = useCallback(async (postId: number) => {
        dispatch(setLoading(true))
        try {
            const post = await PostService.getPostById(postId)
            selectPost(post)
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(setLoading(false))
        }
    }, [dispatch, selectPost])



    return {
        posts: data,
        navigateSinglePostPage,
        isLoading,
        error,
        selectedPost,
        getAllPosts,
        getPost
    }
}