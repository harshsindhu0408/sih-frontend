import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAgencies } from '../redux/Actions/agencyAction';
import AgencyComponent from '../components/AgencyComponent';

const Agencies = () => {
  const agencies = useSelector((state) => state.agencies);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    sortBy: 'none',
    filterState: '',
    filterCity: '',
    searchQuery: '',
    filterDisasterType: '',
  });
  const [filteredAgencies, setFilteredAgencies] = useState([]);

  useEffect(() => {
    dispatch(getAllAgencies());
  }, [dispatch]);

  useEffect(() => {
    if (agencies.allAgencies.agency) {
      setFilteredAgencies(agencies.allAgencies.agency);
    }
  }, [agencies.allAgencies.agency]);

  const applyFilters = useCallback(() => {
    let filteredData = [...agencies.allAgencies.agency];

    for (const key in filters) {
      if (filters[key]) {
        if (key === 'sortBy') {
          // Sort by selected option
          if (filters[key] === 'state') {
            filteredData.sort((a, b) => a.contact.address.state.localeCompare(b.contact.address.state));
          } else if (filters[key] === 'timestamps') {
            filteredData.sort((a, b) => new Date(b.lastReportedActivity) - new Date(a.lastReportedActivity));
          } else if (filters[key] === 'registeredAt') {
            filteredData.sort((a, b) => new Date(b.registeredAt) - new Date(a.registeredAt));
          }
        } else if (key === 'searchQuery') {
          // Filter by search query
          filteredData = filteredData.filter((agency) =>
            agency.name.toLowerCase().includes(filters[key].toLowerCase())
          );
        } else if (key === 'filterDisasterType') {
          // Filter by disaster type
          filteredData = filteredData.filter((agency) =>
            agency.typeofdisaster.toLowerCase().includes(filters[key].toLowerCase())
          );
        } else {
          // Filter by state and city
          filteredData = filteredData.filter((agency) =>
            agency.contact.address[key].toLowerCase().includes(filters[key].toLowerCase())
          );
        }
      }
    }

    setFilteredAgencies(filteredData);
  }, [filters, agencies]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

  if (agencies.loading || !filteredAgencies) {
    return <div className="spinner w-full flex items-center justify-center"></div>;
  }

  return (
    <div >
      <div className='w-11/12'>
        {/* Filter options */}
        <div className="mb-4">
    <label className="block font-bold">Sort by:</label>
    <select
      className="w-full px-2 py-1 border border-gray-300 rounded-md"
      name="sortBy"
      value={filters.sortBy}
      onChange={handleInputChange}
    >
      <option value="none">None</option>
      <option value="state">State</option>
      <option value="timestamps">Timestamps</option>
      <option value="registeredAt">Registered At</option>
    </select>
  </div>
  <div className="mb-4">
    <label className="block font-bold">Filter by State:</label>
    <input
      className="w-full px-2 py-1 border border-gray-300 rounded-md"
      type="text"
      name="filterState"
      value={filters.filterState}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <label className="block font-bold">Filter by City:</label>
    <input
      className="w-full px-2 py-1 border border-gray-300 rounded-md"
      type="text"
      name="filterCity"
      value={filters.filterCity}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <label className="block font-bold">Search by Agency Name:</label>
    <input
      className="w-full px-2 py-1 border border-gray-300 rounded-md"
      type="text"
      name="searchQuery"
      value={filters.searchQuery}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <label className="block font-bold">Filter by Disaster Type:</label>
    <input
      className="w-full px-2 py-1 border border-gray-300 rounded-md"
      type="text"
      name="filterDisasterType"
      value={filters.filterDisasterType}
      onChange={handleInputChange}
    />
  </div>
</div>
<div>

        {filteredAgencies.map((agency) => (
          <AgencyComponent
            key={agency._id}
            agency={agency}
            coordinates={[
              agency.location.coordinates[1],
              agency.location.coordinates[0],
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default Agencies;
