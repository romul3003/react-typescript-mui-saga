import {
  takeEvery, put, call, fork, join, spawn,
} from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { setBreeds, setCategories } from '../actions'

const requestHeaders: HeadersInit = new Headers()
requestHeaders.set('x-api-key', process.env.API_KEY as string)

async function catApiGet(pattern: string) {
  const request = await fetch(`https://api.thecatapi.com/v1/${pattern}`, {
    headers: requestHeaders,
  })

  const data = await request.json()

  return data
}

export function* loadBreeds(): SagaIterator {
  const breeds = yield call(catApiGet, 'breeds')

  yield put(setBreeds(breeds))

  return breeds
}

export function* loadCategories(): SagaIterator {
  const categories = yield call(catApiGet, 'categories')

  yield put(setCategories(categories))
}

export function* workerSaga(): SagaIterator {
  console.log('run parallel tasks')
  const task = yield fork(loadBreeds)
  yield spawn(loadCategories)

  const breeds = yield join(task)
  console.log('finish parallel tasks', breeds)
}

export function* watchLoadDataSaga(): SagaIterator {
  yield takeEvery('LOAD_DATA', workerSaga)
}

export default function* rootSaga(): Generator {
  yield fork(watchLoadDataSaga)
}
