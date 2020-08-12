import React, { Component } from "react";
import { searchEmployee } from "../features/actions/searchEmployee";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./employee.css";

class EmployeeSearch extends Component {
  render() {
    const { searchEmployee, keyword } = this.props;

    return (
      <div className="col-xs-12 box_search">
        <form onSubmit={this.onFormSubmit}>
          <div className="search_wrp mb-15">
            <div className="input-group">
              <input
                type="text"
                name="keyword"
                className="form-control"
                placeholder="Search Employee"
                value={keyword}
                onChange={(e) => searchEmployee(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(search) {
  console.log(search);
  return { keyword: search.search.keyword };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchEmployee,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeSearch);
