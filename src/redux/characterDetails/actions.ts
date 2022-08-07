import {
  CharacterDetails,
  LoadCharacterDetailsAction,
  LoadCharacterDetailsSuccessAction,
  LoadCharacterDetailsFailureAction,
  LOAD_CHARACTER_DETAILS,
  LOAD_CHARACTER_DETAILS_SUCCESS,
  LOAD_CHARACTER_DETAILS_FAILURE,
} from './types'

export const loadCharacterDetails = (id: string): LoadCharacterDetailsAction => ({
  type: LOAD_CHARACTER_DETAILS,
  payload: {
    id,
  },
})

export const loadCharacterDetailsSuccess = (data: CharacterDetails): LoadCharacterDetailsSuccessAction => ({
  type: LOAD_CHARACTER_DETAILS_SUCCESS,
  payload: data,
})

export const loadCharacterDetailsError = (error: unknown): LoadCharacterDetailsFailureAction => ({
  type: LOAD_CHARACTER_DETAILS_FAILURE,
  payload: (typeof error === 'object' && error !== null) ? error.toString : error,
})
