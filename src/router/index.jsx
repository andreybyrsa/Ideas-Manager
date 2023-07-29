import { createBrowserRouter } from 'react-router-dom'

import IndexPage from '@Pages/IndexPage'
import ProfilePage from '@Pages/ProfilePage'
import AuthPage from '@Pages/AuthPage'
import ErrorPage from '@Pages/ErrorPage'

import AuthMiddleware from '@Middlewares/AuthMiddleware'

import ideasService from '@Services/IdeasService'
import SettingPage from '@Pages/SettingPage'

const router = createBrowserRouter([
  {
    element: <AuthMiddleware />,
    children: [
      {
        path: '/ideas',
        element: <IndexPage />,
        errorElement: <ErrorPage />,
        loader: ideasService.getIdeas,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/settings',
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
