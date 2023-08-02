import { FC } from 'react'
import styles from './Home.module.scss'
import Catalog from '../../ui/Catalog/Catalog'
import { PostService } from '@/src/services/post/post.service'
interface IHome {}
// rixes
const HomePage: FC<IHome> = async ({}) => {
	const posts = await PostService.getAllPosts()
	return (
		<div className={styles.home}>
			<div className={styles.homeContent}>
				<img src={posts[0].imageUrl} alt='' />
				<div className={styles.info}>
					<h2>{posts[0].title}</h2>
					<h4>{posts[0].content}</h4>
				</div>
			</div>
			<div className={styles.catalog}>
				<Catalog posts={posts} />
			</div>
		</div>
	)
}

export default HomePage
