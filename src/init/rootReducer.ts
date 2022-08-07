import { combineReducers } from 'redux'
import characterDetailsReducer from '../redux/characterDetails/reducer'
import CharactersReducer from '../redux/characters/reducer'
import { routerReducer } from './reduxHistoryContext'

const initialState = {}

export const appReducer = (state = initialState) => state

export const rootReducer = combineReducers({
  app: appReducer,
  characters: CharactersReducer,
  characterDetails: characterDetailsReducer,
  router: routerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
