import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Resources", link: "/resources" },
    { id: 3, name: "Disasters", link: "/disaster" },
    { id: 4, name: "Agencies", link: "/agencies" },
    { id: 5, name: "Profile", link: "/profile" },
    { id: 6, name: "About Us", link: "/about" },
  ];

  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <nav className="w-full z-10 bg-gray-800 relative h-20 flex items-center justify-center shadow-lg">
      <div className="w-9/12 mr-20 flex flex-row items-center justify-between">

        {/* left part with name and logo */}
        <div className="flex flex-row items-center justify-center gap-2">
          <Link
            className="flex flex-row items-center justify-center gap-2"
            to={"/"}
          >
            <img src={logo} alt="loggoo" width="45px"></img>
            <p className="text-2xl text-white font-Roberto font-bold">
              RescueConnect
            </p>
          </Link>
        </div>

        {/* mid part with links and all */}
        <div>
          <ul className="flex items-center mr-10 justify-center gap-6">
            {Links.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="text-white font-bold font-Roborto hover:text-indigo-500 duration-200"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* right part with login and logout buttons */}
        <div className="flex items-center justify-center text-center">
          {isLoggedin ? (
            <NavLink to="/signup" className='nav-link'>
            <button
              className=" bg-indigo-500 text-center hover:bg-indigo-600 block font-bold text-white rounded-full px-4 py-2 duration-300 w-24"
              onClick={() => setIsLoggedin(false)}
            >
              SignUp
            </button>
            </NavLink>
          ) : (
            <NavLink to='/login'>
            <button
              className=" bg-indigo-500 text-center hover:bg-indigo-600 block font-bold text-white rounded-full px-4 py-2 duration-300 w-24"
              onClick={() => setIsLoggedin(true)}
            >
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
