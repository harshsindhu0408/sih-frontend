import React from 'react';
import MapComponent from './MapComponent';
import { Link } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';

const AgencyComponent = ({ agency }) => {
  // Extract the coordinates from the agency object
  const coordinates = [
    agency.location.coordinates[1],
    agency.location.coordinates[0],
  ];
  console.log(coordinates);
  
  return (
    <div>
      <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 flex md:flex-row sm:flex-col gap-x-6 sm:gap-y-6 overflow-hidden items-center justify-center">
        {/* Address div */}
        <div className="w-11/12 bg-white md:w-1/2 border border-gray-300 shadow-lg rounded-md p-6 md:p-10">
          <p className="font-semibold text-lg text-gray-700">
            Where We Are Located
          </p>
          <div className="text-gray-700 mt-2">
            <p>Street: {agency.contact.address.street}</p>
            <p>City: {agency.contact.address.city}</p>
            <p>State: {agency.contact.address.state}</p>
            <p>Country: {agency.contact.address.country}</p>
            <p>Postal Code: {agency.contact.address.postalCode}</p>
          </div>
          <Link to="/update-profile">
            <div className="flex flex-row gap-x-2 items-center justify-center text-white font-bold md:text-[14px] sm:text-xs sm:px-2 py-2
            transition-all duration-200 mt-4 border md:px-4 md:py-2 rounded-full bg-indigo-500 hover:bg-indigo-600">
              <button className="text-white overflow-hidden">
                Update Location
              </button>
              <FiEdit2 className="text-white" />
            </div>
          </Link>
        </div>

        {/* Map div */}
        <div className="w-full md:w-1/2 sm:w-11/12 ">
          {/* Pass the extracted coordinates */}
          <MapComponent coordinates={coordinates} />
        </div>
      </div>
    </div>
  );
}

export default AgencyComponent;
