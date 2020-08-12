export const EMPLOYEES_DATA = {
  GET_EMPLOYEE: "EMPLOYEES_DATA_FETCH",
  ADD_EMPLOYEE: "EMPLOYEES_DATA_ADD",
  DELETE_EMPLOYEE: "EMPLOYESS_DATA_DELETE",
  SEARCH_EMPLOYEE: "EMPLOYEES_DATA_SEARCH",
};

export function getEmployees(payload) {
  const action = {
    type: EMPLOYEES_DATA.GET_EMPLOYEE,
    payload,
  };
  return action;
}

export function addEmployee(payload) {
  const action = {
    type: EMPLOYEES_DATA.ADD_EMPLOYEE,
    payload,
  };
  return action;
}
export function deleteEmployee(index) {
  const action = {
    type: EMPLOYEES_DATA.DELETE_EMPLOYEE,
    index,
  };
  return action;
}
