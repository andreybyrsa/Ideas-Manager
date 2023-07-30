import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

import RoleModal from '@Components/Modal/RoleModal'

import useAuth from '@Hooks/useAuth'

import { setGlobalUser, setRole } from '@Store/reducers/user/UserReducer'
import { removeMessages } from '@Store/reducers/messages/MessagesReducer'

function AuthMiddleware() {
  const dispatch = useDispatch()

  const [currentUser, localStorageUser] = useAuth()
  const [isOpenRoleModal, setIsOpenRoleModal] = useState(true)

  const errorMessage = useSelector((state) => state.MessagesReducer.error)
  const successMessage = useSelector((state) => state.MessagesReducer.success)

  useEffect(() => {
    if (!currentUser && localStorageUser) {
      dispatch(setGlobalUser(localStorageUser))
    }

    if (currentUser?.roles?.length === 1) {
      const currentRole = currentUser.roles[0]
      dispatch(setRole(currentRole))
    }

    if (currentUser?.role) {
      localStorage.setItem('user', JSON.stringify(currentUser))
    }
  }, [currentUser, localStorageUser, dispatch])

  useEffect(() => {
    if (errorMessage || successMessage) {
      dispatch(removeMessages())
    }
  }, [dispatch, successMessage, errorMessage])

  if (!currentUser && !localStorageUser) {
    return <Navigate to="/auth" />
  }

  if (currentUser?.roles?.length > 1) {
    return (
      <>
        <RoleModal
          isOpen={isOpenRoleModal}
          setIsOpen={setIsOpenRoleModal}
          isLayoutClose={false}
        />
        <Outlet />
      </>
    )
  }

  if (currentUser?.role) {
    return <Outlet context={currentUser} />
  }
}

export default AuthMiddleware
