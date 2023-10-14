import { IPost } from '@/src/interfaces/post/post.interface'
import { FC } from 'react'
import styles from './PostCard.module.scss'
import Button from '../Button/Button'
import Link from 'next/link'
import LinkButton from '../LinkButton/LinkButton'
import classNames from 'classnames'
interface IPostCard {
	post: IPost
	className?: string
}

const PostCard: FC<IPostCard> = ({ post, className }) => {
	return (
		<div className={classNames(styles.card, className)}>
			<img src={post.imageUrl} className={styles.image} />
			<h3>{post.title}</h3>
			<p>{post.content}</p>
			<div className={styles.bottom}>
				<h5 className={styles.date}>{post.updatedAt.split('T')[0]}</h5>

				<LinkButton link={`/posts/${post._id}`}>Read More</LinkButton>
			</div>
		</div>
	)
}

export default PostCard
