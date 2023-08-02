'use client'
import { FC } from 'react'
import styles from './Auth.module.scss'
import Input from '../../ui/Input/Input'
interface IAuth {}

const AuthPage: FC<IAuth> = ({}) => {
	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={e => {}}>
				<h2>Login</h2>
				<Input />
			</form>
		</div>
	)
}

export default AuthPage
