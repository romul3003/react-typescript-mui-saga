import { SagaIterator } from '@redux-saga/core'
import { put, takeEvery } from 'redux-saga/effects'
import { apiActions } from './actions'
import api from './api'
import { FetchApiAction, FETCH_START } from './types'

export function* onApiLoad({ payload, type }): SagaIterator {
  const actionType = type.replace(FETCH_START, '').toLowerCase()

  try {
    const response = yield api.fetch(actionType, payload)

    yield put(apiActions.fetchSuccess(actionType, response))
  } catch (error) {
    yield put(apiActions.fetchFailure(actionType, error as Error))
  }
}

export function* watchApiLoad(): SagaIterator {
  yield takeEvery((action: FetchApiAction) => action.type.startsWith(FETCH_START), onApiLoad)
}
