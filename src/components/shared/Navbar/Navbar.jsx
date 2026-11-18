import { Link } from "react-router";
import { MdHome } from "react-icons/md";
 import { MdGridView } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

 

const Navbar = () => {
    const links = (
      <>
        <li>
          <Link className="text-xl font-semibold">
            <MdHome size={22}  />
            Home
          </Link>
        </li>
        <li>
          <Link className="text-xl font-semibold"> 
          <MdGridView size={22}  />
          Brands</Link>
        </li>
        <li>
          <Link className="text-xl font-semibold">
          <FaInfoCircle size={22} />
          About Dev</Link>
        </li>
      </>
    );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  "
          >
            {links}
          </ul>
        </div>
        <a className="  text-2xl font-extrabold">Discount<span className="text-fuchsia-600">PRO</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary rounded-2xl">Login</a>
      </div>
    </div>
  );
}

export default Navbar