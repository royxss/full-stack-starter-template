import React, { useState, useEffect } from "react";
import Select from "react-select";
import { CButton, CInputGroup, CInputGroupPrepend } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { asyncActionFetchUsers } from "../redux/actions/actionCreator";

function TheHeaderSearchBar() {
  const [selectedOption, setselectedOption] = useState(null);

  // dispatch redux action on component will mount
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncActionFetchUsers());
  }, [dispatch]);

  // access redux state for initial set of users
  const selections = useSelector((state) => state.users);

  // update state on change
  const handleChange = () => {
    setselectedOption({ selectedOption });
  };

  return (
    <CInputGroup>
      <CInputGroupPrepend className="pt-2">
        <CButton type="button" disabled>
          <CIcon name="cil-magnifying-glass" />{" "}
        </CButton>
      </CInputGroupPrepend>
      <Select
        className="border-none border-white form-control"
        placeholder="Start typing here..."
        value={selectedOption}
        onChange={handleChange}
        options={selections}
        openMenuOnClick={false}
      />
    </CInputGroup>
  );
}

export default TheHeaderSearchBar;
