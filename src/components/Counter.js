import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	selectCount,
} from '../Redux/counterSlice'
import { setUserName, setUserPassword } from '../Redux/userSlice'

export function Counter() {
	// const count = useSelector(selectCount)
	const count = useSelector(state => state.counterNumber.value)
	const name = useSelector(state => state.userDataStore.credentials.name)
	const password = useSelector(
		state => state.userDataStore.credentials.password
	)
	const dispatch = useDispatch()

	const [incrementAmount, setIncrementAmount] = useState('2')
	const [nameUser, setNameUser] = useState('')
	const [paswordUser, setPasswordUser] = useState('')

	const handelDispachUser = () => {
		dispatch(setUserName(nameUser))
		dispatch(setUserPassword(paswordUser))
	}

	return (
		<div>
			<div>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					+
				</button>
				<span>{count}</span>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
			</div>
			<div>
				<input
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={e => setIncrementAmount(e.target.value)}
				/>
				<button
					onClick={() =>
						dispatch(incrementByAmount(Number(incrementAmount) || 0))
					}
				>
					Add Amount
				</button>
				<button
					onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
				>
					Add Async
				</button>
			</div>
			<h1>User slice starts here</h1>
			<input
				name='name'
				value={nameUser}
				onChange={e => setNameUser(e.target.value)}
			/>
			<input
				name='password'
				value={paswordUser}
				onChange={e => setPasswordUser(e.target.value)}
			/>
			<br />
			<button onClick={handelDispachUser}>Add User</button>
			<p>User name: {name}</p>
			<p>User password: {password}</p>
			<div></div>
		</div>
	)
}
