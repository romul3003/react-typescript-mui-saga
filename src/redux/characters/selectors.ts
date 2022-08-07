import { CharactersState } from './reducer'
import { AppState } from '../../init/rootReducer'

export const selectCharacter = (state: AppState): CharactersState => state.characters
