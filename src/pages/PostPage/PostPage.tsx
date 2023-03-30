
import { useParams, redirect } from 'react-router-dom'
import { PostCard } from '../../Components/PostCard/PostCard'
import { usePost } from '../../Components/hooks/usePost'

interface PostPageParams {
    id: string
}

export const PostPage = () => {

    const { id } = useParams<Partial<PostPageParams>>()
    const { post } = usePost(Number(id)) 

    if (isNaN(Number(id))) {
         redirect('posts')
    }

    return (
        <div>
            {
                post
                    ? <PostCard post={post} />
                    : <p> post not found</p>
            }
        </div>
    )
}