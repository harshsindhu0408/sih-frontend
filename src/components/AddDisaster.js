import React, { useState } from "react";
import apiConnector from "../services/apiConnector";
import { disasterEndPoints } from "../services/api";
import { toast } from "react-toastify";

const AddDisasterModal = ({ isOpen, onClose }) => {
  const [newDisaster, setNewDisaster] = useState({
    typeOfDisaster: "",
    severity: "",
    description: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    location: [0, 0], // Default location, change as needed
    // Add other fields as needed
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to add a new disaster
    apiConnector({
      method: "POST",
      url: disasterEndPoints.ADD_DISASTER_API, // Replace with your actual API endpoint
      body: newDisaster,
    })
      .then(() => {
        // Display a success toast
        toast.success("Disaster added successfully");

        // Clear the form fields
        setNewDisaster({
          typeOfDisaster: "",
          severity: "",
          description: "",
          address: {
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: "",
          },
          location: [0, 0],
          // Add other fields as needed
        });

        // Close the modal
        onClose();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-purple-700">
          Add New Disaster
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="typeOfDisaster" className="block mb-2">
              Type of Disaster
            </label>
            <input
              type="text"
              id="typeOfDisaster"
              value={newDisaster.typeOfDisaster}
              onChange={(e) =>
                setNewDisaster({
                  ...newDisaster,
                  typeOfDisaster: e.target.value,
                })
              }
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="severity" className="block mb-2">
              Severity
            </label>
            <input
              type="text"
              id="severity"
              value={newDisaster.severity}
              onChange={(e) =>
                setNewDisaster({
                  ...newDisaster,
                  severity: e.target.value,
                })
              }
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={newDisaster.description}
              onChange={(e) =>
                setNewDisaster({
                  ...newDisaster,
                  description: e.target.value,
                })
              }
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street" className="block mb-2">
              Street
            </label>
            <input
              type="text"
              id="street"
              value={newDisaster.address.street}
              onChange={(e) =>
                setNewDisaster({
                  ...newDisaster,
                  address: {
                    ...newDisaster.address,
                    street: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              value={newDisaster.address.city}
              onChange={(e) =>
                setNewDisaster({
                  ...newDisaster,
                  address: {
                    ...newDisaster.address,
                    city: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block mb-2">
              State
            </label>
            <input
              type="text"
              id="state"
              value={newDisaster.address.state}
              onChange={(e) =>
                setNewDisaster({
                  ...newDisaster,
                  address: {
                    ...newDisaster.address,
                    state: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postalCode" className="block mb-2">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              value={newDisaster.address.postalCode}
              onChange={(e) =>
                setNewDisaster({
                  ...newDisaster,
                  address: {
                    ...newDisaster.address,
                    postalCode: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={newDisaster.address.country}
              onChange={(e) =>
                setNewDisaster({
                  ...newDisaster,
                  address: {
                    ...newDisaster.address,
                    country: e.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full"
            >
              Add Disaster
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-full ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDisasterModal;
