import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import store from './store'
import router from './router'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
