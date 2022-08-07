import {
  Characters,
  CharactersActionTypes,
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_FAILURE,
} from './types'

export type CharactersState = {
  page: number,
  search: string,
  loading: boolean,
  error: string | null,
  data: Characters | null,
}

const initialState: CharactersState = {
  page: 1,
  search: '',
  loading: false,
  error: null,
  data: null,
}

export default function CharactersReducer(state = initialState, action: CharactersActionTypes): CharactersState {
  switch (action.type) {
  case LOAD_CHARACTERS: {
    const { page, search } = action.payload

    return {
      ...state,
      loading: true,
      page,
      search,
    }
  }
  case LOAD_CHARACTERS_SUCCESS: {
    return {
      ...state,
      data: action.payload,
      loading: false,
    }
  }

  case LOAD_CHARACTERS_FAILURE: {
    return {
      ...state,
      error: action.payload,
      loading: false,
    }
  }
  default:
    return state
  }
}
