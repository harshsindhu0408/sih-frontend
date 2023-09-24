import { AuthTypes } from "../action_types";
import apiConnector from "../../services/apiConnector";
import { agencyEndPoints } from "../../services/api";
import { async } from "q";

export const authLogin = (async) => () => {
  apiConnector({
    method: "POST",
    url: agencyEndPoints.LOGIN_API,
    body: {
      email: "of.mukesh@gmail.com",
      password: "of.mukesh@gmail.com",
    },
  });
  return {
    type: AuthTypes.LOGIN,
  };
};
