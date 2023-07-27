import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useOutletContext } from 'react-router-dom'

import CreateUserForm from '@Components/CreateUserForm'

import { Button } from '@Components/Button'

import LeftSideBar from '@Components/LeftSideBar'

import PageLayout from '@Layouts/PageLayout'

import useAuth from '@Hooks/useAuth'

import { removeUser } from '@Store/reducers/user/UserReducer'

import './ProfilePage.scss'

function ProfilePage() {
  const header = useOutletContext()
  const dispatch = useDispatch()

  const [currentUser] = useAuth()

  const handleLogout = useCallback(() => {
    dispatch(removeUser())

    localStorage.removeItem('user')
  }, [dispatch])

  return (
    <PageLayout leftSidebar={<LeftSideBar />}>
      <div className="profile-page">
        {currentUser?.role === 'admin' && <CreateUserForm isLogin={false} />}
        <pre>{JSON.stringify(currentUser, null, 4)}</pre>
        <Button
          className="profile-page__button"
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </Button>
        {header}
      </div>
    </PageLayout>
  )
}

export default ProfilePage
