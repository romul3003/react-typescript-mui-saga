import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

// Create a root.
const root = ReactDOM.createRoot(rootElement)

// Initial render
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
