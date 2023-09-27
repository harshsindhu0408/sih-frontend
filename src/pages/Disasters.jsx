import React, { useEffect, useState } from "react";
import apiConnector from "../services/apiConnector";
import { disasterEndPoints } from "../services/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import DisasterComponent from "../components/DisasterComponent";

const Disasters = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector({
          method: "GET",
          url: disasterEndPoints.FETCH_ALL_DISASTERS_API,
        });

        setDisasters(response.disasters);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching disasters");
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  

  if (!disasters) {
    return (
      <div className="spinner w-full flex items-center justify-center"></div>
    );
  }


  return (
    <div className="w-full bg-gray-100 flex  flex-col items-center justify-center">
      <div className="w-11/12 flex flex-col items-center justify-center">
        {/* Add disaster button */}
        <div className="w-8/12 mt-14 text-center">
          <Link to="/addDisaster">
            <button className="bg-indigo-500 sm:w-full md:w-4/12 md:text-2xl hover:bg-indigo-600 hover:scale-95 text-white shadow-sm rounded-full px-4 py-2 duration-300">
              Add Disaster
            </button>
          </Link>
        </div>

        {/* List of disasters  */}
        <div className="w-full mt-6">
          <div className="w-full">
            <h2 className="text-4xl ml-3 font-semibold mb-4 overflow-hidden text-indigo-600">
              Disaster Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {disasters.map((disaster) => (
                <DisasterComponent disaster={disaster} loading = {loading}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disasters;
