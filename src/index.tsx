import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import CssBaseline from '@mui/material/CssBaseline'
import { /* styled, */ ThemeProvider } from '@mui/material/styles'

import { store, history } from './init/store'

import { theme } from './theme/theme'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

// Create a root.
const root = ReactDOM.createRoot(rootElement)

// Initial render
root.render(
  <Provider store={store}>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </CssBaseline>
  </Provider>,
)
