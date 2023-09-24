import axios from "axios";

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
    const customError = new Error("API call failed");
    customError.response = {
      data: error.response.data,
      status: error.response.status,
    };
    throw customError;
  }
};

export default apiConnector;
