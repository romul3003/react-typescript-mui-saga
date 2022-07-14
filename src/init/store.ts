import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import reducer from '../redux/reducers'
import { middleware, sagaMiddleware } from './middleware'
import rootSaga from './rootSaga'

// mount it on the Store
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store
