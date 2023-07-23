import { createBrowserRouter } from 'react-router-dom'

import IndexPage from '@Pages/IndexPage'

const router = createBrowserRouter([
  {
    path: '',
    element: <IndexPage />,
  },
])

export default router
