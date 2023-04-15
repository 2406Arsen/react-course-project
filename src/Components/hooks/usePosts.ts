
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
    getPostsData,
    getPostsError,
    getPostsLoading,
    getSelectedPost,
} from '../../store/features/posts/selectors/post'
import { Post } from '../../api/Services/PostService/types'
import { postActions } from '../../store/features/posts'
import { fetchAllPosts } from '../../store/features/posts/model/fetchAllPosts'
import { useAppDispatch } from '../../shared/hooks/useAppDispatch'
import { fetchPostById } from '../../store/features/posts/model/fetchPostById'

export function usePosts() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const data = useSelector(getPostsData)
    const isLoading = useSelector(getPostsLoading)
    const error = useSelector(getPostsError)
    const selectedPost = useSelector(getSelectedPost)

    const getAllPosts = useCallback(() => {
        dispatch(fetchAllPosts())
    }, [dispatch])

    const navigateSinglePostPage = useCallback((post: Post) => {
        navigate(`${post.id}`)
        dispatch(postActions.selectPost(post))

    }, [dispatch, navigate])

    const getPost = useCallback(async (postId: number) => {
        dispatch(fetchPostById(postId))
    }, [dispatch])



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