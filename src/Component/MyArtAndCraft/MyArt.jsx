/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AauthProvider/AuthProvider"
import { NavLink } from "react-router-dom"
import Swal from "sweetalert2"

const MyArt = () => {

  const {user} = useContext(AuthContext)
  // console.log(user)
  const [item, setItem] = useState([])
  // const [cart, setCart] = useState(it)
  const [control, setControl] = useState(false)

  useEffect(()=> {
      fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then(res => res.json())
      .then((data) => {
        setItem(data)
      })
  },[user, control])

  const hanbdelDelte =(id)=> {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(() => {
      fetch(`http://localhost:5000/my/${id}`, {
        method: "DELETE"
        
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount >0) {
            setControl(!control)
         }
      })
    });
    
  }

  return (
    <div className="mt-10 mx-auto">
    <h1 className="text-black font-bold text-3xl text-center mb-7">My Art And Craft List</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        item.map((data) => <div key={data._id}>
          <div >
    <div className="w-[370px] h-[630px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
    <img src={data?.photo} alt="" className=" object-center w-full rounded-md h-72 dark:bg-gray-500" />
    <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-widest dark:text-violet-600">{data?.displayName}</span>
      <h2 className="text-xl font-semibold tracking-wide">{data?.item}</h2>
    </div>
    <p className="dark:text-gray-800">{data?.short}</p>
    <div className="flex justify-between mt-3">
        <div className="bg-black text-white px-4 py-2 rounded-lg">
          <h1>Price: ${data?.price}</h1>
        </div>
        <div className="bg-black text-white px-4 py-2 rounded-lg">
          <h1>Rating: {data?.ratting}</h1>
        </div>
      </div>
    <div className="flex justify-between items-center mt-5">
     <NavLink 
     to={`/update/${data._id}`}
     >
     <button 
      // onClick={hanbdelUpdate}
      className="px-12 py-2 bg-black text-white rounded-md">Update</button>
     </NavLink>
      <button 
      onClick={()=>hanbdelDelte(data._id)}
      className="px-12 py-2 bg-black text-white rounded-md">Delete</button>
    </div>
  </div>
    </div>
        </div>)
      }
    </div>
  </div>
  )
}

export default MyArt