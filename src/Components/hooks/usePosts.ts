
import { useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostService from '../../api/Services/PostService/PostService'
import { Post } from '../../api/Services/PostService/types'


export function usePosts() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState<Post[]>()

    const getAllPosts = useCallback(async () => {
        try {
            const posts = await PostService.getAllPosts()
            // dispatch({
            //     type:'initPosts',
            //     payload:posts
            // })
            setPosts(posts)
        } catch (error) {
            console.error(error)
        }
    }, [])


    const navigateSinglePostPage = useCallback((postId: number) => {
        console.log(postId, 'postId');
        navigate(`${postId}`)
    }, [navigate])

    useEffect(() => {
        
        getAllPosts()
    }, [])

    return {
        posts,
        navigateSinglePostPage,
    }
}