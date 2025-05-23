import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './Component/Home/Home'
import AboutMe from './Component/Home/AboutMe'
import ProjectDetails from './Component/Home/ProjectDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/aboutme',
        element: <AboutMe></AboutMe>
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>
      }

    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
