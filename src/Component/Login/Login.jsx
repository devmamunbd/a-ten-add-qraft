/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../AauthProvider/AuthProvider"
import Swal from "sweetalert2"
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {

  const {singIn, googleSingIn, gitHubeSingIn} = useContext(AuthContext)
  const [error, setError] = useState()
  const [showPassword, setShowPassword] = useState(false)

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
      setError("Your Email and Password Dosen't Match")
    })

    setError("")

  }

  const handleGithub=()=> {
    gitHubeSingIn()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleGoogle =()=> {
    googleSingIn()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }


  return (
    <div className="bg-white shadow-lg w-[500px] mx-auto mt-8">
    <h1 className="text-3xl text-black font-bold p-4 text-center">Login Now</h1>
    <div className="mt-7">
        <form 
        onSubmit={handleLogin}
        >
            <div className="flex flex-col justify-center items-center">
           
            <input className="p-2 w-[70%] rounded-md outline-none border-[1px]
             border-gray-700" type="email" name="email" placeholder="Email" /> <br />


            <input className="p-2 w-[70%] relative rounded-md outline-none border-[1px]
             border-gray-700" 
             type={showPassword ? "text" : "password" }
             name="password" placeholder="Password" />
             <small className="cursor-pointer absolute top-[302px] right-[470px]" onClick={()=>setShowPassword(!showPassword)}>
              {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
              }
             </small>
             <div>
              {
                error && <span className="text-red-500">{error}</span>
              }
              </div> 
            </div>
            <div className="px-20">
              <h1>New in here please <NavLink to='/register' className="text-blue-500">Register</NavLink> </h1>
            </div>
            <div className="flex justify-center items-center p-5 ">
                <button className="bg-black text-white font-bold w-[75%] rounded-md py-2">Login</button>
            </div>
        </form>
    </div>
    <div>
      <h1 className="text-black font-bold text-center">Or</h1>
    </div>
    <div className="flex flex-col justify-center items-center p-7 gap-2 mx-auto">
      <div className="bg-black px-5 cursor-pointer text-white w-[75%] py-2 rounded-md">
            <button
            onClick={handleGithub}
            className="pl-36"> <FaGithub /> </button>
      </div>
      <div className="bg-black px-5 text-white w-[75%] py-2 rounded-md">
            <button
            onClick={handleGoogle}
            className="pl-36"> <FaGoogle /> </button>
      </div>
    </div>
</div>
  )
}

export default Login