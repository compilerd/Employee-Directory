import { createStore, combineReducers, applyMiddleware } from "redux";

import searchEmployeeReducer from "../features/reducers/searchEmployeeReducer";
import employeeReducer from "../features/reducers/employeeReducer";

import thunk from "redux-thunk";

const middleware = [thunk];

const allReducers = combineReducers({
  search: searchEmployeeReducer,
  employees: employeeReducer,
});

const store = createStore(
  allReducers,

  applyMiddleware(...middleware)
);

export default store;
