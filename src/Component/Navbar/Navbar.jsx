import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../AauthProvider/AuthProvider"

const Navbar = () => {

  const {logOut, user} = useContext(AuthContext)

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
    <a className="btn btn-ghost text-xl">Mountain</a>
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
        <div className="tooltip" data-tip={user?.displayName || "name not found"}>
        <img className="w-12 h-12 rounded-full" src={user?.photoURL || "https://i.postimg.cc/nz1RzCYD/IMG-5456.jpg"} alt="" />
        </div>
      <NavLink onClick={handleLogOut} className="btn">Log Out</NavLink>
      
      </div>

      :  <NavLink className="btn" to="/login">Login</NavLink>
    }
    
  </div>
</div>
    </div>
  )
}

export default Navbar