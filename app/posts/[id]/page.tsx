import PostPage from '@/src/components/screens/PostPage/PostPage'
import { Loader } from '@/src/components/ui/Loader/Loader'
import { PostService } from '@/src/services/post/post.service'
import { FC } from 'react'

interface IPostPage {
	params: {
		id: string
	}
}
const Post: FC<IPostPage> = async ({ params }) => {
	const post = await PostService.getPostById(params.id)

	return post ? <PostPage post={post} /> : <Loader />
}

export default Post
