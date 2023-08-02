import { FC } from 'react'
import styles from './Catalog.module.scss'
import { IPost } from '@/src/interfaces/post/post.interface'
import PostCard from '@/src/components/ui/PostCard/PostCard'
interface ICatalog {
	posts: IPost[]
}

const Catalog: FC<ICatalog> = ({ posts }) => {
	return (
		<div className={styles.catalog}>
			<h3>Posts</h3>
			<div className={styles.posts}>
				{posts.map(post => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</div>
	)
}

export default Catalog
