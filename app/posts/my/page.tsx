import { MyPosts } from '@/src/components/screens/MyPosts/MyPosts'
import { PostService } from '@/src/services/post/post.service'

export default async () => {
	const posts = await PostService.getAllPosts()
	return <MyPosts {...posts} />
}
