import {
  fork, spawn, call, all,
} from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

export function* saga1(): SagaIterator {
  console.log('Saga 1')
}

export function* saga2(): SagaIterator {
  console.log('Saga 1')
}

export function* saga3(): SagaIterator {
  console.log('Saga 1')
}

export default function* rootSaga(): Generator {
  // yield spawn(saga1)
  // yield spawn(saga2)
  // yield spawn(saga3)

  const sagas = [saga1, saga2, saga3]

  // eslint-disable-next-line func-names
  const retrySagas = yield sagas.map(saga => spawn(function* () {
    while (true) {
      try {
        yield call(saga)
        break
      } catch (e) {
        console.log(e)
      }
    }
  }))

  yield all(retrySagas)
}
