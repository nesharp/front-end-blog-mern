'use client'
import { use, useEffect, useState } from 'react'
import { userService } from '../services/user/user.service'
import { IUser, IUserResponse } from '../interfaces/user/user.interface'
import { useSelector } from 'react-redux'

export const useProfile = () => {
	const user = useSelector(
		(state: { user: { user: IUserResponse } }) => state.user.user
	)
	console.log(user)
	if (!user?.token) {
		return null
	}
	return user
}
