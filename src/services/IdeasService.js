import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

const defaultIdeas = [
  {
    id: 0,
    name: 'Беспроводные зарядки на партах в каждом кабинете и этаже',
    time_create: Date.now(),
    time_update: Date.now(),
    status: 'На согласовании',
    rating: '4.0',
    risk: '0.1',
  },
  {
    id: 1,
    name: 'Кондиционеры в кабинетах',
    time_create: Date.now(),
    time_update: Date.now(),
    status: 'На согласовании',
    rating: '3.5',
    risk: '0.8',
  },
  {
    id: 2,
    name: 'Свежая булочная на 5ом этаже ВШЦТ',
    time_create: Date.now(),
    time_update: Date.now(),
    status: 'Утверждено',
    rating: '4.5',
    risk: '0.2',
  },
]

const getIdeas = async () => {
  const data = await axios
    .get(`${BASE_URL}idea_manager/`)
    .then((response) => response.data)
    .catch(() => defaultIdeas)
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
