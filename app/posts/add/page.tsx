'use client'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
import { AddPostPage } from '@/src/components/screens/AddPostPage/AddPostPage'
import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Add Post',
	description: 'Add a post to the blog'
}
export default () => {
	useAuthRedirect()
	return <AddPostPage />
}
