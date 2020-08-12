import { EMPLOYEES_DATA } from "../actions/Employees";

import empdata_json from "../../data/employeedata.json";

const employeeReducer = (state = empdata_json, action) => {
  switch (action.type) {
    case EMPLOYEES_DATA.GET_EMPLOYEE:
      let empdata = [...state, action.payload];
      return empdata;
    case EMPLOYEES_DATA.ADD_EMPLOYEE:
      let newempdata = [...state, action.payload];
      return newempdata;
    case EMPLOYEES_DATA.DELETE_EMPLOYEE:
      let storedata = [...state];

      let pos = action.index;
      storedata.splice(pos, 1);
      return storedata;

    default:
      return state;
  }
};

export default employeeReducer;
