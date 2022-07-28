export type Vehicle = {
  name: string;
}

export type Vehicles = {
  results: Vehicle[];
}

// Async
export const LOAD_BLOG_DATA = 'LOAD_BLOG_DATA'
export type VehiclesFetchAsyncAction = {
  type: typeof LOAD_BLOG_DATA
  payload: Vehicles
}

export type VehiclesActionTypes =
  | VehiclesFetchAsyncAction
