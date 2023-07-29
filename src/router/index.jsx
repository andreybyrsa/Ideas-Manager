import { createBrowserRouter } from 'react-router-dom'

import IndexPage from '@Pages/IndexPage'
import ProfilePage from '@Pages/ProfilePage'
import AuthPage from '@Pages/AuthPage'
import ErrorPage from '@Pages/ErrorPage'
import SettingPage from '@Pages/SettingPage'

import AuthMiddleware from '@Middlewares/AuthMiddleware'

const router = createBrowserRouter([
  {
    element: <AuthMiddleware />,
    children: [
      {
        path: '/ideas',
        element: <IndexPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/setting',
        element: <SettingPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
])

export default router
