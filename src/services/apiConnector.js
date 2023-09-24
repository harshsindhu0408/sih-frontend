import axios from "axios";
import { toast } from "react-toastify";

const apiConnector = async function ({
  method = "get",
  url,
  body = null,
  headers = null,
}) {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: body,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with an error status code
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("No response received. Network error.");
      toast.error("Network error occurred.");
    } else {
      // Something else happened while setting up the request
      console.error("Error:", error.message);
    }

    const customError = new Error("API call failed");
    customError.response = {
      data: error.response ? error.response.data : null,
      status: error.response ? error.response.status : null,
    };
    throw customError;
  }
};

export default apiConnector;
