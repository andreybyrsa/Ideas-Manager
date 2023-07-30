import { createBrowserRouter } from 'react-router-dom'

import IndexPage from '@Pages/IndexPage'
import CreateIdeaPage from '@Pages/CreateIdeaPage'
import AuthPage from '@Pages/AuthPage'
import ErrorPage from '@Pages/ErrorPage'
import SettingPage from '@Pages/SettingPage'

import AuthMiddleware from '@Middlewares/AuthMiddleware'
import EditIdeaPage from '@Pages/EditIdeaPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthMiddleware />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/ideas',
        element: <IndexPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/add-idea',
        element: <CreateIdeaPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/edit-idea/:ideaId',
        element: <EditIdeaPage />,
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
