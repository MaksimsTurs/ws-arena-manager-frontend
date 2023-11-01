import './style/root.scss'
import { createRoot } from 'react-dom/client'
import ManagerWindow from './managerWindow/managerWindow.component'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
	return (
		<Provider store={store}>
			<ManagerWindow />
		</Provider>
	)
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
