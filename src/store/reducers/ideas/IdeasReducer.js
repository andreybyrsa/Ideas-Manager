import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import ideasService from '@Services/IdeasService'

import getMockIdeas from '@Utils/getMockIdeas'

import initialState from './initialState'

const fetchIdeas = createAsyncThunk('ideas/fetch', async () => {
  const ideas = await ideasService.getIdeas()
  return ideas
})

const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdeas.pending, (state) => {
        state.ideas.status = 'loading'
      })
      .addCase(fetchIdeas.fulfilled, (state, action) => {
        state.ideas.status = 'loaded'
        state.ideas.items = action.payload
      })
      .addCase(fetchIdeas.rejected, (state) => {
        state.ideas.status = 'error'
        state.ideas.items = getMockIdeas()
      })
  },
})

export const { setIdeas } = ideasSlice.actions
export { fetchIdeas }

export default ideasSlice.reducer
