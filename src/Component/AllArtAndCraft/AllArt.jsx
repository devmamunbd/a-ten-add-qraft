/* eslint-disable no-unused-vars */
import { NavLink, useLoaderData } from "react-router-dom"

const AllArt = () => {

  const dataLoaded = useLoaderData()

  return (
    <div className="mt-10 mx-auto">
    <h1 className="text-black font-bold text-3xl text-center">All Art And Craft: {dataLoaded.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7">
        {
          dataLoaded.map(data => <div key={data._id}>
             <div >
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src="https://i.postimg.cc/W36GQczn/IMG-5395.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
              <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
            </div>
            <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            <div className="mt-5">
              <NavLink
              to="/detailsAll/${id}"
              > <button

               className="w-full bg-black text-white font-bold rounded-md py-2">View Details</button></NavLink>
            </div>
          </div>
    </div>
          </div>)
        }
      </div>
   
  </div>
  )
}

export default AllArt