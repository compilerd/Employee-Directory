import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteEmployee } from "../features/actions/Employees";
import "../App.css";
import { withStyles, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "../components/pagination";
import EmployeeSearch from "../components/employeeSearch";
import PropTypes from "prop-types";
import "./employee.css";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class EmployeedataTable extends Component {
  handleDelete(index) {
    this.props.deleteEmployee(index);
  }

  handleChangePage = (data) => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex,
    });
  };

  render() {
    // var {
    //   totalPages,
    //   currentPage,
    //   pageLimit,
    //   startIndex,
    //   endIndex,
    // } = this.state;

    // var rowsPerPage = [];

    // rowsPerPage = this.props.empdata.employees.slice(startIndex, endIndex + 1);
    var { empdata, keyword } = this.props;

    if (keyword) {
      empdata = empdata.filter((emp) => {
        return emp.firstname.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    return (
      <div className="col-md-10 offset-md-1">
        <h2
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Employee Details
        </h2>
        <EmployeeSearch />
        <TableContainer component={Paper}>
          <Table className={useStyles.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">First Name</StyledTableCell>
                <StyledTableCell align="right">Last Name&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Mobile&nbsp;</StyledTableCell>
                <StyledTableCell align="right">City&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Options&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {empdata.map((emp, index) => (
                
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {emp.firstname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {emp.lastname}
                  </StyledTableCell>
                  <StyledTableCell align="right">{emp.email}</StyledTableCell>
                  <StyledTableCell align="right">{emp.mobile}</StyledTableCell>
                  <StyledTableCell align="right">{emp.city}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button
                      type="button"
                      onClick={() => this.handleDelete(index)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="col-xs-12 text-center">
          <Pagination
            totalRecords={empdata.employees.length}
            pageLimit={pageLimit || 5}
            initialPage={1}
            pagesToShow={5}
            onChangePage={this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}
// EmployeedataTable.propTypes = {
//   keyword: PropTypes.string,
//   onSearch: PropTypes.func.isRequired,
// };
function mapStateToProps(search) {
  const empdata = search.employees;
  const keyword = search.search.keyword;
  console.log(empdata, keyword);
  return { empdata, keyword };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteEmployee,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeedataTable);
