import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    setIdeas: (state, action) => {
      state.ideas = action.payload
    },
  },
})

export const { setIdeas } = ideasSlice.actions
export default ideasSlice.reducer
