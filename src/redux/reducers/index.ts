import {
  Breed,
  Category,

  SET_BREEDS,
  SET_CATEGORIES,
  catsActionTypes,
} from '../types'

export type BreedsState = {
  breeds: Breed[];
  categories: Category[];
}

const initialState: BreedsState = {
  breeds: [],
  categories: [],
}

export default function reducer(state = initialState, action: catsActionTypes) {
  switch (action.type) {
  case SET_BREEDS: {
    return {
      ...state,
      breeds: [
        ...state.breeds,
        ...action.payload,
      ],
    }
  }
  case SET_CATEGORIES: {
    return {
      ...state,
      categories: [
        ...state.categories,
        ...action.payload,
      ],
    }
  }
  default:
    return state
  }
}
