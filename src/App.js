import React from "react";

import "./App.css";
import EmployeedataTable from "./components/employeeTable";

//import { fetchEmployees } from "./features/actions/fetchEmployees";

function App(props) {
  return (
    <div className="App">
      <div className="App-header App-link">Employee Directory</div>

      <EmployeedataTable />
      <br />
    </div>
  );
}

export default App;
