import React, { useState, useEffect } from "react";
import apiConnector from "../services/apiConnector";
import { disasterEndPoints } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateDisaster = () => {
  const navigate = useNavigate();
  const { disasterId } = useParams();
  const [disaster, setDisaster] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDisaster = async () => {
      try {
        const response = await apiConnector({
          method: "GET",
          url: `${disasterEndPoints.GET_DISASTER_API}/${disasterId}`,
        });

        setDisaster(response.disaster);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching disaster details");
        console.error(error);
        setLoading(false);
      }
    };

    fetchDisaster();
  }, [disasterId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Make a PUT request to update the disaster
      const response = await apiConnector({
        method: "PUT",
        url: `${disasterEndPoints.UPDATE_DISASTER_API}/${disasterId}`,
        body: disaster,
      });

      setLoading(false);

      // Check the response status and show a toast accordingly
      toast.success("Disaster updated successfully");
      navigate("/disasters"); // Redirect to the list of disasters
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.error(error.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisaster({ ...disaster, [name]: value });
  };

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center mt-16">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4 text-purple-700">
        Update Disaster
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Type of Disaster */}
        <div className="mb-4">
          <label htmlFor="typeOfDisaster" className="block mb-2">
            Type of Disaster
          </label>
          <input
            type="text"
            id="typeOfDisaster"
            name="typeOfDisaster"
            value={disaster.typeOfDisaster}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Severity */}
        <div className="mb-4">
          <label htmlFor="severity" className="block mb-2">
            Severity
          </label>
          <input
            type="text"
            id="severity"
            name="severity"
            value={disaster.severity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={disaster.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Other fields */}
        {/* Add more input fields for other disaster properties as needed */}

        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Update Disaster
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDisaster;
