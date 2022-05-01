import './App.css'
import { Counter } from './components/Counter'
import UserDataFormStore from './components/User'
import Servers from './components/Data'

function App() {
	return (
		<div className='App'>
			<Counter />
			<UserDataFormStore />
			<Servers />
		</div>
	)
}

export default App
