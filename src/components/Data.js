import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../Redux/dataSlice'
import { useEffect } from 'react'

const Data = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state.serversStore.data)
	useEffect(() => {
		const dataFetch = async () =>
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(json => dispatch(setData(json)))
				.then(json => console.log(json))

		dataFetch()
	}, [])
	return (
		<>
			<div>Data pafecinta is API</div>
			{data.map(item => (
				<div key={item.id}>{item.name}</div>
			))}
		</>
	)
}

export default Data
