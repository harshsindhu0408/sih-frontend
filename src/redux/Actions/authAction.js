import { AuthTypes } from "../action_types";
import apiConnector from "../../services/apiConnector";
import { agencyEndPoints } from "../../services/api";
import { toast } from "react-toastify";

// Action to handle user login
export const authLogin = (user_data) => {
  return async (dispatch) => {
    try {
      // Send a login request to the API
      const response = await apiConnector({
        method: "POST",
        url: agencyEndPoints.LOGIN_API,
        body: user_data,
      });

      // Assuming the API response contains a 'token' field
      const token = response.token;

      // Store the token in sessionStorage
      sessionStorage.setItem("_token", token);

      // Dispatch the LOGIN action to update the Redux store
      dispatch({
        type: AuthTypes.LOGIN,
        payload: { token }, // You can store additional user data in the payload if needed
      });

      // Show a success toast
      toast.success("Login successfully!");
    } catch (error) {
      // Handle API errors and show an error toast
      toast.error(error.response.data.message);
    }
  };
};

// Action to handle user logout
export const authLogout = () => {
  return (dispatch) => {
    // Remove the token from sessionStorage
    sessionStorage.removeItem("_token");

    // Dispatch the LOGOUT action to update the Redux store
    dispatch({
      type: AuthTypes.LOGOUT,
    });

    // Show a success toast
    toast.success("Logged out");
  };
};

// Action to handle user registation
export const authRegister = (user_data) => {
  return async () => {
    try {
      // Send a register request to the API
      const response = await apiConnector({
        method: "POST",
        url: agencyEndPoints.REGISTER_API,
        body: user_data,
      });

      // Show a success toast
      toast.success("Successfully registered!");
    } catch (error) {
      // Handle API errors and show an error toast
      toast.error(error.response.data.message);
    }
  };
};
