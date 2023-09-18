import { IUserResponse } from '@/src/interfaces/user/user.interface'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: { user: IUserResponse | null } = {
	user: null
}
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUserResponse>) {
			state.user = action.payload
		},
		removeUser(state) {
			state.user = null
		}
	}
})
export const { setUser, removeUser } = userSlice.actions
