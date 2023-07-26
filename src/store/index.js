import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './saga'

import RootReducer from './reducers/RootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
