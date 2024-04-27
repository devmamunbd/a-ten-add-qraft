/* eslint-disable no-unused-vars */
import { NavLink, useLoaderData } from "react-router-dom"

const AllArt = () => {

  const dataLoaded = useLoaderData()
  console.log(dataLoaded)
  return (
    <div className="mt-10 mx-auto">
    <h1 className="text-black font-bold text-3xl text-center">All Art And Craft</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-6">
        {
          dataLoaded.map(data => <div key={data._id}>
             <div >
            <div className="w-[370px] h-[630px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={data?.photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest dark:text-violet-600">{data.displayName}</span>
              <h2 className="text-xl font-semibold tracking-wide">{data?.item}</h2>
            </div>
            <p className="dark:text-gray-800">{data?.short}</p>
            <div className="flex justify-between mt-3">
              <div className="bg-black text-white px-4 py-2 rounded-lg">
                <h1>Price: ${data?.price}</h1>
              </div>
              <div className="bg-black text-white px-4 py-2 rounded-lg">
                <h1>Ratting: {data?.ratting}</h1>
              </div>
            </div>
            <div className="mt-5">
              <NavLink
             to={`/details/${data._id}`}
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