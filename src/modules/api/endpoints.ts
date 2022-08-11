export const JOBS = 'jobs'
export const EMPLOYEES = 'employees'

// eslint-disable-next-line no-shadow
export enum END_POINTS {
  jobs = 'jobs',
  employees = 'employees'
}

export type Endpoint = {
  uri: string,
  method: string,
}

export type Endpoints = {
  [END_POINTS.jobs]: Endpoint,
  [END_POINTS.employees]: Endpoint,
}

const ENDPOINTS: Endpoints = {
  [END_POINTS.jobs]: {
    uri: '/jobs',
    method: 'GET',
  },
  [END_POINTS.employees]: {
    uri: '/employees',
    method: 'GET',
  },
}

export default ENDPOINTS
