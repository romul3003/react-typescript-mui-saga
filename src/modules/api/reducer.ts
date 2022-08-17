import camelCase from 'camelcase'
import ENDPOINTS, { ApiKeys } from './endpoints'
import {
  Data,
  FetchApiActionTypes,
  FETCH_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
} from './types'

type ApiState = {
  data: null | Data,
  loading: boolean,
  error: null | string
}

type Acc = Record<ApiKeys, ApiState>

const initApiState = () => Object.keys(ENDPOINTS).reduce((acc, next) => {
  const inner: ApiState = {
    data: null,
    loading: false,
    error: null,
  }

  acc[camelCase(next) as keyof Acc] = inner

  return acc
}, {} as Acc)

const INITIAL_STATE = initApiState()

const apiReducer = (state = INITIAL_STATE, action: FetchApiActionTypes) => {
  if (action.type.startsWith(FETCH_START)) {
    const inner = camelCase(action.type.replace(FETCH_START, ''))

    return {
      ...state,
      [inner]: {
        ...state[inner as keyof Acc],
        loading: true,
        error: null,
      },
    }
  }

  if (action.type.startsWith(FETCH_SUCCESS)) {
    const inner = camelCase(action.type.replace(FETCH_SUCCESS, ''))

    return {
      ...state,
      [inner]: {
        ...state[inner as keyof Acc],
        data: action.payload,
        loading: false,
        error: null,
      },
    }
  }

  if (action.type.startsWith(FETCH_FAILURE)) {
    const inner = camelCase(action.type.replace(FETCH_FAILURE, ''))

    return {
      ...state,
      [inner]: {
        ...state[inner as keyof Acc],
        loading: false,
        error: action.payload,
      },
    }
  }

  return state
}

export default apiReducer
