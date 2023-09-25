import { AuthTypes } from "../action_types";

const initialState = {
  loading: false,
  isLoggedin: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedin: true,
        token: action.payload,
      };
    case AuthTypes.LOGIN_FAILED:
      return { ...state, loading: false };

    case AuthTypes.SIGNUP_REQUEST:
      return { ...initialState, loading: true };
    case AuthTypes.SIGNUP_SUCCESS:
      return { ...initialState, loading: false };
    case AuthTypes.SIGNUP_FAILED:
      return { ...initialState, loading: false };

    case AuthTypes.LOGOUT:
      return { ...initialState, isLoggedin: false };
    default:
      return state;
  }
};

export default authReducer;
