import { select, call, put, takeLatest } from 'redux-saga/effects'

import {
  setLoginUser,
  setRegisterUser,
  setGlobalUser,
} from '@Store/reducers/user/UserReducer'
import { setSuccess, setError } from '@Store/reducers/messages/MessagesReducer'

import AuthService from '@Services/AuthService'

function* authWorker(apiService) {
  const currentUser = yield select((state) =>
    apiService.name === 'authLogin'
      ? state.UserReducer.loginUser
      : state.UserReducer.registerUser,
  )

  const response = yield call(apiService, currentUser)

  const { user, roles, success, error } = response
  const responseUser = {...user, roles}

  if (user) {
    yield put(setGlobalUser(responseUser))

    yield localStorage.setItem('user', JSON.stringify(responseUser))
  } else if (success) {
    yield put(setSuccess(success))
  } else if (error) {
    yield put(setError(error))
  } else {
    yield put(setError('Ошибка авторизации'))
  }
}

function* authWatcher() {
  yield takeLatest(setLoginUser, () => authWorker(AuthService.authLogin))
  yield takeLatest(setRegisterUser, () => authWorker(AuthService.authRegister))
}

function* rootSaga() {
  yield authWatcher()
}

export default rootSaga
