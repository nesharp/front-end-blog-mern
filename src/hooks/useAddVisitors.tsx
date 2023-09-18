'use client'
import { useEffect } from 'react'
import { IPost } from '../interfaces/post/post.interface'
export const useAddVisitors = (post: IPost) => {
	useEffect(() => {
		console.log('Visitors added', post)
	}, [])
    return null
}
