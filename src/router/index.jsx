import { createBrowserRouter } from 'react-router-dom'

import IndexPage from '@Pages/IndexPage'
import ProfilePage from '@Pages/ProfilePage'
import AuthPage from '@Pages/AuthPage'
import ErrorPage from '@Pages/ErrorPage'

import AuthMiddleware from '@Middlewares/AuthMiddleware'

import ideasServise from '@Services/IdeasServise'

const router = createBrowserRouter([
  {
    element: <AuthMiddleware />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
        errorElement: <ErrorPage />,
        loader: ideasServise,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
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
