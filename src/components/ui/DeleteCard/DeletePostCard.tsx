'use client'
import { IPost } from '@/src/interfaces/post/post.interface'
import styles from './DeletePostCard.module.scss'
import classNames from 'classnames'
import { Trash2 } from 'lucide-react'
import { FC, useState } from 'react'
interface IPostCard {
	post: IPost
	className?: string
	onClick: () => void
}
export const DeletePostCard: FC<IPostCard> = ({ post, className, onClick }) => {
	const [isEntered, setIsEntered] = useState(false)
	return (
		<div
			className={classNames(styles.card, className)}
			onClick={() => {
				onClick && onClick()
			}}
			onMouseEnter={e => {
				setIsEntered(true)
			}}
			onMouseLeave={() => {
				setIsEntered(false)
			}}
		>
			{!isEntered ? (
				<div>
					<img src={post.imageUrl} className={styles.image} />
					<h3>{post.title}</h3>
					<p>{post.content}</p>
					<div className={styles.bottom}>
						<h5 className={styles.date}>{post.updatedAt.split('T')[0]}</h5>
					</div>
				</div>
			) : (
				<div className={styles.iconWrapper}>
					<Trash2 className={styles.icon} />
				</div>
			)}
		</div>
	)
}
