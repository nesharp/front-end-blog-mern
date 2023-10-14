import { FC, useEffect } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { AuthItem } from '../AuthItem/AuthItem'
const Header: FC = ({}) => {
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
				<Link href={'/profile'}>Profile</Link>
				<Link href={'/posts/my'}>My posts</Link>
				<Link href={'/posts/add'}>Add post</Link>
				<Link href={'/posts/delete'}>Delete posts</Link>
			</div>
			<div className={styles.profile}>
				<AuthItem />
			</div>
		</header>
	)
}

export default Header
