'use client'
import { FC, use, useEffect, useState } from 'react'
import LinkButton from '../LinkButton/LinkButton'
import { useProfile } from '@/src/hooks/useProfile'
import styles from './AuthItem.module.scss'
import Link from 'next/link'
export const AuthItem: FC = ({}) => {
	const user = useProfile()
	return user ? (
		<div className={styles.wrapper}>
			<Link href='/profile'>
				<img src={user.avatarUrl} alt='avatar' />
			</Link>
		</div>
	) : (
		<LinkButton link='/auth'>Auth</LinkButton>
	)
}
