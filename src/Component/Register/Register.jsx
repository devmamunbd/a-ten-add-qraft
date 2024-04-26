/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AauthProvider/AuthProvider";
import Swal from "sweetalert2";



const Register = () => {
  const {user,setUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState()

  const {createUser} = useContext(AuthContext)

  const handleRegister= event=> {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const userInfo ={name, email, photo, password}
    console.log(userInfo)

if (password.length < 6) {
        return setError("Password must have 6 character")
        
      }
      if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
        return setError("must have an Uppercase and Lowercase letter in the password")
      }

      setError(" ")

      createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
        setUser((prevUser) => {
          return {...prevUser, displayName:name, photoURL: photo}
        })
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Create Success",
          showConfirmButton: false,
          timer: 1500
        });
        
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      })
     

  }
       
        // const onSubmit = (data) => console.log(data)
      

  return (
    <div className="bg-white shadow-lg w-[600px] mx-auto mt-8">
        <h1 className="text-3xl text-black font-bold p-4 text-center">Register Now</h1>
        <div className="mt-7">
            <form 
            onSubmit={handleRegister}
            >
                <div className="flex flex-col justify-center items-center">
                <input className="p-2 w-[90%] rounded-md outline-none border-[1px]
                 border-gray-700" type="text" name="name" placeholder="Name" /> <br />

                <input className="p-2 w-[90%] rounded-md outline-none border-[1px]
                 border-gray-700" type="email" name="email" placeholder="Email" /> <br />

                <input className="p-2 w-[90%] rounded-md outline-none border-[1px]
                 border-gray-700" type="text" name="photo" placeholder="PhotoURL" /> <br />

                <input className="p-2 w-[90%] rounded-md outline-none border-[1px]
                 border-gray-700" type="password" name="password" placeholder="PhotoURL" />
                 <div>
                  {
                    error && <span className="text-red-500">{error}</span>
                  }
                  </div> 
                </div>
                <div className="px-8">
              <h1>Already have an account please <NavLink to='/login' className="text-blue-500">Login</NavLink> </h1>
             </div>
                <div className="flex justify-center items-center p-5">
                    <button className="bg-black text-white font-bold px-8 rounded-md py-2">Register</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Register