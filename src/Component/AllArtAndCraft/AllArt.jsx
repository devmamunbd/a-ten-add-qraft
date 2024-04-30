/* eslint-disable no-unused-vars */
import { Fade } from "react-awesome-reveal"
import { Link, NavLink, useLoaderData } from "react-router-dom"

const AllArt = () => {

  const dataLoaded = useLoaderData()
  const {displayName, email, photo, item, subcategory, short, price, ratting, example, time, stock} = dataLoaded
  // console.log(dataLoaded)
  return (
    <div className="mt-10 mx-auto">
      <Fade  cascade damping={0.3}>

    <h1 className="text-black font-bold text-3xl text-center">All Art And Craft</h1>
      </Fade>
{/* 
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
      </div> */}
   

      {/* Table */}
          <div>
            {
              dataLoaded.map(data => 
                <div key={data._id}>
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      {/* <th>Image</th> */}
                      <th>Title</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="">
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar w-1/5">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={data?.photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div className="w-1/5">
                            <div className="font-bold">{data?.item}</div>
                            <div className="text-sm opacity-50">{data?.subcategory}</div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold w-1/4">
                        {data?.displayName}
                      </td>
                      <td>
                        <span>{data?.email}</span>
                      </td>
                      <td className="font-bold w-1/6">${data?.price}</td>
                      <th className="w-1/6">
                        <Link to={`/details/${data._id}`}>
                          <button className="btn btn-secondary btn-md">Details</button>
                        </Link>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>

              )
            }
          </div>
  </div>
  )
}

export default AllArt