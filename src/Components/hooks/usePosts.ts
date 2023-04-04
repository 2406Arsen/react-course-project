
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostService from '../../api/Services/PostService/PostService'
import { useDispatch, useSelector } from 'react-redux'
import { initPostsAction, setGetAllPostsErrorAction, setLoading } from '../../store/features/posts/actions/postActions'
import {
    getPostsData,
    getPostsError,
    getPostsLoading,
} from '../../store/features/posts/selectors/post'


export function usePosts() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector(getPostsData)
    const isLoading = useSelector(getPostsLoading)
    const error = useSelector(getPostsError)

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


    const navigateSinglePostPage = useCallback((postId: number) => {
        console.log(postId, 'postId');
        navigate(`${postId}`)
    }, [navigate])

    useEffect(() => {
        if (!data.length) {
            getAllPosts()
        }
    }, [getAllPosts, data])

    return {
        posts: data,
        navigateSinglePostPage,
        isLoading,
        error
    }
}