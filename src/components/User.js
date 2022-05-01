import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
	const name = useSelector(state => state.userDataStore.credentials.name)
	const password = useSelector(
		state => state.userDataStore.credentials.password
	)

	return (
		<>
			<h1>User component with user data from store</h1>
			<h3>User name from store: {name}</h3>
			<h3>User password from store: {password}</h3>
		</>
	)
}

export default User
