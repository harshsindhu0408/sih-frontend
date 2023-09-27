import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ResoruceItem from "../components/ResoruceItem";
import axios from "axios";
import apiConnector from "../services/apiConnector";
import { resourceEndPoints } from "../services/api";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector({
          method:'GET',
          url:resourceEndPoints.LIST_RESOURCES_API
        })
        console.log("API Response:", response);

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

  const handleDetailsClick = (resourceId) => {
    // Navigate to the resource details page with the resource ID as a param
    navigate(`/resource-details/${resourceId}`);
  };

  console.log(resources);

  return (
    <div className="w-11/12 mx-auto p-4">
      <div className="mb-8">
        <h2 className="md:text-5xl sm:text-2xl overflow-hidden md:h-16 text-center font-bold text-indigo-600">Resource Inventory</h2>
      </div>
      <div className="flex justify-center gap-x-16 items-center mb-4">
        <Link className="w-6/12" to="/addResource">
          <button className="px-4 w-full py-2 bg-indigo-500 rounded-full transition-all duration-200 text-white hover:bg-indigo-600">
            Add Resource
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {resources.map((resource) => (
          <ResoruceItem key={resource._id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
