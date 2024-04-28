import { FaPaintBrush, FaRegClock } from "react-icons/fa"
import { GiLargePaintBrush } from "react-icons/gi"
import { IoLocationOutline } from "react-icons/io5"
import { MdAddCall } from "react-icons/md"
import { PiPaintBrushHouseholdBold } from "react-icons/pi"
import { NavLink, useLoaderData } from "react-router-dom"

const Home = () => {

  const homeData = useLoaderData()
  // const {_id: id} = homeData

  return (
    <div className="mt-10 mb-10">
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="w-full relative">

    <img src="/painting2.jpg" className="w-full h-[500px] rounded-lg" />
    
    <div className="absolute left-28 bottom-44">
    <h1 className="text-4xl text-white font-bold">We Bring Your Home <br /> To Lovely Color</h1>
      <div className="flex gap-7 mt-5">
        <button className="bg-black text-white px-9 py-2 rounded-md">Read More</button>
        <button className="bg-black text-white px-7 py-2 rounded-md">Explore Now</button>
      </div>
    </div>
   
    
    </div>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="w-full relative">

<img src="/painting1.jpg" className="w-full h-[500px] rounded-lg" />

<div className="absolute left-28 bottom-44">
<h1 className="text-4xl text-blue-800 font-bold">BEST ART <br />  PAINTER</h1>
  <div className="flex gap-7 mt-5">
    <button className="bg-blue-500 text-white px-9 py-2 rounded-md">Read More</button>
    <button className="bg-blue-500 text-white px-7 py-2 rounded-md">Explore Now</button>
  </div>
</div>


</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="w-full relative">

<img src="/painting3.jpg" className="w-full h-[500px] rounded-lg" />

<div className="absolute left-28 bottom-44">
<h1 className="text-4xl font-bold"><span className="text-green-500">Commercial</span> <br /> <span className="text-orange-500">& Residential Painting</span></h1>
  <div className="flex gap-7 mt-5">
    <button className="bg-blue-500 text-white px-9 py-2 rounded-md">Read More</button>
    <button className="bg-blue-500 text-white px-7 py-2 rounded-md">Explore Now</button>
  </div>
</div>


</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
    </div>
    

    <div className="mt-10 mx-auto">
      <h1 className="text-black font-bold text-3xl text-center mb-7">Craft Item Section</h1>

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
      <h1 className="text-black font-bold text-3xl text-center">Art And Craft Category Section</h1>
    </div>



      <div>
        <div>
          <h1 className="text-3xl text-black font-bold mb-7 mt-7 text-center">Our Service</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            <div >
              <img className="rounded-md" src="/painImg.jpg" alt="" />
            </div>
            <div >
              <div className="text-black font-bold text-2xl">
                <h1 className="text-[#61B6F9]">Services</h1>
                </div>
                <div className="mt-2">
                  <h1 className="text-4xl font-bold"><span className="text-[#4F638D]">We Provide </span> 
                  <span className="text-[#61B6F9]">Painting <br></br> Service</span>
                   <span className="text-[#4F638D]"> For you</span></h1>
                </div>
                <p className="text-gray-400 text-[17px] mt-2">A professional painting service is a service where painting contractors provide all the service from start to end like preparation of painting and some provide repairing also. A professional painter works for both residential and commercial properties.</p>

              <div className=" flex flex-col gap-2 mt-3">
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <div className="bg-blue-600 text-white px-2 py-2 rounded-full">
                    <FaPaintBrush />
                    </div>
                     <h1>Exterior Painting</h1>
                  </div>
               
                <p>We offer a variety of paints color and a job done well by experienced professional</p>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <div className="bg-blue-600 text-white px-2 py-2 rounded-full">
                     <PiPaintBrushHouseholdBold />
                    </div>
                     <h1>Commercial Painting</h1>
                  </div>
                <p>We offer a variety of paints color and a job done well by experienced professional</p>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                  <div className="bg-blue-600 text-white px-2 py-2 rounded-full">
                  <GiLargePaintBrush/>
                    </div>
                     <h1>Exterior Painting</h1>
                  </div>
                <p>We offer a variety of paints color and a job done well by experienced professional</p>
                </div>
               
              </div>
              <button className="bg-[#61B6F9] px-7 py-2 mt-3 rounded-md text-black font-bold">Read More...</button>
            </div>
          </div>
        </div>
      </div>

        <div className="">
          <h1 className="text-4xl text-center text-black font-bold mt-10">Contact Us</h1>
          <div className="flex flex-col justify-center md:flex-row lg:flex-row mt-10 mb-10">
            <div className="bg-white shadow-md p-8 w-[500px]">
              <div className="flex flex-col gap-4 space-y-4">
                <div>
                  <div className="flex gap-2 items-center">
                  <MdAddCall  className="text-orange-500"/>
                  <h1>Call Us</h1>
                  </div>
                  +8801757484944
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                  <IoLocationOutline  className="text-orange-500"/>
                  <h1>Location</h1>
                  </div>
                  121 Rock Street, New York, USA
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                  <FaRegClock  className="text-orange-500"/>
                  <h1>Business Hour</h1>
                  </div>
                  Mon-Fri...10am-8pm <br />
                  Sat-Sun....Closed
                </div>
              </div>
            </div>

           
            <div className="bg-gray-200 shadow-md p-8 w-[500px]">
              <div>
                <h1 className="text-2xl text-center font-bold mb-3">CONTACT US</h1>
              </div>
              <div className="space-y-2">
                <input className="p-2 outline-none bg-white w-full" type="text" placeholder="Enter Your Name" /> <br />
                <input className="p-2 outline-none bg-white w-full" type="email" placeholder="Enter Your Valid Email Adrress" /> <br />
                <textarea  className="p-2 outline-none bg-white w-full" name="" id="" cols="30" rows="5" placeholder="Enter Your Message"></textarea>
              </div>
              <button type="submit" className="bg-orange-500 w-full py-2 text-white font-bold">Submit</button>
            </div>
          </div>
        </div>



    </div>
  )
}

export default Home