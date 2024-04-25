/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../AauthProvider/AuthProvider"
import { Result } from "postcss"
import Swal from "sweetalert2"
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {

  const {singIn} = useContext(AuthContext)
  const [error, setError] = useState()

  const handleLogin = event=> {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
    .then(result => {
      console.log(result.user)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User Login Success",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error => {
      console.log(error)
    })
    

  }

  return (
    <div className="bg-white shadow-lg w-[600px] mx-auto mt-8">
    <h1 className="text-3xl text-black font-bold p-4 text-center">Login Now</h1>
    <div className="mt-7">
        <form 
        onSubmit={handleLogin}
        >
            <div className="flex flex-col justify-center items-center">
           
            <input className="p-2 w-[90%] rounded-md outline-none border-[1px]
             border-gray-700" type="email" name="email" placeholder="Email" /> <br />


            <input className="p-2 w-[90%] rounded-md outline-none border-[1px]
             border-gray-700" type="password" name="password" placeholder="PhotoURL" />
             <div>
              {
                error && <span className="text-red-500">{error}</span>
              }
              </div> 
            </div>
            <div className="px-8">
              <h1>New in here please <NavLink to='/register' className="text-blue-500">Register</NavLink> </h1>
            </div>
            <div className="flex justify-center items-center p-5">
                <button className="bg-black text-white font-bold px-8 rounded-md py-2">Login</button>
            </div>
        </form>
    </div>
    <div className="flex justify-around">
      <div className="bg-black px-7 py-2 rounded-md">
            <button> <FaGithub /> </button>
      </div>
      <div className="bg-black px-7 py-2 rounded-md">
            <button> <FaGoogle /> </button>
      </div>
    </div>
</div>
  )
}

export default Login