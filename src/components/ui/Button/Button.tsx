'use client'
import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

interface IButton {
	onClick?: (target: EventTarget) => void
	type?: 'button' | 'submit'
	className?: string
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	onClick,
	type = 'button',
	className
}) => {
	return (
		<button
			className={classNames(styles.button, className || null)}
			onClick={e => {
				onClick && onClick(e.currentTarget)
			}}
			type={type}
		>
			{children}
		</button>
	)
}

export default Button
