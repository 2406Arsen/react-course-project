
import { usePosts } from '../../Components/hooks/usePosts'
import { PostCard } from '../../Components/PostCard/PostCard'
import './PostsPage.scss'


export const PostsPage = () => {
    const { posts, navigateSinglePostPage } = usePosts()

    if (!posts) {
        return (
            <div className="PostsPage">
                loading...
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