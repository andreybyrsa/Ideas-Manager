import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGlobalUser: (state, action) => {
      state.globalUser = action.payload
    },

    setLoginUser: (state, action) => {
      state.loginUser = action.payload
    },
    setRegisterUser: (state, action) => {
      state.registerUser = action.payload
    },

    removeUser: (state) => {
      state.globalUser = null
    },
  },
})

export const { setGlobalUser, setLoginUser, setRegisterUser, removeUser } =
  UserSlice.actions
export default UserSlice.reducer
