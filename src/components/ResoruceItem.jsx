import React from "react";
import { toast } from "react-toastify";
import apiConnector from "../services/apiConnector";
import { resourceEndPoints } from "../services/api";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function ResoruceItem({ resource, onDelete }) {
  const accountState = useSelector((state) => state.profile.accountInfo);
  const navigate = useNavigate();

  const deleteResource = async (resourceId) => {
    try {
      // Make an API call to delete the resource using the resource ID
      await apiConnector({
        method: "DELETE",
        url: `${resourceEndPoints.DELETE_RESOURCES_API}/${resourceId}`,
      });

      // After successful deletion, call the onDelete function passed as a prop
      // to remove the deleted resource from the parent component's state.
      onDelete(resourceId);

      toast.success("Resource deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-3">
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">
        {resource.name}
      </h3>
      <div className="">
        <p className="text-gray-600">Status: {resource.status}</p>
        <p className="text-gray-600">Quantity: {resource.quantity}</p>
        <p
          className={`text-${resource.availability ? "green-500" : "red-500"}`}
        >
          Availability: {resource.availability ? "Available" : "Not Available"}
        </p>
        {/* Add additional resource properties here */}

        <div className="flex flex-row items-start gap-x-8 mt-2">
          {resource.ownerAgency == accountState._id && (
            <button
              className="bg-red-500 hover:bg-red-600 hover:scale-95 text-white font-semibold py-2 px-4 rounded-full transition duration-200 ease-in-out"
              onClick={() => deleteResource(resource._id)}
            >
              Delete
            </button>
          )}

          {resource.ownerAgency == accountState._id && (
            <button
              className="bg-indigo-500 hover:bg-indigo-600 hover:scale-95 transition-all duration-200 text-white font-semibold py-2 px-4 rounded-full ease-in-out"
              onClick={() => navigate(`/updateResource/${resource._id}`)}
            >
              Update resource
            </button>
          )}

          <button onClick={() => navigate(`/resource/${resource._id}`)}>View Details</button>
        </div>
      </div>
    </div>
  );
}
