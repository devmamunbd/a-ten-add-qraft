import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'

const Rootlayout = () => {
  return (
    <div>
        <div className='w-[1180px] mx-auto'>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Rootlayout