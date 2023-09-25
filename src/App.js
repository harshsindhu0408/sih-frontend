import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";
import Disasters from "./pages/Disasters";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Auth/Login";
import ChangePassword from "./pages/Auth/ChangePassword";
import SignUp from "./pages/Auth/SignUp";
import Contact from "./pages/Contact";
import { useDispatch } from "react-redux";
import { AuthTypes } from "./redux/action_types";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const dispatch = useDispatch();
  if (sessionStorage.getItem("_token")) {
    dispatch({
      type: AuthTypes.LOGIN_SUCCESS,
      payload: sessionStorage.getItem("_token"),
    });
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/disaster" element={<Disasters />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
