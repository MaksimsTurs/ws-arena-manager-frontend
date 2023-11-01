import './style/root.scss'
import { createRoot } from 'react-dom/client'
import ManagerWindow from './managerWindow/managerWindow.component'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<ManagerWindow />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
