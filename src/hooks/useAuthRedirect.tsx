import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { userService } from '../services/user/user.service'
export const useAuthRedirect = () => {
	const router = useRouter()
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (!token) {
			return router.push('/auth')
		}
		const user = userService.getUser(token)
		if (!user) return router.push('/auth')
	}, [])
}
