'use client'
import { FC, PropsWithChildren } from 'react'
import styles from './LinkButton.module.scss'
import Link from 'next/link'

interface ILinkButton {
	link: string
}

const LinkButton: FC<PropsWithChildren<ILinkButton>> = ({ children, link }) => {
	return (
		<Link href={`${link}`} className={styles.button}>
			{children}
		</Link>
	)
}

export default LinkButton
