import { createRoot } from 'react-dom/client'
import './index.scss'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'
//通过中间件关联store和react
import { Provider } from 'react-redux'
import store from './store'
import 'normalize.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
