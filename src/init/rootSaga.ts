import { all, spawn } from 'redux-saga/effects'
import { watchApiLoad } from '../modules/api/saga'
import charactersSaga from '../redux/characters/saga'

export default function* rootSaga(): Generator {
  const sagas = [charactersSaga, watchApiLoad]

  yield all(sagas.map(s => spawn(s)))
}
