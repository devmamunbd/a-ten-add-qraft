/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider,signOut , createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../../firebase.init"


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

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

    //singIn google
    const googleSingIn=()=> {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    //singin github
    const gitHubeSingIn=()=> {
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
    }

    const updateUserProfile=(name, photo)=> {
      updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo
      })
    }

    const logOut =()=>{
      signOut(auth)
    }

    useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
      })
      return () => {
        unSubscribe
      }
    },[])

    const authInfo = {user, setUser, createUser, singIn, googleSingIn, gitHubeSingIn, logOut, updateUserProfile}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider