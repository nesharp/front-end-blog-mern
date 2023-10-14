'use client'
import { IPost } from '@/src/interfaces/post/post.interface'
import styles from './deletePostsPage.module.scss'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
import { useProfile } from '@/src/hooks/useProfile'
import PostCard from '../../ui/PostCard/PostCard'
import { DeletePostCard } from '../../ui/DeleteCard/DeletePostCard'
import { PostService } from '@/src/services/post/post.service'
export const DeletePostPage = (posts: IPost[]) => {
	useAuthRedirect()
	const user = useProfile()
	const filteredPosts = Object.values(posts).filter(
		post => post.user._id === user?._id
	)
	return (
		<div className={styles.wrapper}>
			<h3>Delete Post</h3>
			<div className={styles.posts}>
				{filteredPosts.map(post => (
					<DeletePostCard
						post={post}
						key={post._id}
						className={styles.post}
						onClick={() => {
							PostService.deletePost(post._id).then(res => {
								window.location.reload()
								console.log(res)
							})
						}}
					/>
				))}
			</div>
		</div>
	)
}
