import { Post } from "../../api/Services/PostService/types"

import './PostCard.scss'
interface PostCardProps {
    post: Post
    navigateSinglePostPage?: (post: Post) => void
}


export const PostCard = ({ post, navigateSinglePostPage }: PostCardProps) => {

    if (navigateSinglePostPage) {
        return (
            <p
                className='PostCard withNavigation'
                onClick={() => navigateSinglePostPage(post)}
            >
                {post.title}
            </p>
        )
    }
    return (
        <p className='PostCard'>
            {post.title}
        </p>
    )
}