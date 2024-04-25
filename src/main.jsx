import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Rootlayout from './RootLayout/Rootlayout.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx'
import AuthProvider from './Component/AauthProvider/AuthProvider.jsx'
import AllArt from './Component/AllArtAndCraft/AllArt.jsx'
import AddCraft from './Component/AddCraftItem/AddCraft.jsx'
import MyArt from './Component/MyArtAndCraft/MyArt.jsx'
import Register from './Component/Register/Register.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout></Rootlayout>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/all',
        element: <AllArt></AllArt>
      },
      {
        path: '/add',
        element: <AddCraft></AddCraft>
      },
      {
        path: '/my',
        element: <MyArt></MyArt>
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
