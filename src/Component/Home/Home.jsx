import { NavLink, useLoaderData } from "react-router-dom"

const Home = () => {

  const homeData = useLoaderData()
  // const {_id: id} = homeData

  return (
    <div className="mt-10 mb-10">
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
    </div>

    <div className="mt-10 mx-auto">
      <h1 className="text-black font-bold text-3xl text-center">Craft Item Section: {homeData.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
    {
      homeData.slice(0,6).map((data) => <div key={data._id}>
          <div className="w-[370px] h-[630px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <img src={data?.photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
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
      <div className="mt-5">
        <NavLink
        to={`/details/${data._id}`}
        > <button className="w-full bg-black text-white font-bold rounded-md py-2">View Details</button></NavLink>
      </div>
    </div>
      </div>
    )}
      </div>
    </div>

    <div className="mt-10 mx-auto">
      <h1 className="text-black font-bold text-3xl text-center">Art And Craft</h1>
    </div>
    <div className="mt-10 mx-auto">
      <h1 className="text-black font-bold text-3xl text-center">Category Section</h1>
    </div>

    </div>
  )
}

export default Home