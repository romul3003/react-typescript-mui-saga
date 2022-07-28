import { combineReducers } from 'redux'
import { blogReducer } from '../redux/blog/reducer'
import { routerReducer } from './reduxHistoryContext'

const initialState = {}

export const appReducer = (state = initialState, action) => state

export const rootReducer = combineReducers({
  app: appReducer,
  blog: blogReducer,
  router: routerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
