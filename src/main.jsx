import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import Apps from './Pages/Apps.jsx'
import Installation from './Pages/Installation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/apps',
    Component: Apps
  },
  {
    path: '/installation',
    Component: Installation
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
