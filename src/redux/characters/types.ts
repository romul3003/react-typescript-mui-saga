export type Character = {
  name: string,
  birth_year: string,
  eye_color: string,
  hair_color: string,
  height: string,
  mass: string,
  url: string,
}

export type Characters = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Character[],
}

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS'
export type LoadCharactersAction = {
  type: typeof LOAD_CHARACTERS,
  payload: {
    page: number,
    search: string,
  }
}

export const LOAD_CHARACTERS_SUCCESS = 'LOAD_CHARACTERS_SUCCESS'
export type LoadCharactersSuccessAction = {
  type: typeof LOAD_CHARACTERS_SUCCESS,
  payload: Characters,
}

export const LOAD_CHARACTERS_FAILURE = 'LOAD_CHARACTERS_FAILURE'
export type LoadCharactersFailureAction = {
  type: typeof LOAD_CHARACTERS_FAILURE,
  payload: string,
}

export type CharactersActionTypes =
  | LoadCharactersAction
  | LoadCharactersSuccessAction
  | LoadCharactersFailureAction
