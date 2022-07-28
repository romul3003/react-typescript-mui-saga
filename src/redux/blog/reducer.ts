import { LOAD_BLOG_DATA, Vehicles, VehiclesActionTypes } from './types'

export type VehiclesState = {
  data: Vehicles;
}

const initialState: VehiclesState = {
  data: {
    results: [],
  },
}

export const blogReducer = (state = initialState, action: VehiclesActionTypes) => {
  switch (action.type) {
  case LOAD_BLOG_DATA:
    return {
      ...state,
      data: {
        ...action.payload,
      },
    }
  default:
    return state
  }
}
