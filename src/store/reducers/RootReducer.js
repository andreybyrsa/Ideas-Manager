import { combineReducers } from '@reduxjs/toolkit'
import UserReducer from './user'
import MessagesReducer from './messages'

const RootReducer = combineReducers({ UserReducer, MessagesReducer })

export default RootReducer
