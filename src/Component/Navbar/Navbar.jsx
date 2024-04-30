import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../AauthProvider/AuthProvider"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const Navbar = () => {

  const {logOut, user} = useContext(AuthContext)

  const [theme, setTheme] = useState('light')

  useEffect(() => {
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])


  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


    const navlink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/add'>Add Craft</NavLink></li>
    <li><NavLink to='/all'>All Art Craft</NavLink></li>
    <li><NavLink to='/my'>My Art Craft</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    </>


const handleLogOut=()=> {
  logOut()
}

  return (
    <div>
        <div className="navbar bg-base-100 mt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        {navlink}
      </ul>
    </div>
    <h1 className="btn btn-ghost text-2xl font-bold">Painting <span className="text-green-500">Plus</span></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navlink}
      
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <div className="flex gap-4 justify-between">
        {/* <div className="tooltip" data-tip={user?.displayName || "name not found"}> */}
      
        <a
          data-tooltip-id="my-tooltip-inline"
          data-tooltip-content={user?.displayName || "name not found"}
        >
        <img className="w-12 h-12 rounded-full cursor-pointer" src={user?.photoURL || "https://i.postimg.cc/nz1RzCYD/IMG-5456.jpg"} alt="" />
        </a>
        <Tooltip
          id="my-tooltip-inline"
          style={{ backgroundColor: "black", color: "#FFFF" }}
        />
  
     
        {/* </div> */}
      <NavLink onClick={handleLogOut} className="btn">Log Out</NavLink>
      
      </div>

      :  <NavLink className="btn" to="/login">Login</NavLink>
    }
    
  </div>
 
  <div className="ml-3">
  <label className="cursor-pointer grid place-items-center">
  <input
  onChange={handleToggle}
  type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  </div>
</div>
    </div>
  )
}

export default Navbar