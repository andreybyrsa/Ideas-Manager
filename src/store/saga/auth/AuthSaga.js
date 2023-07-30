import { select, call, put, takeLeading } from 'redux-saga/effects'

import { setGlobalUser, setLoginUser } from '@Store/reducers/user/UserReducer'
import { setError } from '@Store/reducers/messages/MessagesReducer'

import AuthService from '@Services/AuthService'

function* authWorker() {
  const loginUser = yield select((state) => state.UserReducer.loginUser)

  const { user, roles, error } = yield call(AuthService.authLogin, loginUser)

  const currentUser = { ...user, roles }

  if (currentUser.token) {
    yield put(setGlobalUser(currentUser))
  }
  if (error) {
    yield put(setError(error))
  }
}

function* authWatcher() {
  yield takeLeading(setLoginUser, authWorker)
}

export default authWatcher
