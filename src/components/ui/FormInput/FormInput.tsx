import classNames from 'classnames'
import { FC } from 'react'
import styles from './FormInput.module.scss'
interface Props {
	className?: string
	placeholder?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const FormInput: FC<Props> = ({
	className,
	placeholder,

	onChange
}) => {
	return (
		<input
			placeholder={placeholder || 'Enter the value'}
			className={classNames(styles.input, className || null)}
			onChange={onChange}
		/>
	)
}
