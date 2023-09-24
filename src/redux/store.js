import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import authReducer from "./Reducers/authRedcuer";

const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
