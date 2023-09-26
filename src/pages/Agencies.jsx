import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAgencies } from '../redux/Actions/agencyAction';
import AgencyComponent from '../components/AgencyComponent';

const Agencies = () => {
  const agencies = useSelector((state) => state.agencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAgencies());
  }, [dispatch]);
  
  const temp = agencies.allAgencies.agency;
  console.log("temp data -> ", temp);
  if (agencies.loading || !temp) {
    return <div className="spinner w-full flex items-center justify-center"></div>;
  }

  return (
    <div>
      {temp.map((agency) => (
        <AgencyComponent
          key={agency._id} // Assuming _id is the unique identifier for each agency
          agency={agency}
          coordinates={[
            agency.location.coordinates[1],
            agency.location.coordinates[0],
          ]}
        />
      ))}
    </div>
  );
};

export default Agencies;
