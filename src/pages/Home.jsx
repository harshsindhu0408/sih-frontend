import React from "react";
import Banner from "../components/home/Banners";
import { authLogin } from "../redux/Actions/authAction";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(authLogin());
  return (
    <div className="scrool-smooth flex flex-col items-center justify-center gap-y-16">
      <div className="mainSection w-full flex items-center justify-center">
        <div className="w-6/12 text-center flex flex-col gap-y-6 items-center justify-center">
          <p className="font-serif 2xl:h-32  h-full text-6xl overflow-hidden block font-bold text-white">
            Connect and Coordinate During Calamities
          </p>
          <p className="w-8/12 font-roborto text-lg overflow-hidden 2xl:block opacity-80 text-white">
            RescueConnect is a comprehensive web application designed to
            facilitate coordination and location display for rescue agencies
            during both natural disasters and man-made emergencies. calamities.
          </p>
        </div>
      </div>

      <div className="text-gray-800 font-serif text-5xl 2xl:h-16 overflow-hidden font-bold">
        {`"Empowering Heroes During Crisis Situations"`}
      </div>

      <Banner />
    </div>
  );
};

export default Home;

// Connect and Coordinate During Calamities
// RescueConnect is a Web Application that help rescue agencies coordinate and display their locations during natural or man-made calamaties
