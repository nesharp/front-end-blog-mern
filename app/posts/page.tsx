import Catalog from '@/src/components/ui/Catalog/Catalog'
import { PostService } from '@/src/services/post/post.service'
import { FC } from 'react'
import styles from './Posts.module.scss'
interface IHomePage {}
export const metadata = {
	title: 'Posts',
	description: 'SharpBlog - Home Page'
}
const Page: FC<IHomePage> = async ({}) => {
	const posts = await PostService.getAllPosts()
	return <Catalog posts={posts} className={styles.catalog} />
}

export default Page
