//////////////////////////////////////////////////////////////////////////////////////////
//                        Import Libraries
//////////////////////////////////////////////////////////////////////////////////////////
import axios from "axios";
//////////////////////////////////////////////////////////////////////////////////////////
//                        API and action for backend user queries
//////////////////////////////////////////////////////////////////////////////////////////

export function asyncActionFetchUsers() {
  const API = "/api/getUser/";
  //const API = 'https://jsonplaceholder.typicode.com/users'

  return (dispatch) => {
    axios
      .get(API)
      .then(dispatch(pageLoading(1))) //Start loading screen
      .then((response) => {
        const users = response.data;
        dispatch({
          type: "FETCH_USERS",
          payload: users,
        });
        dispatch(pageLoading(0)); //Stop loading screen
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
        });
        dispatch(pageLoading(0)); //Stop loading screen
        // Default to initial state
        console.log("API cannot be called...");
      });
  };
}

//////////////////////////////////////////////////////////////////////////////////////////
//                        Action for miscellaneous
//////////////////////////////////////////////////////////////////////////////////////////

export function collapseNav(val) {
  return {
    type: "SET",
    sidebarShow: val,
  };
}

export function pageLoading(val) {
  return {
    type: "PAGE_LOADING",
    payload: val,
  };
}
