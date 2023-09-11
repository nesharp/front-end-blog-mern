import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'
import styles from './Input.module.scss'
import { BsFillKeyFill } from 'react-icons/bs'
import cn from 'classnames'
interface IInput {
	className?: string
	type?: 'text' | 'password' | 'email' | 'number'
	placeholder?: string
	image?: any
	value?: string
	setValue?: Dispatch<SetStateAction<string>>
}

const Input: FC<PropsWithChildren<IInput>> = ({
	className,
	placeholder = 'Enter the value',
	type = 'text',
	image = <BsFillKeyFill />,
	value = '',
	setValue
}) => {
	return (
		<div className={cn(styles.inputWrapper, className || null)}>
			{image}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => {
					setValue && setValue(e.target.value.toString())
				}}
			/>
		</div>
	)
}

export default Input
