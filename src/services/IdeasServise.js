import axios from 'axios'

const BASE_URL = process.env.REACT_APP_AUTH_API_URL

const ideasServise = async () => {
  const response = axios.post(`${BASE_URL}`)
  return await response.json()
}

export default ideasServise
