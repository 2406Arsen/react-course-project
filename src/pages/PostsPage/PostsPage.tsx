
import { usePosts } from '../../Components/hooks/usePosts'
import { PostCard } from '../../Components/PostCard/PostCard'
import './PostsPage.scss'
import { useEffect } from 'react'


export const PostsPage = () => {
    const { posts, navigateSinglePostPage, isLoading, error, getAllPosts } = usePosts()

    // throw new Error('asdasdsa')
    useEffect(() => {
        if (!posts.length) {
            getAllPosts()
        }
    }, [getAllPosts, posts])

    if (isLoading) {
        return (
            <div className="PostsPage">
                loading...
            </div>
        )
    }
    if (error) {
        return (
            <div className="PostsPage">
                {error}
            </div>
        )
    }

    return (
        <div className="PostsPage">
            {posts.map((post) =>
                <PostCard post={post} key={post.id} navigateSinglePostPage={navigateSinglePostPage} />
            )}
        </div>
    )
}