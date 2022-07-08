import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'

import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store
