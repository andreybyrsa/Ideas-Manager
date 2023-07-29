import axios from 'axios'

import getMockIdeas from '@Utils/getMockIdeas'

const BASE_URL = process.env.REACT_APP_API_URL

const mockIdeas = getMockIdeas()

const getIdeas = async () => {
  const data = await axios
    .get(`${BASE_URL}idea_manager/`)
    .then((response) => response.data)
    .catch(() => mockIdeas)
  return data
}

const postIdea = (idea) =>
  axios
    .post(`${BASE_URL}idea_manager/`, idea)
    .then((response) => response.data)
    .catch(() => {
      throw new Error('Не удалось опубликовать идею.')
    })

const updateIdea = (ideaId, updatedId) =>
  axios
    .put(`${BASE_URL}idea_manager/${ideaId}/`, updatedId)
    .then((response) => response.data)
    .catch(() => {
      throw new Error('Не удалось обновить идею.')
    })

const deleteIdea = (ideaId) =>
  axios
    .delete(`${BASE_URL}idea_manager/${ideaId}/`)
    .then((response) => response.status === 204)
    .catch(() => {
      throw new Error('Не удалось удалить идею.')
    })

const ideasService = {
  getIdeas,
  postIdea,
  updateIdea,
  deleteIdea,
}

export default ideasService
