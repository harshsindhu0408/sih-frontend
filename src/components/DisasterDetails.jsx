import React, { useEffect, useState } from "react";
import apiConnector from "../services/apiConnector";
import { disasterEndPoints } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom"; // Import Link from react-router-dom
import { useSelector } from "react-redux";

const DisasterDetails = () => {
  const accountState = useSelector((state) => state.profile.accountInfo);
  console.log(accountState);

  // Extract the disasterId from the URL
  const { disasterId } = useParams();

  const [disaster, setDisaster] = useState(null);
  const [agencies, setAgencies] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const disasterResponse = await apiConnector({
          method: "GET",
          url: `${disasterEndPoints.GET_DISASTER_API}/${disasterId}`,
        });

        setDisaster(disasterResponse.disaster);

        setLoadingData(false);
      } catch (error) {
        toast.error("Error fetching data");
        console.error(error);
        setLoadingData(false);
      }
    };

    fetchData();
  }, [disasterId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const agencyResponse = await apiConnector({
          method: "GET",
          url: `${disasterEndPoints.FETCH_AGENCIES_FROM_DISASTER}/${disasterId}`,
        });

        setAgencies(agencyResponse);

        setLoadingData(false);
      } catch (error) {
        toast.error("Error fetching data");
        console.error(error);
        setLoadingData(false);
      }
    };

    fetchData();
  }, [disasterId]);
  console.log(agencies);

  return (
    <div className="mt-4">
      {loadingData ? (
        <div className="w-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : disaster ? (
        <div>
          {/* Display the details of the disaster */}
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">
            Disaster Details
          </h2>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2>Disaster Details</h2>
            <p className="text-sm text-gray-500 mt-2">
              Disaster ID: {disasterId}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Severity: {disaster.severity}
            </p>
            {/* Add more fields below */}
            <p className="text-sm text-gray-500 mt-2">
              Type of Disaster: {disaster.typeOfDisaster}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Description: {disaster.description}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Status: {disaster.status}
            </p>
            {/* Add more fields as needed */}
          </div>

          {/* Display the list of related agencies */}
          <h2 className="text-3xl font-semibold mb-4 mt-6 text-purple-700">
            Related Agencies
          </h2>
          <div className="bg-white shadow-md p-4 rounded-lg">
            {agencies.length === 0 ? (
              <p className="text-sm text-gray-500 mt-2">
                No agencies related to this disaster.
              </p>
            ) : (
              <ul>
                {agencies.map((agency) => (
                  <li key={agency._id} className="text-sm text-gray-500 mt-2">
                    {agency.name}, {agency.email}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* {disaster.} */}
          {disaster.agencies[0] == accountState._id && (
            <button
              onClick={() => navigate("update")} // Redirect back to the disasters list
              className="mt-4 bg-purple-500 hover:bg--600 text-white font-semibold py-2 px-4 rounded-full"
            >
              Update
            </button>
          )}
          <button
            onClick={() => navigate("/disasters")} // Redirect back to the disasters list
            className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Back to Disasters
          </button>
        </div>
      ) : (
        <div>
          <p className="text-red-500">Disaster not found.</p>
          <button
            onClick={() => navigate("/disasters")} // Redirect back to the disasters list
            className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Back to Disasters
          </button>
        </div>
      )}
    </div>
  );
};

export default DisasterDetails;
