import React, { useEffect, useState } from "react";
import apiConnector from "../services/apiConnector";
import { disasterEndPoints } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom"; // Import Link from react-router-dom

const DisasterDetails = () => {
  // Extract the disasterId from the URL
  const { disasterId } = useParams();

  const [disaster, setDisaster] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector({
          method: "GET",
          url: `${disasterEndPoints.GET_DISASTER_API}/${disasterId}`,
        });

        setDisaster(response.disaster); // Assuming the API response contains the disaster details
        setLoadingData(false);
      } catch (error) {
        toast.error("Error fetching disaster details");
        console.error(error);
        setLoadingData(false);
      }
    };

    fetchData();
  }, [disasterId]);

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

          {/* Add Update Disaster button */}
          <div className="mt-4">
            <Link
              to={`/disaster/${disasterId}/update`} // Define the URL for updating the disaster
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            >
              Update Disaster
            </Link>
          </div>

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
