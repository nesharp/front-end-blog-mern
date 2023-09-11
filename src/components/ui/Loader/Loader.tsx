import { FC } from 'react'
import styles from './Loader.module.scss'

export const Loader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
			<div className={styles.shadow}></div>
			<div className={styles.shadow}></div>
			<div className={styles.shadow}></div>
		</div>
	)
}
