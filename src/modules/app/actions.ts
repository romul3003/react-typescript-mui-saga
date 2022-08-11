export const APP_ACTIONS = {
  APP_FILTER_EMPLOYEES: 'APP_FILTER_EMPLOYEES',
}

export const filterEmployees = (filterBy: string) => ({
  type: APP_ACTIONS.APP_FILTER_EMPLOYEES,
  payload: filterBy,
})
