import { Endpoints } from './endpoints'

export type Job = {
  id: number,
  jobId: string,
  title: string,
}

export type Employee = {
  id: string,
  createdAt: string,
  avatar: string,
  name: string,
  email: string,
  companyName: string,
  address: string,
  phone: string,
  job: string,
  about: string,
}

export type Data = Job[] | Employee[]

export const FETCH_START = 'FETCH_START_'
export const FETCH_SUCCESS = 'FETCH_SUCCESS_'
export const FETCH_FAILURE = 'FETCH_FAILURE_'

export type FetchApiAction = {
  type: `${typeof FETCH_START}${Uppercase<keyof Endpoints>}`
}

export type FetchApiSuccessAction = {
  type: `${typeof FETCH_SUCCESS}${Uppercase<keyof Endpoints>}`,
  payload: Data,
}

export type FetchApiFailureAction = {
  type: `${typeof FETCH_FAILURE}${Uppercase<keyof Endpoints>}`,
  payload: string,
}

export type FetchApiActionTypes =
  | FetchApiAction
  | FetchApiSuccessAction
  | FetchApiFailureAction
