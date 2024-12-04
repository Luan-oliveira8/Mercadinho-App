import { combineReducers } from "redux";
import userReducer from "./user/slice";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
