import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import apiConnector from "../services/apiConnector";
import { resourceEndPoints } from "../services/api";
import { useSelector } from "react-redux";

const ResourceDetails = () => {
  const { resourceId } = useParams();
  console.log("resource ki id in final", resourceId);
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const state = useSelector((state) => state.profile);
  const agency = useSelector((state) => state.profile.accountInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector({
          method: "GET",
          url: `${resourceEndPoints.GET_RESOURCE_API}/${resourceId}`,
        });
        console.log("API Response:", response);

        setResource(response.resource); // Assuming the resource is in response.data
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching resource");
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [resourceId]); // Add resourceId as a dependency to re-fetch when it changes

  

  if (loading) {
    <div className="spinner w-full flex items-center justify-center"></div>
  }

  if (state.loading || !agency || loading || !resource) {
    return (
      <div className="spinner w-full flex items-center justify-center"></div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Resource Details</h1>
      <div className="border rounded-lg p-4">
        <p className="mb-2">
          <span className="font-semibold">Name:</span> {resource.name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Quantity:</span> {resource.quantity}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Status:</span> {resource.status}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Owner Agency:</span> {agency.name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Owner Agency Email:</span> {agency.email}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Availability:</span> {resource.availability}
        </p>
      </div>

      {/* Conditionally render shared agencies section */}
      {resource.sharedWith.length > 0 && (
        <div className="mt-4 border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Shared With Agencies</h2>
          <ul>
            {resource.sharedWith.map((agency, index) => (
              <li key={index}>{agency.name}</li>
            ))}
          </ul>
        </div>
      )}

      <Link to="/resources" className="mt-4 block">Back to Resources</Link>
    </div>
  );
};

export default ResourceDetails;
