import { takeLeading, call, put } from 'redux-saga/effects'

import {
  postIdea,
  deleteIdea,
  updateIdea,
} from '@Store/reducers/ideas/IdeasReducer'
import { setError, setSuccess } from '@Store/reducers/messages/MessagesReducer'

import IdeasService from '@Services/IdeasService'

function* ideaWorker(service, action) {
  const data = yield call(service, action.payload)

  if (data) {
    yield put(setSuccess('Успешно'))
  } else {
    yield put(setError('Ошибка заполнения формы'))
  }
}

function* ideasWatcher() {
  yield takeLeading(postIdea, (action) =>
    ideaWorker(IdeasService.postIdea, action),
  )
  yield takeLeading(updateIdea, (action) =>
    ideaWorker(IdeasService.updateIdea, action),
  )
  yield takeLeading(deleteIdea, (action) =>
    ideaWorker(IdeasService.deleteIdea, action),
  )
}

export default ideasWatcher
