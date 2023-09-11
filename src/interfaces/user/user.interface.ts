export interface IUser {
	_id: string
	fullName: string
	email: string
	avatarUrl?: string
	createdAt: string
	updatedAt: string
}
export interface ILoginData {
	email: string
	password: string
}