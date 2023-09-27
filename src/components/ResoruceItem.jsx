import React from 'react'

export default function ResoruceItem({resource}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-3">
      <h3 className="text-lg font-semibold mb-5">{resource.name}</h3>
      <p>Status: {resource.status}</p>
      <p>Quantity: {resource.quantity}</p>
      <p>Availability: {resource.availability ? "Available" : "Not Available"}</p>
      {/* Add additional resource properties here */}
    </div>
  );
}
