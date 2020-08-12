export const SEARCH_EMPLOYEE = "SEARCH_EMPLOYEE";
export function searchEmployee(keyword) {
  const action = {
    type: SEARCH_EMPLOYEE,
    keyword,
  };
  return action;
}
