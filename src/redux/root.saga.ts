// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([].map(fork))
}
