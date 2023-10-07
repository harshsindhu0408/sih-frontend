import React from 'react';

const AlertComponent = ({ alert }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-2">{alert.senderAgency}</h1>
      <p className="text-gray-700">Desc: {alert.description}</p>
      <p className="text-gray-700 mt-2">Severity: {alert.severity}</p>
      <p className="text-gray-700 mt-2">Timestamp: {new Date(alert.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default AlertComponent;
