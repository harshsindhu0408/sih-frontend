import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import authReducer from "./Reducers/authRedcuer";
import profileReducer from "./Reducers/profileReducer";

const store = createStore(
  combineReducers({
    auth: authReducer,
    profile: profileReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
