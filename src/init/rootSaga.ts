import { all, spawn } from 'redux-saga/effects'
import charactersSaga from '../redux/characters/saga'

export default function* rootSaga(): Generator {
  const sagas = [charactersSaga]

  yield all(sagas.map(s => spawn(s)))
}
