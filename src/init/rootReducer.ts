import { combineReducers } from 'redux'
import apiReducer from '../modules/api/reducer'
import appReducer from '../modules/app/reducer'
import { routerReducer } from './reduxHistoryContext'

export const rootReducer = combineReducers({
  app: appReducer,
  api: apiReducer,
  router: routerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
