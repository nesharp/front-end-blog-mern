import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import LinkButton from '../LinkButton/LinkButton'
import Auth from '@/app/auth/page'
import { AuthItem } from '../AuthItem/AuthItem'
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
				<Link href={'/profile'}>Profile</Link>
				<Link href={'/posts/my'}>My posts</Link>
			</div>
			<div className={styles.profile}>
				{/* <LinkButton link='/auth'>Auth</LinkButton> */}
				<AuthItem />
			</div>
		</header>
	)
}

export default Header
