/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react"
import { AuthContext } from "../AauthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
      return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
      return children
    }

  return <Navigate state={location.pathname} to="/login"></Navigate>
  
}

export default PrivateRoute