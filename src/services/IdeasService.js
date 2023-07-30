import axios from 'axios'

import getMockIdeas from '@Utils/getMockIdeas'

const BASE_URL = process.env.REACT_APP_API_URL

const mockIdeas = getMockIdeas()

const getUserIdeas = async (userToken) => {
  const data = await axios
    .get(`${BASE_URL}ideas_manager/get_user_ideas/${userToken}/`)
    .then((response) => response.data)
    .catch(() => mockIdeas)

  return data
}

const postIdea = async (idea) => {
  const data = await axios
    .post(`${BASE_URL}ideas_manager/`, idea)
    .then((response) => response.data)
    .catch(() => {
      throw new Error('Не удалось опубликовать идею.')
    })

  return data
}

const updateIdea = async ({ ideaId, idea }) => {
  const data = await axios
    .put(`${BASE_URL}ideas_manager/${ideaId}/`, idea)
    .then((response) => response.data)
    .catch(() => {
      throw new Error('Не удалось обновить идею.')
    })

  return data
}

const deleteIdea = async (ideaId) => {
  const data = await axios
    .delete(`${BASE_URL}ideas_manager/${ideaId}/`)
    .then((response) => response.status === 204)
    .catch(() => {
      throw new Error('Не удалось удалить идею.')
    })

  return data
}
const IdeasService = {
  getUserIdeas,
  postIdea,
  updateIdea,
  deleteIdea,
}

export default IdeasService
