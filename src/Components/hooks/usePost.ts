
import { useCallback, useState, useEffect } from 'react'
import PostService from '../../api/Services/PostService/PostService'
import { Post } from '../../api/Services/PostService/types'


export function usePost(postId: number) {

    const [post, setPost] = useState<Post>()

    const getPost = useCallback(async (postId: number) => {
        try {
            const post = await PostService.getPostById(postId)
            setPost(post)
        } catch (error) {
            console.error(error)
        }
    }, [])
    useEffect(() => {

        getPost(postId)

    }, [getPost, postId])
    return {
        getPost,
        post
    }
}