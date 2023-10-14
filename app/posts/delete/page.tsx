import { DeletePostPage } from '@/src/components/screens/DeltePostPage/DeletePostPage'
import { PostService } from '@/src/services/post/post.service'

export default async () => {
	const posts = await PostService.getAllPosts()

	return (
		<div>
			<DeletePostPage {...posts} />
		</div>
	)
}
