import React from 'react'
import "./App.css";
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Agencies from './pages/Agencies';
import Disasters from './pages/Disasters';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import AboutUs from './pages/AboutUs';
import Footer from './components/common/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/agencies" element={<Agencies /> }/>
        <Route path="/disaster" element={<Disasters /> }/>
        <Route path="/profile" element={<Profile /> }/>
        <Route path="/resources" element={<Resources /> }/>
        <Route path="/about" element={<AboutUs /> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
