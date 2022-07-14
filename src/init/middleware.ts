import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

export { middleware, sagaMiddleware }
