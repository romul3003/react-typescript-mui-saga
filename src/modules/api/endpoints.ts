export const JOBS = 'jobs'
export const EMPLOYEES = 'employees'

export type Endpoint = {
  uri: string,
  method: string,
}

export type ApiKeys = typeof JOBS | typeof EMPLOYEES

export type Endpoints = Record<ApiKeys, Endpoint>

const ENDPOINTS: Endpoints = {
  [JOBS]: {
    uri: '/jobs',
    method: 'GET',
  },
  [EMPLOYEES]: {
    uri: '/employees',
    method: 'GET',
  },
}

export default ENDPOINTS
