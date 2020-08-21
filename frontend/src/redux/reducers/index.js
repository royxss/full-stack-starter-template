import { combineReducers } from "redux";

import collapseNav from "./collapseNav";
import pageLoading from "./pageLoading";
import users from "./users";

export default combineReducers({
  collapseNav,
  pageLoading,
  users,
});
