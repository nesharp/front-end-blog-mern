'use client'
import { IPost } from '@/src/interfaces/post/post.interface'
import styles from './MyPosts.module.scss'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
import { use, useEffect, useState } from 'react'
import axios from 'axios'
import { useProfile } from '@/src/hooks/useProfile'
import { Loader } from '../../ui/Loader/Loader'
import { PostService } from '@/src/services/post/post.service'
import Catalog from '../../ui/Catalog/Catalog'
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'
import { ObjectFlags } from 'typescript'
export const MyPosts = (posts: IPost[]) => {
	const router = useRouter()
	const user = useProfile()
	useAuthRedirect()
	if (!posts) return <Loader />
	const filteredPosts = Object.values(posts).filter(
		post => post.user._id === user._id
	)
	console.log(filteredPosts)
	return (
		<div className={styles.wrapper}>
			<Catalog posts={filteredPosts} title='My posts' />
		</div>
	)
}
