'use client'
import { FC, useState } from 'react'
import styles from './Auth.module.scss'
import Input from '../../ui/Input/Input'
import Button from '../../ui/Button/Button'
import { RxAvatar } from 'react-icons/rx'
import { userService } from '@/src/services/user/user.service'
import { useActions } from '@/src/hooks/useAction'
interface IAuth {}

const AuthPage: FC<IAuth> = ({}) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const { setUser } = useActions()
	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={e => {}}>
				<h2>Login</h2>
				<Input
					placeholder='Login'
					type='text'
					value={login}
					setValue={setLogin}
					image={<RxAvatar />}
				/>
				<Input
					placeholder='Password'
					type='password'
					value={password}
					setValue={setPassword}
				/>
				<div className={styles.buttons}>
					<Button
						onClick={e => {
							userService.login({ email: login, password }).then(res => {
								console.log(res)
								setUser(res)
							})
						}}
					>
						Login
					</Button>
					<Button>Register</Button>
				</div>
			</form>
		</div>
	)
}

export default AuthPage
