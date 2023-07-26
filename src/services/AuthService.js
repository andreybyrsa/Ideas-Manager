import axios from 'axios'

const BASE_URL = process.env.REACT_APP_AUTH_API_URL || 'http://localhost:3000/'

const authLogin = async (user) =>
  axios
    .post(`${BASE_URL}login/`, {
      ...user,
    })
    .then((response) => response.data)

const authRegister = async (user) => {
  const { username, firstName, lastName, password, role } = user

  return axios
    .post(`${BASE_URL}register/`, {
      username,
      first_name: firstName,
      last_name: lastName,
      password,
      role,
    })
    .then((response) => response.data)
}

const AuthService = {
  authLogin,
  authRegister,
}

export default AuthService
