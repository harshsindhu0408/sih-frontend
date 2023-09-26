import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const iconStyle = {
    fontSize: "40px",
    margin: "10px",
  };

  return (
    <footer className="bg-gray-800 text-white shadow-lg py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center justify-center lg:justify-start">
          <img src={logo} alt="logo" width="60px" className="hidden sm:block" />
          <div className="text-xl md:text-4xl font-bold ml-2">
            <Link to={"/"} className="text-blue-400 hover:text-blue-600">
              RescueConnect
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex mt-2 lg:mt-0">
          <ul className="space-x-6 md:font-bold font-Roborto flex flex-wrap">
            <li>
              <Link to="/disaster" className="text-gray-400 hover:text-white">
                Disasters
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-gray-400 hover:text-white">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-gray-400 hover:text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/agencies" className="text-gray-400 hover:text-white">
                Agencies
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="mt-4 lg:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                style={iconStyle}
                href="/"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                style={iconStyle}
                href="/"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                style={iconStyle}
                href="/"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
