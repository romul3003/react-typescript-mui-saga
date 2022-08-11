import { put, takeEvery } from 'redux-saga/effects'
import { API_ACTIONS, apiActions } from './actions'
import api from './api'

export function* onApiLoad({ payload, type }) {
  const actionType = type.replace(API_ACTIONS.FETCH_START, '').toLowerCase()

  try {
    const response = yield api.fetch(actionType, payload)

    yield put(apiActions.fetchSuccess(actionType, response))
  } catch (error) {
    yield put(apiActions.fetchFailure(actionType, error))
  }
}

export function* watchApiLoad() {
  yield takeEvery(action => action.type.startsWith(API_ACTIONS.FETCH_START), onApiLoad)
}
