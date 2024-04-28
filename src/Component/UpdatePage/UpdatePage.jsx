/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AauthProvider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const UpdatePage = () => {

  const {user} = useContext(AuthContext)
  // const [product, setProduct] = useState({})
  // const {id} = useParams()
  // console.log(id)
  const items = useLoaderData()

  const {_id, photo, item, subcategory, short, price, ratting, example, time, stock} = items

  const handleUpdateCraft = event=> {
    event.preventDefault()
    const form = event.target;
    const displayName = user.displayName;
    const email = user.email;
    const photo = form.photo.value;
    const item = form.item.value;
    const subcategory = form.subcategory.value;
    const short = form.short.value;
    const price = form.price.value;
    const ratting = form.ratting.value;
    const example = form.example.value;
    const time = form.time.value;
    const stock = form.stock.value;

    const updateCraft = {displayName, email, photo, item, subcategory, short, price, ratting, example, time, stock}
    // console.log(updateCraft)

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateCraft)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Craft Item has been Updated",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  
  }

//   useEffect(()=> {
   
// },[id])

 

  return (
    <div className="bg-slate-200 shadow-lg w-[700px] mx-auto rounded-md">
    <h1 className="text-2xl text-black font-bold text-center p-2">Add Craft Item</h1>

    <form
    onSubmit={handleUpdateCraft}
    >
    <div className="flex  flex-wrap p-10">
   <div className="flex gap-4">
   <div>
      <label htmlFor="">User Name</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="name" id="" defaultValue={user?.displayName} readOnly/>
    </div>
    <div>
      <label htmlFor="">User Email</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="email" id=""  defaultValue={user?.email} readOnly/>
    </div>
   </div>
   <div className="flex gap-4">
   <div>
      <label htmlFor="">Image URL</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="photo" defaultValue={photo} id="" placeholder="Image URL"/>
    </div>
    <div>
      <label htmlFor="">Item Name</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="item" defaultValue={item} id="" placeholder="Item Name"/>
    </div>
   </div>
   <div className="flex gap-4 mt-2">
   <div>
      <label htmlFor="">Sub Category Name</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="subcategory" defaultValue={subcategory} id="" placeholder="Sub Category URL"/>
    </div>
    <div>
      <label htmlFor="">Short Description</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="short" defaultValue={short} id="" placeholder="Short Description"/>
    </div>
   </div>
   <div className="flex gap-4 mt-2">
   <div>
      <label htmlFor="">Price</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="price" defaultValue={price} id="" placeholder="Price"/>
    </div>
    <div>
      <label htmlFor="">Ratting</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="ratting" defaultValue={ratting} id="" placeholder="Ratting"/>
    </div>
   </div>
   <div className="flex gap-4 mt-2">
   <div>
      <label htmlFor="">Custimization Example</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="example" defaultValue={example} id="" placeholder="Customization Example"/>
    </div>
    <div>
      <label htmlFor="">Processing Time</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="time" defaultValue={time} id="" placeholder="Processing Time"/>
    </div>
   </div>
   <div className="flex items-start mt-2">
   <div>
      <label htmlFor="">Stock Status</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="stock" defaultValue={stock} id="" placeholder="Customization Example"/>
    </div>
    {/* <div>
      <label htmlFor="">Processing Time</label> <br />
      <input className="outline-none rounded-md p-2 w-[300px]" type="text" name="protime" id="" placeholder="Processing Time"/>
    </div> */}
   </div>


    </div>
    <div className=" flex justify-center items-center p-5">
      <button className="px-12 py-2 bg-black text-white rounded-md">Update</button>
    </div>
    </form>
  </div>
  )
}

export default UpdatePage