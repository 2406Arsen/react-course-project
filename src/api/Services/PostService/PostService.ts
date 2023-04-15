import { api } from "../../api"
import { Post } from "./types";


class PostService {
    async getAllPosts() {
        const res = await api.get<Post[]>('posts')
        return res
    }
    async getPostById(postId: number) {
        const res = await api.get<Post>(`posts/${postId}`)
        return res
    }
}

const postService = new PostService()
export default postService