import { FC } from 'react'
import styles from './Footer.module.scss'
interface IFooter {}

const Footer: FC<IFooter> = ({}) => {
	return (
		<footer className={styles.footer}>
			<h4>©Michael Nesteruk</h4>
			<p>nesterukmisha27@gmail.com</p>
		</footer>
	)
}

export default Footer
