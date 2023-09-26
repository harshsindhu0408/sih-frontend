import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDisaster } from "../redux/Actions/disasterAction"; 
import { useNavigate } from "react-router-dom";

const AddDisaster = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [typeOfDisaster, setTypeOfDisaster] = useState("");
  const [severity, setSeverity] = useState("");
  const [status, setStatus] = useState("active"); // Default to 'active'
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const disasterData = {
      typeOfDisaster,
      severity,
      status,
      contact: {
        address: {
          street,
          city,
          state,
          postalCode,
          country,
        },
      },
      description,
    };

    // Dispatch the action to create a disaster
    dispatch(createDisaster(disasterData, navigate));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen">
      <div className="w-11/12 lg:w-7/12 p-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Add Disaster</h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Type of Disaster */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="typeOfDisaster" className="sr-only">
                Type of Disaster
              </label>
              <input
                id="typeOfDisaster"
                name="typeOfDisaster"
                type="text"
                autoComplete="typeOfDisaster"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Type of Disaster"
                value={typeOfDisaster}
                onChange={(e) => setTypeOfDisaster(e.target.value)}
              />
            </div>
          </div>

          {/* Severity */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="severity" className="sr-only">
                Severity
              </label>
              <input
                id="severity"
                name="severity"
                type="text"
                autoComplete="severity"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Severity"
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
              />
            </div>
          </div>

          {/* Status */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="status" className="sr-only">
                Status
              </label>
              <select
                id="status"
                name="status"
                autoComplete="status"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Street */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="street" className="sr-only">
                Street
              </label>
              <input
                id="street"
                name="contact.address.street"
                type="text"
                autoComplete="street"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>

          {/* City */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="city" className="sr-only">
                City
              </label>
              <input
                id="city"
                name="contact.address.city"
                type="text"
                autoComplete="city"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          {/* State */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="state" className="sr-only">
                State
              </label>
              <input
                id="state"
                name="contact.address.state"
                type="text"
                autoComplete="state"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>

          {/* Postal Code */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="postalCode" className="sr-only">
                Postal Code
              </label>
              <input
                id="postalCode"
                name="contact.address.postalCode"
                type="text"
                autoComplete="postalCode"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>

          {/* Country */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <input
                id="country"
                name="contact.address.country"
                type="text"
                autoComplete="country"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          {/* Description */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                autoComplete="description"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            >
              Add Disaster
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDisaster;
