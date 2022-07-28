import {
  Breed,
  Category,
  SET_BREEDS,
  SET_CATEGORIES,
  setBreedsAction,
  setCategoriesAction,
} from '../types'

export const setBreeds = (payload: Breed[]): setBreedsAction => ({
  type: SET_BREEDS,
  payload,
})

export const setCategories = (payload: Category[]): setCategoriesAction => ({
  type: SET_CATEGORIES,
  payload,
})
