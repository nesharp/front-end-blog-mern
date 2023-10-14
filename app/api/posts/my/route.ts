import { useProfile } from '@/src/hooks/useProfile'
import axios from 'axios'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
	try {
		const { token } = await req.json()
		if (!token) return NextResponse.json(null)
		const url = process.env.NEXT_PUBLIC_SERVER_URL
		const response = await fetch(`${url}/posts/my`, {
			method: 'GET',
			cache: 'no-cache',
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json',
				Auth: 'Bearer ' + localStorage.getItem('token')
			}
		})
			.then(res => {
				return res.json()
			})
			.catch(err => console.log('err'))
		return NextResponse.json(response)
	} catch (error) {
		console.log(error)
		return new NextResponse('Internal server error', { status: 500 })
	}
}
