import { useProfile } from '@/src/hooks/useProfile'
import { IPost, IPostCreateData } from '@/src/interfaces/post/post.interface'
import axios, { Axios, AxiosResponse } from 'axios'

const url = process.env.NEXT_PUBLIC_SERVER_URL
export const PostService = {
	async getAllPosts(): Promise<IPost[]> {
		const response = await fetch(`${url}/posts`, {
			method: 'GET',
			cache: 'no-cache'
		})
			.then(res => {
				return res.json()
			})
			.catch(err => console.log('err'))
		return response
	},
	async getPostById(id: string): Promise<IPost> {
		const response = await fetch(`${url}/posts/${id}`)
			.then(res => res.json())
			.catch(err => console.log('err'))
		return response
	},
	async createPost(post: IPostCreateData) {
		const response = await fetch(`${url}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token')
			},
			body: JSON.stringify(post)
		})
			.then(res => res.json())
			.then(res => {
				console.log(res)
				return res
			})
			.catch(err => console.log('err'))
	},
	async updatePost(post: IPost): Promise<IPost> {
		const response = await fetch(`${url}/posts/${post._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token')
			},
			body: JSON.stringify(post)
		})
			.then(res => res.json())
			.catch(err => console.log('err'))
		return response
	},
	async deletePost(id: string): Promise<string> {
		const response = await fetch(`${url}/posts/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Auth: 'Bearer ' + localStorage.getItem('token')
			}
		})
			.then(res => res.json())
			.catch(err => console.log('err'))
		return response
	},
	async getMyPosts(): Promise<AxiosResponse<IPost[]>> {
		const token = useProfile()?.token

		const response = await axios.get(`${url}/posts/my`, {
			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		return response
	}
}
