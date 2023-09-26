import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificAgencyProfile } from "../redux/Actions/agencyAction";
import MapComponent from "../components/MapComponent";
import { FiEdit2 } from "react-icons/fi";

const AgencyProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificAgencyProfile(id));
  }, [dispatch, id]);

  const agency = useSelector((state) => state.agencies.specificAgency);
  const loggedInAgencyId = useSelector((state) => state.auth.user?.agencyId);

  if (!agency) {
    return (
      <div className="spinner w-full flex items-center justify-center"></div>
    );
  }

  const coordinates = [
    agency.agency.location?.coordinates[1],
    agency.agency.location?.coordinates[0],
  ];
  console.log(agency.agency.location, "bhau");

  // console.log(agency.disasters, "agency");

  const disasterCoordinates = agency.disasters.map((disaster) => {
    [disaster.location.coordinates[1], disaster.location.coordinates[0]];
  });
  console.log(agency);
  const isEditable = loggedInAgencyId === id;

  return (
    <div className="w-full flex flex-col items-center justify-center h-full scroll-smooth bg-gray-100">
      <div className="w-full flex flex-col items-center gap-y-10 justify-center">
        <div className="text-4xl overflow-hidden mt-2 lg:text-4xl font-bold text-indigo-700 text-center">
          Welcome To {agency.agency.name} Profile
        </div>
        <div className="w-11/12 lg:w-8/12 xl:w-8/12 flex flex-col md:flex-row sm:flex-col md:items-center justify-between rounded-md border border-gray-300 bg-white p-6 md:p-8 shadow-md">
          <div className="flex flex-col items-start justify-center gap-y-2">
            <div className="lg:font-semibold bg-white sm:text-md lg:text-lg text-gray-700">
              Name: {agency.agency.name}
            </div>
            <div className="lg:font-semibold sm:text-md lg:text-lg text-gray-700">
              Email: {agency.agency.email}
            </div>
            <div className="lg:font-semibold sm:text-md lg:text-lg text-gray-700">
              Mobile: {agency.agency.phoneNumber}
            </div>
          </div>
          {isEditable && (
            <Link to={`/update-agency/${id}`}>
              <div className="flex sm:w-full md:w-[200px] flex-row gap-x-2 items-center mt-4 md:mt-0 justify-center text-white font-bold overflow-hidden md:text-[14px] sm:text-xs sm:px-2 py-2 transition-all duration-200 border md:px-4 md:py-2 rounded-full bg-indigo-500 hover:bg-indigo-600">
                <button className="text-white overflow-hidden">
                  Update Profile
                </button>
                <FiEdit2 className="text-white" />
              </div>
            </Link>
          )}
        </div>
        <div className="text-gray-800 sm:text-2xl md:text-5xl font-serif 2xl:h-16 underline overflow-hidden text-center font-bold">
          Agency Location
        </div>
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 flex md:flex-row sm:flex-col gap-x-6 sm:gap-y-6 overflow-hidden items-center justify-center">
          <div className="w-11/12 bg-white md:w-1/2 border md:h-72 border-gray-300 shadow-lg rounded-md p-6 md:p-10">
            <p className="font-bold underline text-lg text-gray-700">
              Agency Location
            </p>
            <div className="text-gray-700 mt-2">
              <p>Street: {agency.agency.contact.address.street}</p>
              <p>City: {agency.agency.contact.address.city}</p>
              <p>State: {agency.agency.contact.address.state}</p>
              <p>Country: {agency.agency.contact.address.country}</p>
              <p>Postal Code: {agency.agency.contact.address.postalCode}</p>
            </div>
            {isEditable && (
              <Link to={`/update-agency-location/${id}`}>
                <div className="flex flex-row gap-x-2 items-center justify-center text-white font-bold md:text-[14px] sm:text-xs sm:px-2 py-2 transition-all duration-200 mt-4 border md:px-4 md:py-2 rounded-full bg-indigo-500 hover:bg-indigo-600">
                  <button className="text-white overflow-hidden">
                    Update Location
                  </button>
                  <FiEdit2 className="text-white" />
                </div>
              </Link>
            )}
          </div>
          <div className="w-full md:w-1/2 sm:w-11/12">
            <MapComponent
              coordinates={coordinates}
              className="w-full h-72 md:h-auto md:w-full rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="text-gray-800 sm:text-2xl md:text-5xl font-serif 2xl:h-16 underline overflow-hidden text-center font-bold">
          Disasters
        </div>
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 flex md:flex-row sm:flex-col gap-x-6 sm:gap-y-6 overflow-hidden items-center justify-center">
          <div className="w-full bg-white border md:h-72 border-gray-300 shadow-lg rounded-md p-6 md:p-10">
            {agency.disasters.map((disaster, index) => (
              <div
                key={index}
                className="flex justify-between bg-white border border-gray-300 shadow-lg rounded-md p-6 md:p-10 mb-6"
              >
                <div>
                  <p className="font-bold underline text-lg text-gray-700">
                    Disaster Description
                  </p>
                  <div className="text-gray-700 mt-2">
                    <p>Name of Disaster: {disaster.typeOfDisaster}</p>
                    <p>Status: {disaster.status}</p>
                    <p>Severity: {disaster.severity}</p>
                    <p>
                      {disaster.contact ? (
                        <React.Fragment>
                          <p>Street: {disaster.contact.address?.street}</p>
                          <p>City: {disaster.contact.address?.city}</p>
                          <p>State: {disaster.contact.address?.state}</p>
                          <p>Country: {disaster.contact.address?.country}</p>
                        </React.Fragment>
                      ) : (
                        "Address information not available"
                      )}
                    </p>
                    <p>Description: {disaster.description}</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 sm:w-11/12">
                  {disaster.location(
                    <MapComponent
                      coordinates={[
                        disaster.location.coordinates[1], // latitude for this disaster
                        disaster.location.coordinates[0], // longitude for this disaster
                      ]}
                    />
                  )}
                </div>
              </div>
            ))}
            {/* <div className="text-gray-700 mt-2">
              <p>Name of Disaster: {agency.disasters[0].typeOfDisaster}</p>
              <p>Status: {agency.disasters[0].status}</p>
              <p>Severity: {agency.disasters[0].severity}</p>
              <p>
                Address:
                {`${agency.disasters[0].contact.address.street},${agency.disasters[0].contact.address.city},${agency.disasters[0].contact.address.state},${agency.disasters[0].contact.address.country}`}
              </p>
              <p>Description: {agency.disasters[0].description}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyProfile;
