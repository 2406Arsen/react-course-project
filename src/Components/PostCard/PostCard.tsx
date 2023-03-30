import { useNavigate } from "react-router-dom"
import { Post } from "../../api/Services/PostService/types"

import './PostCard.scss'
interface PostCardProps {
    post: Post
    navigateSinglePostPage?: (postId: number) => void
}


export const PostCard = ({ post, navigateSinglePostPage }: PostCardProps) => {

    if (navigateSinglePostPage) {
        return (
            <p
                className='PostCard withNavigation'
                onClick={() => navigateSinglePostPage(post.id)}
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