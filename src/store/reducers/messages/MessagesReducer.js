import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },

    removeMessages: (state) => {
      state.success = null
      state.error = null
    },
  },
})

export const { setSuccess, setError, removeMessages } = messagesSlice.actions
export default messagesSlice.reducer
