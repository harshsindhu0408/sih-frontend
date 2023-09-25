import React, { useEffect } from "react";
import { getAccountInfo } from "../redux/Actions/profileAction";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const state = useSelector((state) => state.profile);
  const agency = useSelector((state) => state.profile.accountInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccountInfo());
  });
  return (
    <>
      {state.loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {agency && (
            <div className="profile">
              <h1>Agency Profile</h1>
              <div className="profile-info">
                <h2>Name: {agency.name}</h2>
                <p>Email: {agency.email}</p>
                <p>Phone Number: {agency.phoneNumber}</p>
                <p>Expertise: {agency.expertise.join(", ")}</p>
                <p>Last Reported Activity: {agency.lastReportedActivity}</p>
                <p>Registered At: {agency.registeredAt}</p>
              </div>
              <div className="profile-address">
                <h2>Address</h2>
                <p>Street: {agency.contact.address.street}</p>
                <p>City: {agency.contact.address.city}</p>
                <p>State: {agency.contact.address.state}</p>
                <p>Postal Code: {agency.contact.address.postalCode}</p>
                <p>Country: {agency.contact.address.country}</p>
              </div>
              <div className="profile-location">
                <h2>Location</h2>
                <p>Type: {agency.location.type}</p>
                <p>
                  Coordinates: ({agency.location.coordinates[0]},{" "}
                  {agency.location.coordinates[1]})
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
