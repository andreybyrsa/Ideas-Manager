import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'

import ideasService from '@Services/IdeasService'

import getMockIdeas from '@Utils/getMockIdeas'

import initialState from './initialState'

const fetchIdeas = createAsyncThunk('ideas/fetch', async (userToken) => {
  const ideas = await ideasService.getUserIdeas(userToken)
  return ideas
})

const postIdea = createAction('idea/post', (idea) => ({ payload: idea }))
const updateIdea = createAction('idea/put', ({ ideaId, idea }) => ({
  payload: { ideaId, idea },
}))
const deleteIdea = createAction('idea/delete', (ideaId) => ({
  payload: ideaId,
}))

const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    removeIdea: (state, action) => {
      state.ideas.items = state.ideas.items.filter(
        (item) => item.id !== action.payload,
      )
    },
  },
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

export const { removeIdea } = ideasSlice.actions
export { fetchIdeas, postIdea, updateIdea, deleteIdea }

export default ideasSlice.reducer
