import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from '@redux-saga/core'
import RootSaga from './saga/RootSaga'

import RootReducer from './reducers/RootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(RootSaga)

export default store
