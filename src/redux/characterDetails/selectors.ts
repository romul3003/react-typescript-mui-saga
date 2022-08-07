import { AppState } from '../../init/rootReducer'
import { CharacterDetailsState } from './reducer'

export const selectCharacterDetails = (state: AppState): CharacterDetailsState => state.characterDetails
