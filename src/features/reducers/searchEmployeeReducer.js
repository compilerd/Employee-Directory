import { SEARCH_EMPLOYEE } from "../actions/searchEmployee";

import empdata_json from "../../data/employeedata.json";

const intialState = { empdata_json, keyword: "", filtereddata: [] };

const searchEmployeeReducer = (state = intialState, action) => {
  switch (action.type) {
    case SEARCH_EMPLOYEE:
      const keyword = action.keyword;
      const filtereddata = state.empdata_json.filter(
        (storedata) => storedata.firstname.toLowerCase().indexOf(keyword) !== -1
      );
      console.log("jiiiii", filtereddata);

      return { ...state, keyword, filtereddata };

    default:
      return state;
  }
};
export default searchEmployeeReducer;
