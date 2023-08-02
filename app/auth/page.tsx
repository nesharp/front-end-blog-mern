import AuthPage from '@/src/components/screens/Auth/Auth'
import { NextPage } from 'next'

export const metadata = {
	title: 'Auth',
	description: 'Auth page'
}
const Auth: NextPage = () => {
	return <AuthPage />
}
export default Auth
