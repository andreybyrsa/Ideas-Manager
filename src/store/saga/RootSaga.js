import { all } from 'redux-saga/effects'

import authWatcher from './auth/AuthSaga'
import ideasWatcher from './ideas/IdeasSaga'

function* RootSaga() {
  yield all([
    authWatcher(),
    ideasWatcher()
  ])
}

export default RootSaga
