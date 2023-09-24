import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white p-10 shadow-lg ">
      <div
        className="underline"
        style={{ fontSize: "70px", marginBottom: "50px" }}
      >
        Contact Us
      </div>
      <div className=" mb-10 flex flex-row items-center justify-center">
        <div className="basis-2/4 mb-10">
          <div>
            <img src={logo} alt="" width="70px" />
          </div>
          <div style={{ overflow: "hidden" }} className="mt-6 text-2xl">
            <span>We Rescue the people in Need</span>
          </div>
          <div></div>
        </div>
        <div className="basis-1/4 ">
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
        <div className="basis-1/4">
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
      </div>
      <hr></hr>
      <div className="mt-5">© 2020 Your Company, Inc. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
