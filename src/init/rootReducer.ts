import { combineReducers } from 'redux'
import apiReducer from '../modules/api/reducer'
import appReducer from '../modules/app/reducer'
import characterDetailsReducer from '../redux/characterDetails/reducer'
import CharactersReducer from '../redux/characters/reducer'
import { routerReducer } from './reduxHistoryContext'

export const rootReducer = combineReducers({
  app: appReducer,
  api: apiReducer,
  characters: CharactersReducer,
  characterDetails: characterDetailsReducer,
  router: routerReducer,
})

export type AppState = ReturnType<typeof rootReducer>
