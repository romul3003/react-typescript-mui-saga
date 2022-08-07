import { LOCATION_CHANGE } from 'redux-first-history'
import { SagaIterator } from '@redux-saga/core'
import {
  apply, call, fork, put, select, take, takeEvery,
} from 'redux-saga/effects'
import { matchPath } from 'react-router-dom'
import {
  getRouteConfig,
  CHARACTERS_ROUTE,
  CHARACTERS_DETAILS_ROUTE,
} from '../../routes/index'
import { selectCharacter } from './selectors'
import { CharactersState } from './reducer'
import {
  Characters,
  LoadCharactersAction,
  LOAD_CHARACTERS,
} from './types'
import {
  loadCharacters,
  loadCharactersSuccess,
} from './actions'
import {
  loadCharacterDetails,
  loadCharacterDetailsSuccess,
  loadCharacterDetailsError,
} from '../characterDetails/actions'
import {
  CharacterDetails,
  LoadCharacterDetailsAction,
  LOAD_CHARACTER_DETAILS,
} from '../characterDetails/types'

export function* loadCharactersDetails({ payload }: LoadCharacterDetailsAction): SagaIterator {
  const { id } = payload

  try {
    const request = yield call(
      fetch,
    `https://swapi.dev/api/people/${id}`,
    )
    const data: CharacterDetails = yield apply(request, request.json, [])

    yield put(loadCharacterDetailsSuccess(data))
  } catch (error) {
    loadCharacterDetailsError(error)
  }
}

export function* loadCharactersList({ payload }: LoadCharactersAction): SagaIterator {
  const { page, search } = payload
  const request = yield call(
    fetch,
    `https://swapi.dev/api/people?page=${page}&search=${search}`,
  )
  const data: Characters = yield apply(request, request.json, [])

  yield put(loadCharactersSuccess(data))
}

export function* routeChangeSaga(): SagaIterator {
  while (true) {
    const action = yield take(LOCATION_CHANGE)
    const { pathname } = action.payload.location

    if (matchPath(getRouteConfig(CHARACTERS_ROUTE) as string, pathname)) {
      const state: CharactersState = yield select(selectCharacter)
      const { page, search } = state

      yield put(loadCharacters(page, search))
    }

    const detailsPage = matchPath(getRouteConfig(CHARACTERS_DETAILS_ROUTE) as string, pathname)

    if (detailsPage) {
      const { id } = detailsPage.params

      if (id) {
        yield put(loadCharacterDetails(id))
      }
    }
  }
}

export default function* charactersSaga(): SagaIterator {
  yield fork(routeChangeSaga)
  yield takeEvery(LOAD_CHARACTERS, loadCharactersList)
  yield takeEvery(LOAD_CHARACTER_DETAILS, loadCharactersDetails)
}
