import React from "react";
import MapComponent from "./MapComponent";
import { Link } from "react-router-dom";

const AgencyComponent = ({ agency }) => {
  // Extract the coordinates from the agency object
  const coordinates = [
    agency.location.coordinates[1],
    agency.location.coordinates[0],
  ];

  // Define the URL to the agency profile page
  const agencyProfileUrl = `/agency-profile/${agency._id}`;

  return (
    // <div className="block">
    <div className="flex items-center justify-center">
      <div className="w-full lg:w-9/12 xl:w-8/12 flex p-4 flex-col md:flex-row overflow-hidden">
        {/* Address div */}
        <div className="w-full md:w-1/2 mr-6 bg-white border shadow:lg border-gray-300 rounded-md p-6 md:p-10">
          <p className="font-bold underline text-xl text-gray-700">
            Agency Location
          </p>
          <div className="text-gray-700 mt-4 mb-4">
            <p className="mb-2">
              <span className="font-bold">Street:</span>{" "}
              {agency.contact.address.street}
            </p>
            <p className="mb-2">
              <span className="font-bold">City:</span>{" "}
              {agency.contact.address.city}
            </p>
            <p className="mb-2">
              <span className="font-bold">State:</span>{" "}
              {agency.contact.address.state}
            </p>
            <p className="mb-2">
              <span className="font-bold">Country:</span>{" "}
              {agency.contact.address.country}
            </p>
            <p>
              <span className="font-bold">Postal Code:</span>{" "}
              {agency.contact.address.postalCode}
            </p>
          </div>
          {/* buttons */}
          <div className="flex">
            <Link to="/update-profile">
              <button className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24 mr-4">
                Update
              </button>
            </Link>
            <Link to={agencyProfileUrl}>
              <button className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 block font-bold text-white shadow-sm rounded-full px-4 py-2 duration-300 w-24">
                View
              </button>
            </Link>
          </div>
        </div>

        {/* Map div */}
        <div className="w-full md:h-auto md:w-full overflow-hidden">
          {/* Pass the extracted coordinates */}
          <MapComponent coordinates={coordinates} className="h-full" />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AgencyComponent;
