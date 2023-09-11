import { FC } from 'react'
import styles from './Home.module.scss'
import Catalog from '../../ui/Catalog/Catalog'
import { PostService } from '@/src/services/post/post.service'
import { Loader } from '../../ui/Loader/Loader'
interface IHome {}

const HomePage: FC<IHome> = async ({}) => {
	const posts = await PostService.getAllPosts()
	return posts ? (
		<div className={styles.home}>
			<Catalog posts={posts} />
		</div>
	) : (
		<div className={styles.home}>
			<Loader />
		</div>
	)
}

export default HomePage
