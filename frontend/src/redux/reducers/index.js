import { combineReducers } from "redux";

import collapseNav from "./collapseNav";
import pageLoading from "./pageLoading";
import overallDefaultingStat from "./overallDefaultingStat";

export default combineReducers({
  collapseNav,
  pageLoading,
  overallDefaultingStat,
});
