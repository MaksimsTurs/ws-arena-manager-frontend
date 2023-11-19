import './style/root.scss'

import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import store from './store/store'

import Window from './managerWindow/window.component'

import Fetcher from './utils/fetcher/fetcher.util'

const App = () => {
	Fetcher.baseURL = 'http://localhost:4000'
	
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Window />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
