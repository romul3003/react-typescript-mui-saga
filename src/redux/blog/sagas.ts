import { SagaIterator } from '@redux-saga/core'
import {
  apply, call, take, fork, put,
} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'redux-first-history'
// import { LOAD_BLOG_DATA } from './types'
import { fetchVehiclesAsync } from './actions'

function* loadBlogData(): SagaIterator {
  const request = yield call(fetch, 'https://swapi.dev/api/vehicles')
  const data = yield apply(request, request.json, [])

  console.log('blog data', data)

  yield put(fetchVehiclesAsync(data))
}

export default function* pageLoaderSaga(): SagaIterator {
  while (true) {
    const action = yield take(LOCATION_CHANGE)

    if (action.payload.location.pathname.endsWith('blog')) {
      yield fork(loadBlogData)
    }

    console.log('>>', action)
  }
  // yield takeEvery(LOAD_BLOG_DATA, loadBlogData)
}
