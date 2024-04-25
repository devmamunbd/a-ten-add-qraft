/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from "../../firebase.init"


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    //createUser
    const createUser=(email, password)=> {
      setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
    }

    //SingIn
    const singIn =(email, password)=> {
      setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {user, setUser, createUser, singIn}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider