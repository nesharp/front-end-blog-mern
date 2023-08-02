import { IUser } from '../user/user.interface'

export interface IPost {
	_id: string
	title: string
	content: string
	tags: string[]
	imageUrl: string
	viewsCount: number
	user: IUser
	createdAt: string
	updatedAt: string
}
