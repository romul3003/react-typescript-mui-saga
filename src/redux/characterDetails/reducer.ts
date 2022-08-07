import {
  CharacterDetails,
  LoadCharacterDetailsActionTypes,
  LOAD_CHARACTER_DETAILS,
  LOAD_CHARACTER_DETAILS_SUCCESS,
  LOAD_CHARACTER_DETAILS_FAILURE,
} from './types'

export type CharacterDetailsState = {
  data: CharacterDetails | null,
  error: string | unknown,
  loading: boolean,
}

export const initialState: CharacterDetailsState = {
  data: null,
  error: null,
  loading: false,
}

const CharacterDetailsReducer = (
  state = initialState,
  action: LoadCharacterDetailsActionTypes,
): CharacterDetailsState => {
  switch (action.type) {
  case LOAD_CHARACTER_DETAILS:
    return {
      ...state,
      loading: true,
    }
  case LOAD_CHARACTER_DETAILS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    }
  case LOAD_CHARACTER_DETAILS_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
    }

  default:
    return state
  }
}

export default CharacterDetailsReducer
