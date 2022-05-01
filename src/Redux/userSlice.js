import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		credentials: {
			name: 'Labas',
			password: 'rytas',
		},
	},
	reducers: {
		setUserName: (state, action) => {
			state.credentials.name = action.payload
		},
		setUserPassword: (state, action) => {
			state.credentials.password = action.payload
		},
	},
})

export const { setUserName, setUserPassword } = userSlice.actions

export default userSlice.reducer
