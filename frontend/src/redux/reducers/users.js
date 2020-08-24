//////////////////////////////////////////////////////////////////////////////////////////
//                        Set Redux state with axios call. Else default to local data
//////////////////////////////////////////////////////////////////////////////////////////

const usersData = require("../../data/data-backend.json");
const initialState = [];

// Munges data to react select format
usersData.map((itm) => {
  return initialState.push({ ...itm, value: itm.id, label: itm.name });
});

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_USERS": {
      return (state = payload);
    }
    default:
      return state;
  }
};

export default users;
