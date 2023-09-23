import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Resources", link: "/resources" },
        { name: "Disasters", link: "/disaster" },
        { name: "Agencies", link: "/agencies" },
        { name: "Profile", link: "/profile" },
        { name: "About Us", link: "/about" },
      ];

      const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <nav className='w-full h-20 bg-transparent flex items-center justify-center shadow-lg'>
        <div className='w-11/12 flex flex-row items-center justify-between'>
            {/* left part with name and logo */}
            <div className='flex flex-row items-center justify-center gap-2'>
            <Link className='flex flex-row items-center justify-center gap-2' to={"/"}>
              <img  src={logo} alt="loggoo" width="45px"></img>
              <p className='text-2xl font-bold'>RescueConnect</p>
            </Link>
            </div>

            {/* mid part with links and all */}
            <div>
                <ul className='flex items-center justify-center gap-8 mr-24'>
                    {Links.map((link) => (
                        <Link to={link.link}
                        className="text-ternary-dark font-Roborto text-lg hover:text-indigo-500 duration-200">
                            {link.name}
                        </Link>
                    ))}
                </ul>
            </div>

            {/* right part with login and logout buttons */}
            <div className='flex items-center justify-center gap-4'>
                {
                    isLoggedin ?
                    (<button className=' bg-indigo-500 hover:bg-indigo-600 block text-white shadow-sm rounded-sm px-4 py-2 duration-300 w-20' onClick={() => setIsLoggedin(false)}>Login</button>) :
                    (<button className=' bg-indigo-500 hover:bg-indigo-600 block text-white shadow-sm rounded-sm px-4 py-2 duration-300 w-20' onClick={() => setIsLoggedin(true)}>Logout</button>)
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar
