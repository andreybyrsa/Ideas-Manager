import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

const ideas = [
  {
    id: 0,
    name: 'Беспроводные зарядки на партах',
    time_create: Date.now().toString(),
    time_update: Date.now().toString(),
    status: 'На согласовании',
    rating: '3.5',
    risk: '0.8',
  },
  {
    id: 1,
    name: 'Кондиционеры в кабинетах',
    time_create: Date.now().toString(),
    time_update: Date.now().toString(),
    status: 'На согласовании',
    rating: '3.5',
    risk: '0.8',
  },
  {
    id: 2,
    name: 'Свежая булочная на 5ом этаже ВШЦТ',
    time_create: Date.now().toString(),
    time_update: Date.now().toString(),
    status: 'На согласовании',
    rating: '3.5',
    risk: '0.8',
  },
]

const ideasServise = async () => {
  const data = await axios
    .get(`${BASE_URL}idea_manager/`)
    .then((response) => response.data)
    .catch(() => ideas)
  return data
}

export default ideasServise
