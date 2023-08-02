import PostPage from '@/src/components/screens/PostPage/PostPage'
import { PostService } from '@/src/services/post/post.service'
import { FC } from 'react'

interface IPostPage {
	params: {
		id: string
	}
}
const Post: FC<IPostPage> = async ({ params }) => {
	const post = await PostService.getPostById(params.id)
	return <PostPage post={post} />
}

export default Post
