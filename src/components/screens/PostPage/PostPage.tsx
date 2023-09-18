import { IPost } from '@/src/interfaces/post/post.interface'
import { FC } from 'react'
import styles from './PostPage.module.scss'
import { AiFillEye } from 'react-icons/ai'
import { useAddVisitors } from '@/src/hooks/useAddVisitors'
import { ViewsCount } from '@/src/components/ui/ViewsCount/ViewsCount'
interface IPostPage {
	post: IPost
}

const PostPage: FC<IPostPage> = ({ post }) => {
		return (
		<div className={styles.wrapper}>
			<div className={styles.page}>
				<h1>{post.title}</h1>
				<img src={post.imageUrl} alt='' />
				<div className={styles.info}>
					<ViewsCount {...post} />
					<p>{post.updatedAt.split('T')[0]}</p>
				</div>
				<p>{post.content}</p>
				<p>
					{post.tags.map(tag => (
						<span>{tag} </span>
					))}
				</p>
			</div>
		</div>
	)
}

export default PostPage
