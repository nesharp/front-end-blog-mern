import { ILoginData, IUser } from "@/src/interfaces/user/user.interface"
import axios from "axios"

const url = process.env.NEXT_PUBLIC_SERVER_URL
export const userService =  {
    // not-ended
    async register() {
        const response = await fetch(`${url}/auth/register`, {
            method: 'POST',

        })
    },
    async login(data: ILoginData) {
        const response = await fetch(`${url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).catch(err => console.log(err))
        localStorage.setItem('token', response.token)
        return response
    },
    async getUser(token:string): Promise<IUser>{
        
        
        const response = await fetch(`${url}/users/me`, {
            method: 'GET',
            headers: {        
                Authorization: `Bearer ${token}`    
            },
        }).then(res => res.json()).catch(err => console.log(err))
        
        return response
    }
}