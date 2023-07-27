// import axios from 'axios'

// const BASE_URL = process.env.REACT_APP_API_URL

const defaultIdeas = [
  {
    id: 0,
    name: 'Беспроводные зарядки на партах l kjko kok ok kljkj lkkj lk ;lk kk ;lk;l k;lk l;k ;lk;',
    time_create: Date.now(),
    time_update: Date.now(),
    status: 'На согласовании',
    rating: '3.5',
    risk: '0.8',
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
    status: 'На согласовании',
    rating: '4.5',
    risk: '0.4',
  },
]

const getIdeas = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve(1), 2000)
  }).then(() => defaultIdeas)

  return data
}

const IdeasService = {
  getIdeas,
}

export default IdeasService
