import { IPost } from '@/src/interfaces/post/post.interface'
import { FC } from 'react'
import styles from './PostCard.module.scss'
import Button from '../Button/Button'
import Link from 'next/link'
import LinkButton from '../LinkButton/LinkButton'
interface IPostCard {
	post: IPost
}

const PostCard: FC<IPostCard> = ({ post }) => {
	return (
		<div className={styles.card}>
			<img
				// src='https://images.unsplash.com/photo-1638486071992-536e48c8fa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9vayUyMGJhY2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
				src={post.imageUrl}
				className={styles.image}
			/>
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
