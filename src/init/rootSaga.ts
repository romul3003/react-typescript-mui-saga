import { all, spawn } from 'redux-saga/effects'
import { watchApiLoad } from '../modules/api/saga'

export default function* rootSaga(): Generator {
  const sagas = [watchApiLoad]

  yield all(sagas.map(s => spawn(s)))
}
