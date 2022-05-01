import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice'
import dataReducer from './dataSlice'

export const store = configureStore({
	reducer: {
		counterNumber: counterReducer,
		userDataStore: userReducer,
		serversStore: dataReducer,
	},
})
