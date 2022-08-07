export type CharacterDetails = {
  name: string,
  birth_year: string,
  skin_color: string,
  mass: string,
}

export const LOAD_CHARACTER_DETAILS = 'LOAD_CHARACTER_DETAILS'
export type LoadCharacterDetailsAction = {
  type: typeof LOAD_CHARACTER_DETAILS,
  payload: {
    id: string,
  },
}

export const LOAD_CHARACTER_DETAILS_SUCCESS = 'LOAD_CHARACTER_DETAILS_SUCCESS'
export type LoadCharacterDetailsSuccessAction = {
  type: typeof LOAD_CHARACTER_DETAILS_SUCCESS,
  payload: CharacterDetails,
}

export const LOAD_CHARACTER_DETAILS_FAILURE = 'LOAD_CHARACTER_DETAILS_FAILURE'
export type LoadCharacterDetailsFailureAction = {
  type: typeof LOAD_CHARACTER_DETAILS_FAILURE,
  payload: string | unknown,
}

export type LoadCharacterDetailsActionTypes =
  | LoadCharacterDetailsAction
  | LoadCharacterDetailsSuccessAction
  | LoadCharacterDetailsFailureAction
