import React, { useState } from "react";
import { toast } from "react-toastify";
import apiConnector from "../services/apiConnector";
import { resourceEndPoints } from "../services/api"; // Import your API endpoints
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddResources = () => {
  // Define state variables for resource properties
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [availability, setAvailability] = useState(true);
  const navigate=useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a resource object with user inputs
    const newResource = {
      name,
      quantity,
      status,
      availability,
    };

    try {
      // Send a POST request to the API to create the resource
      const headers={
        'Content-Type': "application/json",
        'Authorization':`Bearer ${sessionStorage.getItem('_token')}` 
      }
      const response = await axios.post(`http://localhost:8080/api/n1/resource/create`,newResource,{headers})
      console.log("API Response:", response);    
      toast.success("Resource created successfully");

      // Display a success message

      // Clear form inputs after successful submission
      setName("");
      setQuantity("");
      setStatus("");
      setAvailability(true);
      navigate("/resources")
    } catch (error) {
      // Handle errors and display an error message
      toast.error("Error creating resource");  
      console.error("API Error:", error);
    }
  };

  return (
    <div className="m-10">
      <h2 className="text-3xl font-semibold mb-4 text-purple-700">
        Add Resource
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Quantity</label>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded-md"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Status</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Availability</label>
          <input
            type="checkbox"
            checked={availability}
            onChange={(e) => setAvailability(e.target.checked)}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full"
        >
          Create Resource
        </button>
      </form>
    </div>
  );
};

export default AddResources;
