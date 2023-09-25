import { ProfileTypes } from "../action_types";

// Define the initial state for the profile
const initialState = {
  accountInfo: null, // This will store the fetched account information
  isLoading: false, // Indicates whether a request is in progress
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProfileTypes.GET_ACCOUNT_REQUEST:
    case ProfileTypes.UPDATE_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProfileTypes.GET_ACCOUNT_SUCCESS:
    case ProfileTypes.UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        accountInfo: action.payload, // Update the account information with the received data
      };
    default:
      return state;
  }
};

export default profileReducer;
