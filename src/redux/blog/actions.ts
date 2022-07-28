import { VehiclesActionTypes, LOAD_BLOG_DATA, Vehicles } from './types'
// Async
export const fetchVehiclesAsync = (payload: Vehicles): VehiclesActionTypes => ({
  type: LOAD_BLOG_DATA,
  payload,
})
