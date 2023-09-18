import Catalog from '@/src/components/ui/Catalog/Catalog'
import { PostService } from '@/src/services/post/post.service'
import { FC } from 'react'
interface IHomePage {}
export const metadata = {
	title: 'Posts',
	description: 'SharpBlog - Home Page'
}
const Page: FC<IHomePage> = async ({}) => {
	const posts = await PostService.getAllPosts()
	return (
		<div>
			<Catalog posts={posts} />
		</div>
	)
}

export default Page
