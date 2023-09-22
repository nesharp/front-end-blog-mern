'use client'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
import { AddPostPage } from '@/src/components/screens/AddPostPage/AddPostPage'
import { Metadata } from 'next'

export default () => {
	useAuthRedirect()
	return <AddPostPage />
}
