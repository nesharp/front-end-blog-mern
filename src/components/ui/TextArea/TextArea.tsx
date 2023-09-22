import { FC } from 'react'
import styles from './TextArea.module.scss'
import classNames from 'classnames'
interface ITextArea {
	placeholder?: string
	className?: string
}
export const TextArea: FC<ITextArea> = ({ placeholder, className }) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			<textarea placeholder={placeholder || 'Enter the value'}></textarea>
		</div>
	)
}
