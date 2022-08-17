import { Endpoints } from './endpoints'
import {
  Data,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FetchApiAction,
  FetchApiSuccessAction,
  FetchApiFailureAction,
} from './types'

export const API_ACTIONS = {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
}

export const apiActions = {
  fetch: (endpoint: keyof Endpoints): FetchApiAction => ({
    type: `${FETCH_START}${endpoint.toUpperCase() as Uppercase<keyof Endpoints>}`,
  }),
  fetchSuccess: (endpoint: keyof Endpoints, payload: Data): FetchApiSuccessAction => ({
    type: `${FETCH_SUCCESS}${endpoint.toUpperCase() as Uppercase<keyof Endpoints>}`,
    payload,
  }),
  fetchFailure: (endpoint: keyof Endpoints, payload: Error): FetchApiFailureAction => ({
    type: `${FETCH_FAILURE}${endpoint.toUpperCase() as Uppercase<keyof Endpoints>}`,
    payload: payload.message,
  }),
}
