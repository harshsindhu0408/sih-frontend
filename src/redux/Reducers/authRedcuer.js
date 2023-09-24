import { AuthTypes } from "../action_types";

const initialState = {
  user: {},
  isLogged: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return { ...state, isLogged: true, token: action.payload };
    case AuthTypes.LOGOUT:
      return { ...state, isLogged: false };
    default:
      return state;
  }
};

export default authReducer;
