
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PostService from '../../api/Services/PostService/PostService'
import { useSelector } from 'react-redux'
// import { initPostsAction, selectPostAction, setGetAllPostsErrorAction, setLoading } from '../../store/features/posts/actions/postActions'
import {
    getPostsData,
    getPostsError,
    getPostsLoading,
    getSelectedPost,
} from '../../store/features/posts/selectors/post'
import { Post } from '../../api/Services/PostService/types'
import { postActions } from '../../store/features/posts'
import { fetchAllPosts } from '../../store/features/posts/model/fetchAllPosts'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export function usePosts() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const data = useSelector(getPostsData)
    const isLoading = useSelector(getPostsLoading)
    const error = useSelector(getPostsError)
    const selectedPost = useSelector(getSelectedPost)

    // const {
    //     data,
    //     isLoading,
    //     error,
    //     selectedPost
    // } = useAppSelector(store => store.posts, shallowEqual)

    const getAllPosts = useCallback(() => {
        dispatch(fetchAllPosts())
        // dispatch(postActions.setLoading(true))
        // dispatch(postActions.setError(undefined))
        // try {
        //     const posts = await PostService.getAllPosts()
        //     dispatch(postActions.initPosts(posts))
        // } catch (error) {
        //     console.warn(error)
        //     dispatch(postActions.setError('error message'))
        // } finally {
        //     dispatch(postActions.setLoading(false))
        // }
    }, [dispatch])



    const selectPost = useCallback((post: Post) => {
        dispatch(postActions.selectPost(post))
    }, [dispatch])


    const navigateSinglePostPage = useCallback((post: Post) => {
        navigate(`${post.id}`)
        selectPost(post)
    }, [navigate, selectPost])

    const getPost = useCallback(async (postId: number) => {
        dispatch(postActions.setLoading(true))
        try {
            const post = await PostService.getPostById(postId)
            selectPost(post)
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(postActions.setLoading(false))
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