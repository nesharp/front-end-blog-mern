'use client'
import { FC, useEffect, useState } from 'react'
import styles from './Profile.module.scss'
import { Loader } from '../../ui/Loader/Loader'
import { useProfile } from '@/src/hooks/useProfile'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'
import Input from '../../ui/Input/Input'
import { BsLink45Deg } from 'react-icons/bs'
import { BiRename } from 'react-icons/bi'
import { MdAlternateEmail } from 'react-icons/md'
import { PiPasswordBold } from 'react-icons/pi'
import Button from '../../ui/Button/Button'
import { userService } from '@/src/services/user/user.service'
export const Profile: FC = () => {
	const user = useProfile()
	useAuthRedirect()
	const [fullName, setFullName] = useState(user?.fullName as string)
	const [email, setEmail] = useState('' as string)
	const [password, setPassword] = useState('' as string)
	const [confirmPassword, setConfirmPassword] = useState('' as string)
	const [avatarUrl, setAvatarUrl] = useState('' as string)
	useEffect(() => {
		if (user) {
			setFullName(user.fullName)
			setEmail(user.email)
			// setPassword(user.)
			setAvatarUrl(user.avatarUrl || '')
		}
	}, [user])

	return user ? (
		<div className={styles.wrapper}>
			<h1>Profile</h1>
			<Input
				value={fullName}
				className={styles.input}
				setValue={setFullName}
				image={<BiRename />}
			/>
			<Input
				value={email}
				className={styles.input}
				setValue={setEmail}
				image={<MdAlternateEmail />}
			/>
			<Input
				value={avatarUrl}
				className={styles.input}
				setValue={setAvatarUrl}
				image={<BsLink45Deg />}
			/>
			<Input
				value={password}
				className={styles.input}
				setValue={setPassword}
				image={<PiPasswordBold />}
				type='password'
				placeholder='New password'
			/>
			<Input
				value={confirmPassword}
				className={styles.input}
				setValue={setConfirmPassword}
				image={<PiPasswordBold />}
				type='password'
				placeholder='Confirm password'
			/>
			<div className={styles.buttonWrapper}>
				<Button
					type='button'
					className={styles.button}
					onClick={() => {
						console.log('Saved')
					}}
				>
					Save
				</Button>
			</div>
		</div>
	) : (
		<div className={styles.wrapper}>
			<Loader />
		</div>
	)
}
