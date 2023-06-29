import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <>
    <div className="navlinks">
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/roadmap'>Roadmap</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/project'>Asdfsfdssdf</NavLink>
    </div>
  </>
}

export default Navbar;