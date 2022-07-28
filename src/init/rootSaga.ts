import {
  spawn, call, all, take, fork, cancel, actionChannel,
} from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import loadBasicData from '../redux/initialSagas'
import pageLoaderSaga from '../redux/blog/sagas'

export function* fetchPlanets(): SagaIterator {
  console.log('LOAD_SOME_DATA starts')

  const response = yield call(fetch, 'https://swapi.dev/api/planets')
  const data = yield call([response, response.json])

  console.log('LOAD_SOME_DATA completed', data)
}

// export function* loadOnAction1(): SagaIterator {
//   // yield takeLatest('LOAD_SOME_DATA', fetchPlanets)
//   let task
//   let abortController = new AbortController()

//   while (true) {
//     yield take('LOAD_SOME_DATA')

//     if (task) {
//       abortController.abort()
//       yield cancel(task)
//       abortController = new AbortController()
//     }

//     task = yield fork(fetchPlanets, abortController.signal) // needs to give a signal parametr to fetchPlanets
//   }
// }

export function* loadOnAction2(): SagaIterator {
  const channel = yield actionChannel('LOAD_SOME_DATA')

  while (true) {
    yield take(channel)

    yield call(fetchPlanets)
  }
}

export default function* rootSaga(): Generator {
  const sagas = [loadBasicData, pageLoaderSaga, loadOnAction2]

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

  yield all(retrySagas as SagaIterator[])
}
