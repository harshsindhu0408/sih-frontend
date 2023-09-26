import React, { useEffect, useState } from "react";
import apiConnector from "../services/apiConnector";
import { resourceEndPoints } from "../services/api"; // Replace with your actual API endpoints
import { toast } from "react-toastify";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector({
          method: "GET",
          url: resourceEndPoints.LIST_RESOURCES_API, // Replace with your actual endpoint
        });

        setResources(response.resources);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching resources");
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-full flex items-center justify-center mt-16">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <div key={resource._id} className="bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800">
                  {resource.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Category: {resource.category}
                </p>
                <p className="text-sm text-gray-500">
                  Availability: {resource.availability}
                </p>
                <p className="text-sm mt-2">{resource.description}</p>
                <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
