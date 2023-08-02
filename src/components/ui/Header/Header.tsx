import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import LinkButton from '../LinkButton/LinkButton'
interface IHeader {}

const Header: FC<IHeader> = ({}) => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href={'/'}>
					<span>S</span>
					harp
				</Link>
			</div>
			<div className={styles.links}>
				<Link href={'/'}>Home</Link>
				<Link href={'/'}>Blog</Link>
				<Link href={'/'}>Profile</Link>
			</div>
			<div className={styles.profile}>
				<LinkButton link='/auth'>
					Login
				</LinkButton>
			</div>
		</header>
	)
}

export default Header
