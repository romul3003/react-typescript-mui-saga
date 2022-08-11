import { APP_ACTIONS } from './actions'

const getInitialState = () => ({
  selectedJob: null,
})

const INITIAL_STATE = getInitialState()

const state2actionMapping = {
  [APP_ACTIONS.APP_FILTER_EMPLOYEES]: (state, action) => ({
    ...state,
    selectedJob: action.payload,
  }),
}

const appReducer = (state = INITIAL_STATE, action) => (
  state2actionMapping[action.type]
    ? state2actionMapping[action.type](state, action)
    : state
)

export default appReducer
