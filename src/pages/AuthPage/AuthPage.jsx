import { Navigate } from 'react-router-dom'

import CreateUserForm from '@Components/CreateUserForm'

import PageLayout from '@Layouts/PageLayout'

import useAuth from '@Hooks/useAuth'

import './AuthPage.scss'

function AuthPage() {
  const [currentUser, localStorageUser] = useAuth()

  if (currentUser || localStorageUser) {
    return <Navigate to="/" />
  }

  return (
    <PageLayout className="auth-page">
      <CreateUserForm isLogin />
    </PageLayout>
  )
}

export default AuthPage
