import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGlobalUser: (state, action) => {
      state.globalUser = action.payload
    },
    setRole: (state, action) => {
      delete state.globalUser.roles
      state.globalUser.role = action.payload
    },
    setLoginUser: (state, action) => {
      state.loginUser = action.payload
    },

    removeUser: (state) => {
      state.globalUser = null
    },
  },
})

export const { setGlobalUser, setLoginUser, setRole, removeUser } =
  UserSlice.actions
export default UserSlice.reducer
