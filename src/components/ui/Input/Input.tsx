import { FC, PropsWithChildren } from 'react'
import styles from './Input.module.scss'
interface IInput {
	className?: string
	type?: string
    placeholder?: string
    image?: string
}

const Input: FC<PropsWithChildren<IInput>> = ({}) => {
    return (
			<div className={styles.inputWrapper}>
				<input type='text' />
				AiFillAlert
			</div>
		)
}

export default Input
