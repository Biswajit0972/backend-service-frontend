import { NavLink } from "react-router"

const DesktopNav = () => {
  return (
    <nav className="overflow-hidden w-full pr-1">
    <ul className="relative w-full text-16 flex items-center gap-2">
        <li>
            <NavLink to="/">Home</NavLink>
        </li><li>
            <NavLink to="/user">User</NavLink>
        </li>
        <li>
            <NavLink to="/content">Content</NavLink>
        </li>
    </ul>
</nav>
  )
}

export default DesktopNav