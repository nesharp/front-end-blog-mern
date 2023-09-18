import { IPost } from '@/src/interfaces/post/post.interface'
import { AiFillEye } from 'react-icons/ai'
import styles from './ViewsCount.module.scss'

export const ViewsCount = (post: IPost) => {
	return (
		<div className={styles.views}>
			<h6>{post.viewsCount}</h6>
			<AiFillEye color={'white'} className={styles.viewItem} />
		</div>
	)
}
