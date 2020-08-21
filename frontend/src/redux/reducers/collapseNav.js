//////////////////////////////////////////////////////////////////////////////////////////
//                        Set Redux state with collapsible navigation
//////////////////////////////////////////////////////////////////////////////////////////

const initialState = {
  sidebarShow: "responsive",
};

const collapseNav = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "SET":
      return { ...state, ...rest };
    default:
      return state;
  }
};

export default collapseNav;
