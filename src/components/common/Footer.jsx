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
    fontSize: "20px",
    margin: "10px",
  };

  return (
    <footer className=" mt-10 w-full bg-gray-800 h-100 p-5 pl-5 items-center text-white shadow-lg">
      <div
        className="underline mb-5"
        style={{ fontSize: "50px", marginLeft: "50px" }}
      >
        Contact Us
      </div>
      <br></br>
      <div className=" mb-5 flex flex-row ml-10 ">
        <div className="basis-2/5 mb-10">
          <div>
            <img src={logo} alt="" width="70px" />
          </div>
          <div style={{ overflow: "hidden" }} className="mt-6 text-2xl">
            <span>We Rescue the people in Need</span>
          </div>
          <div></div>
        </div>
        <div className="basis-1/5 ">
          <ul className="space-y-2">
            <li>
              <p className="md:font-bold underline">Company</p>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/about">Our Team</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <ul className="space-y-2">
            <li>
              <p className="font-bold underline">Legal</p>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Case Studies</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className=" mt-10 basis-1/5">
          <a style={iconStyle} href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a style={iconStyle} href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a style={iconStyle} href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
