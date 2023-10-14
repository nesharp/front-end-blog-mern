'use client'
import { IPost } from '@/src/interfaces/post/post.interface'
import styles from './MyPosts.module.scss'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
import { useProfile } from '@/src/hooks/useProfile'
import { Loader } from '../../ui/Loader/Loader'
import Catalog from '../../ui/Catalog/Catalog'
import { useRouter } from 'next/navigation'
export const MyPosts = (posts: IPost[]) => {
	const router = useRouter()
	const user = useProfile()
	useAuthRedirect()
	if (!posts) return <Loader />
	const filteredPosts = Object.values(posts).filter(
		post => post.user._id === user?._id
	)
	return (
		<div className={styles.wrapper}>
			<Catalog posts={filteredPosts} title='My posts' />
		</div>
	)
}
