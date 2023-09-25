import React, { useEffect } from 'react';
import { getAccountInfo } from '../redux/Actions/profileAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import MapComponent from '../components/MapComponent';
const Profile = () => {
  const state = useSelector((state) => state.profile);
  const agency = useSelector((state) => state.profile.accountInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccountInfo());
  }, []);

  if (state.loading || !agency) {
    return (
      <div className="spinner w-full flex items-center justify-center"></div>
    );
  }

  const coordinates = [
    agency.location.coordinates[1], // Longitude
    agency.location.coordinates[0], // Latitude
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center h-full scroll-smooth">
      <div className="w-11/12 flex flex-col items-center gap-y-8 justify-center">
        <div className="text-4xl flex flex-col items-center justify-center overflow-hidden mt-6 font-bold font-Roborto">
          Welcome to {agency.name} Profile
        </div>

        {/* top box with edit profile button div */}
        <div className="flex w-8/12 items-center justify-between rounded-md border-[1px] border-black bg-richblack-800 p-8 px-12">
          {/* Name and email div */}
          <div className="flex flex-col items-center justify-center gap-y-4">
            <div>Agency Name: {agency.name}</div>
            <div>Agency Email: {agency.email}</div>
          </div>

          {/* Edit profile button section */}
          <div
            className="flex flex-row gap-x-2 items-center justify-center text-white font-bold
            transition-all duration-200 border px-4 py-2 rounded-full hover:scale-95 bg-indigo-500 hover:bg-indigo-600"
          >
            <Link to={'/update-profile'}>
              <button className="">Update Profile</button>
            </Link>

            <FiEdit2 />
          </div>
        </div>

        {/* Container for MapComponent */}
        <div className="w-full h-80 mt-8">
          <MapComponent coordinates={coordinates} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
