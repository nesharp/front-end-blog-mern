'use client'
import { FC, useEffect, useState } from 'react'
import styles from './Profile.module.scss'
import { IUser } from '@/src/interfaces/user/user.interface'
import { userService } from '@/src/services/user/user.service'
import { Loader } from '../../ui/Loader/Loader'
import { useProfile } from '@/src/hooks/useProfile'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
export const Profile: FC = () => {
	const user = useProfile()
	useAuthRedirect()
	return user ? (
		<div className={styles.wrapper}>
			<h1>Profile</h1>
			{user?.createdAt}
		</div>
	) : (
		<div className={styles.wrapper}>
			<Loader />
		</div>
	)
}
