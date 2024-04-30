/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AauthProvider/AuthProvider"
import { NavLink } from "react-router-dom"
import Swal from "sweetalert2"
import { Fade } from "react-awesome-reveal"

const MyArt = () => {

  const {user} = useContext(AuthContext)
  // console.log(user)
  const [item, setItem] = useState([])
  // const [sortItem, setSortItem] = useState([])
  // const [cart, setCart] = useState(it)
  const [control, setControl] = useState(false)

  useEffect(()=> {
      fetch(`https://assignment-server-fawn.vercel.app/myCart/${user?.email}`)
      .then(res => res.json())
      .then((data) => {
        setItem(data)
        // setSortItem(data)
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
    })
    .then(() => {
      fetch(`https://assignment-server-fawn.vercel.app/my/${id}`, {
        method: "DELETE"
        
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if(data.deletedCount >0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Craft Item has been deleted.",
            icon: "success"
          });
          setControl(!control)
        }
      })
    });
    
  }


  // useEffect(()=> {
  //   const handleCraftFilter = filter => {
  //     if (filter === "yes") {
  //       setSortItem(item)
  //     }
  //     else if(filter === "no") {
  //       const noCraft = item.filter(craft => craft.example === "no");
  //       setSortItem(noCraft)
  //     }
  //   }
  // },[item, sortItem])

  

  return (
    <div className="mt-10 mx-auto">
      <Fade  cascade damping={0.3}>
    <h1 className="text-black font-bold text-3xl text-center mb-7">My Art And Craft List</h1>
      </Fade>

      <div className="dropdown flex justify-center mb-8">
      <div tabIndex={0} className="bg-black px-8 py-2 text-white rounded-md">Sort Craft</div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
      <select name="subcategory" className="bg-black px-12 py-2 text-white rounded-md outline-none ">
        {/* <option disabled>Landscape Painting</option> */}
        <option >yes</option>
        <option >no</option>
        
      </select>
      </ul>
    </div>

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