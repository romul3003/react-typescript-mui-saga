
import {
  Characters,
  LoadCharactersAction,
  LoadCharactersSuccessAction,
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
} from './types'

export const loadCharacters = (newPage: number, search = ''): LoadCharactersAction => ({
  type: LOAD_CHARACTERS,
  payload: {
    page: newPage,
    search,
  },
})

export const loadCharactersSuccess = (data: Characters): LoadCharactersSuccessAction => ({
  type: LOAD_CHARACTERS_SUCCESS,
  payload: data,
})
