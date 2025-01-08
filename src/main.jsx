import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner.jsx'
import AddCoffee from './components/AddCoffee.jsx'



const router = createBrowserRouter([{
  path:'/',
  element:<App></App>,
children:[
  {
    path:"/",
    element:<Banner></Banner>
  },
  {
    path:"/addCoffee",
    element:<AddCoffee></AddCoffee>
  },
]
},

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
