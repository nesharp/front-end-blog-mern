import { FC } from 'react'
import styles from './Catalog.module.scss'
import { IPost } from '@/src/interfaces/post/post.interface'
import PostCard from '@/src/components/ui/PostCard/PostCard'
import classNames from 'classnames'
interface ICatalog {
	posts: IPost[]
	title?: string
}

const Catalog: FC<ICatalog> = ({ posts, title = 'Posts' }) => {
	return (
		<div className={classNames(styles.catalog)}>
			<h3>{title}</h3>
			<div className={styles.posts}>
				{posts.map(post => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</div>
	)
}

export default Catalog
