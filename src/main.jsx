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
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx'
import ViewDetilas from './Component/ViewDetilas/ViewDetilas.jsx'
import UpdatePage from './Component/UpdatePage/UpdatePage.jsx'
// import ViewAllDetails from './Component/ViewAllDetails/ViewAllDetails.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout></Rootlayout>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/all')
      },
      {
        path: '/all',
        element: <AllArt></AllArt>,
        loader: ()=> fetch('http://localhost:5000/all')
      },
      {
        path: '/add',
        element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>,
        
      },
      {
        path: '/my',
        element: <PrivateRoute><MyArt></MyArt></PrivateRoute>
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute> <ViewDetilas></ViewDetilas></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <UpdatePage></UpdatePage>
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
