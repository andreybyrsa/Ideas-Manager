import { combineReducers } from '@reduxjs/toolkit'

import UserReducer from './user'
import MessagesReducer from './messages'
import IdeasReducer from './ideas'

const RootReducer = combineReducers({
  UserReducer,
  MessagesReducer,
  IdeasReducer,
})

export default RootReducer
