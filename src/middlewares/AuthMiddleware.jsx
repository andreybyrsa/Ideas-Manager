import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

import useAuth from '@Hooks/useAuth'

import { setGlobalUser } from '@Store/reducers/user/UserReducer'
import { removeMessages } from '@Store/reducers/messages/MessagesReducer'

function AuthMiddleware() {
  const dispatch = useDispatch()

  const [currentUser, localStorageUser] = useAuth()

  useEffect(() => {
    if (!currentUser && localStorageUser) {
      dispatch(setGlobalUser(localStorageUser))
    }

    dispatch(removeMessages())
  }, [currentUser, localStorageUser, dispatch])

  if (!currentUser && !localStorageUser) {
    return <Navigate to="/auth" />
  }

  return <Outlet />
}

export default AuthMiddleware
