import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@Components/Button'
import LeftSideBar from '@Components/LeftSideBar'

import PageLayout from '@Layouts/PageLayout'

import useAuth from '@Hooks/useAuth'

import { removeUser } from '@Store/reducers/user/UserReducer'

import './ProfilePage.scss'

function ProfilePage() {
  const dispatch = useDispatch()

  const [currentUser] = useAuth()

  const handleLogout = useCallback(() => {
    dispatch(removeUser())

    localStorage.removeItem('user')
  }, [dispatch])

  return (
    <PageLayout
      contentClassName="profile-page__content"
      leftSidebar={<LeftSideBar />}
    >
      <pre>{JSON.stringify(currentUser, null, 4)}</pre>
      <Button
        className="btn-primary"
        onClick={handleLogout}
      >
        Выйти из аккаунта
      </Button>
    </PageLayout>
  )
}

export default ProfilePage
