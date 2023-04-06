
import { useParams, redirect } from 'react-router-dom'
import { PostCard } from '../../Components/PostCard/PostCard'
import { usePosts } from '../../Components/hooks/usePosts'
import { useEffect } from 'react'
import './PostPage.scss'
interface PostPageParams {
    id: string
}

export const PostPage = () => {

    const { id } = useParams<Partial<PostPageParams>>()
    const { selectedPost, getPost, isLoading } = usePosts()

    if (isNaN(Number(id))) {
        redirect('posts')
    }

    useEffect(() => {
        if (!selectedPost) {
            getPost(Number(id))
        }
    }, [getPost, id, selectedPost])


    return (
        <div className='PostPage'>
            {
                !isLoading && selectedPost
                    ? <PostCard post={selectedPost} />
                    : <p> loading...</p>
            }
        </div>
    )
}