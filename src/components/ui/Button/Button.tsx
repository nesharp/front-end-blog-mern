'use client'
import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'

interface IButton {
	onClick?: (target: EventTarget) => void
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, onClick }) => {
	return (
		<button
			className={styles.button}
			onClick={e => {
				e.preventDefault()
				onClick && onClick(e.currentTarget)
			}}
		>
			{children}
		</button>
	)
}

export default Button
