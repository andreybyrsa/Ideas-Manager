import { useSelector } from 'react-redux'

function useAuth() {
  const currentUser = useSelector((state) => state.UserReducer.globalUser)
  const localStorageUser = JSON.parse(localStorage.getItem('user'))

  if (currentUser?.pk || localStorageUser) {
    return [currentUser, localStorageUser]
  }
  return [null, null]
}

export default useAuth
