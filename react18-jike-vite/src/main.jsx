import { createRoot } from 'react-dom/client'
import './index.scss'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
