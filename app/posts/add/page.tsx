'use client'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
import { AddPostPage } from '@/src/components/screens/AddPostPage/AddPostPage'
export default () => {
	useAuthRedirect()
	return <AddPostPage />
}
