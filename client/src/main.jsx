import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/about/About.jsx'
import AddUser from './components/user/AddUser.jsx'
import {Toaster} from 'react-hot-toast'
import UpdateUser from './components/user/UpdateUser.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/adduser',
    element: <AddUser/>
  },
  {
    path: '/updateuser/:id',
    element: <UpdateUser/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={route}></RouterProvider>
   <Toaster/>
  </StrictMode>,
)
