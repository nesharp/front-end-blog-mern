'use client'
import PostPage from '@/src/components/screens/PostPage/PostPage'
import { Loader } from '@/src/components/ui/Loader/Loader'
import { IPost } from '@/src/interfaces/post/post.interface'
import { PostService } from '@/src/services/post/post.service'
import { FC, useEffect, useState } from 'react'

interface IPostPage {
	params: {
		id: string
	}
}

const Post: FC<IPostPage> = ({ params }) => {
	const [post, setPost] = useState<IPost | null>(null)
	useEffect(() => {
		const postData = PostService.getPostById(params.id).then(post => {
			setPost(post)
		})
	}, [])
	// const post = PostService.getPostById(params.id)

	return post ? <PostPage post={post} /> : <Loader />
}

export default Post
