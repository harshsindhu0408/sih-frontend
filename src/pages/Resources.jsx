import React, { useEffect, useState } from "react";
import apiConnector from "../services/apiConnector";
import { resourceEndPoints } from "../services/api"; // Assuming you have resource endpoints defined
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ResoruceItem from "../components/ResoruceItem";
import axios from "axios";


const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${sessionStorage.getItem('_token')}`
        }
        const response = await axios.get(`http://localhost:8080/api/n1/resource/listResources`, { headers });
        console.log("API Response:", response);

        setResources(response.data.resources);
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

  return (
    <div className="m-7">
      <div className="my-3">
        <Link to="/addResource">
          <button className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-700">
            Add Resource
          </button>
        </Link>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-purple-700">
          Resource Inventory
        </h2>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap mx-10">
          {resources.map((resource) => (
            <ResoruceItem key={resource._id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Resources;
