
import { usePosts } from '../../Components/hooks/usePosts'
import { PostCard } from '../../Components/PostCard/PostCard'
import './PostsPage.scss'


export const PostsPage = () => {
    const { posts, navigateSinglePostPage, isLoading, error } = usePosts()

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