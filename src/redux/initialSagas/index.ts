import { SagaIterator } from '@redux-saga/core'
import {
  delay, call, all, fork,
} from 'redux-saga/effects'

function* auth(): SagaIterator {
  // eslint-disable-next-line no-magic-numbers
  yield delay(2000)

  console.log('auth, ok')

  return true
}

function* loadUsers(): SagaIterator {
  const request = yield call(fetch, 'https://swapi.dev/api/people')
  const data = yield call([request, request.json])

  console.log('data', data)
}

export default function* loadBasicData(): SagaIterator {
  yield all([
    fork(auth),
    fork(loadUsers),
  ])
}
