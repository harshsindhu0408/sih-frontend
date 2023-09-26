import React, { useEffect, useState } from "react";
import apiConnector from "../services/apiConnector";
import { disasterEndPoints } from "../services/api";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams} from "react-router-dom";

const DisasterDetails = () => {
  // Extract the disasterId from the URL
  const { disasterId } = useParams();

  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector({
          method: "GET",
          url: disasterEndPoints.GET_DISASTER_API + '/' + disasterId,
        });

        setDisasters(response.disaster);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching disasters");
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(disasters);

  return (
    <div>
      {/* Display the details of the disaster */}
      <h2>Disaster Details</h2>
      <p>Disaster ID: {disasterId}</p>
      {/* Display other details of the disaster */}
    </div>
  );
};

export default DisasterDetails;
