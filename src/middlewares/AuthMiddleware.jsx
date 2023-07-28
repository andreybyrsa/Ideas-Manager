import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

import useAuth from '@Hooks/useAuth'

import { setGlobalUser, setRole } from '@Store/reducers/user/UserReducer'
import { removeMessages } from '@Store/reducers/messages/MessagesReducer'
import RoleModal from '@Components/Modal/RoleModal'

function AuthMiddleware() {
  const dispatch = useDispatch()

  const [currentUser, localStorageUser] = useAuth()
  const [isOpenModalRole, setIsOpenModalRole] = useState(true)

  useEffect(() => {
    if (!currentUser && localStorageUser) {
      dispatch(setGlobalUser(localStorageUser))
    }

    if (currentUser && currentUser.roles?.length === 1) {
      dispatch(setRole(currentUser.roles[0]))
      // console.log(currentUser.roles)
    }

    dispatch(removeMessages())
  }, [currentUser, localStorageUser, dispatch])

  if (!currentUser && !localStorageUser) {
    return <Navigate to="/auth" />
  }

  if (currentUser && currentUser.roles?.length > 1) {
    return (
      <>
        <RoleModal
          isOpen={isOpenModalRole}
          setIsOpen={setIsOpenModalRole}
        />
        <Outlet />
      </>
    )
  }

  return <Outlet />
}

export default AuthMiddleware
