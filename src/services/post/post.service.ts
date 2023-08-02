import { IPost } from '@/src/interfaces/post/post.interface'

const url = process.env.NEXT_PUBLIC_SERVER_URL
export const PostService = {
	async getAllPosts(): Promise<IPost[]> {
		const response = await fetch(`${url}/posts`)
			.then(res => res.json())
			.catch(err => console.log('err'))
		return response
	},
	async getPostById(id: string): Promise<IPost> {
		const response = await fetch(`${url}/posts/${id}`)
			.then(res => res.json())
			.catch(err => console.log('err'))
		return response
	},
	async createPost(post: IPost): Promise<IPost> {
		const response = await fetch(`${url}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Auth: 'Bearer ' + localStorage.getItem('token')
			},
			body: JSON.stringify(post)
		})
			.then(res => res.json())
			.catch(err => console.log('err'))
		return response
	},
	async updatePost(post: IPost): Promise<IPost> {
		const response = await fetch(`${url}/posts/${post._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Auth: 'Bearer ' + localStorage.getItem('token')
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
	}
}
