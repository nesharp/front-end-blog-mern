'use client'
import { use, useEffect, useState } from 'react'
import { userService } from '../services/user/user.service'
import { IUser } from '../interfaces/user/user.interface'

export const useProfile = () => {
	const [user, setUser] = useState<IUser | null>(null)
	
	useEffect(() => {
		const token = localStorage.getItem('token')
		userService
			.getUser(token || '')
			.then(res => {
				setUser(res)
			})
			.catch(err => {
				setUser(null)
			})
	}, [])
	if (!user) {
		return null
	}
	return user
}
