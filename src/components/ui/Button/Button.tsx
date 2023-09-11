'use client'
import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import Link from 'next/link'

interface IButton {
	onClick?: (target: EventTarget) => void
	type?: 'button' | 'submit'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	onClick,
	type = 'button'
}) => {
	return (
		<button
			className={styles.button}
			onClick={e => {
				// e.preventDefault()
				onClick && onClick(e.currentTarget)
			}}
			type={type}
		>
			{children}
		</button>
	)
}

export default Button
