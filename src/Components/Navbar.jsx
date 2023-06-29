import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <>
    <div className="navlinks">
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/roadmap'>Roadmap</NavLink>
    </div>
  </>
}

export default Navbar;