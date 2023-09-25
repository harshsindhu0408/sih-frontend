import React from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../redux/Actions/authAction";

const Navbar = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isLoggedin=state.isLoggedin

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(authLogout());
  };

  const Links = [
    { id: 2, name: "Resources", link: "/resources" },
    { id: 3, name: "Disasters", link: "/disaster" },
    { id: 4, name: "Agencies", link: "/agencies" },
    { id: 5, name: "Profile", link: "/profile" },
    { id: 6, name: "About Us", link: "/about" },
  ];

  return (
    <nav className="w-full z-10 bg-gray-800 relative h-20 flex items-center justify-center shadow-lg">
      <div className="w-9/12 mr-20 flex flex-row items-center justify-between">
        {/* left part with name and logo */}
        <div className="flex flex-row items-center justify-center gap-2">
          <Link className="flex flex-row items-center justify-center gap-2" to="/">
            <img src={logo} alt="logo" width="45px" />
            <p className="text-2xl text-white font-Roberto font-bold">RescueConnect</p>
          </Link>
        </div>

        {/* mid part with links */}
        <div>
          <ul className="flex items-center mr-13 justify-center gap-8">
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="text-white font-bold font-Roborto hover:text-indigo-500 duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* right part with login and logout buttons */}
        <div className="flex items-center justify-center gap-4">
          {isLoggedin ? (
            <button
              className="bg-indigo-500 hover:bg-indigo-600 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="nav-link">
              <button className="bg-indigo-500 hover:bg-indigo-600 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
