import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getUserDetails } from '../service/action';


const useStyles = makeStyles({
  table: {
    minWidth: 950,
  },
});

const UserTable = () => {
// style 
    const classes = useStyles();

//   initial_state 
  const [userData, setuserData] = useState([]);

  const dispatch = useDispatch();

//   initial api trigger 
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

//  value assigned to state from localStorage 
  useEffect(() => {
    setuserData(JSON.parse(localStorage.getItem("userDetailsData")))
  },[localStorage.getItem("userDetailsData")])

  return (
    <>
      <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table"  className={classes.table}>
          <TableHead>
          <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Phone</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {userData.map((row, index) => (
              <TableRow key={index}>
              <TableCell>{row.user.name.title  + " " + row.user.name.first + " " + row.user.name.last}</TableCell>
              <TableCell>{row.user.username}</TableCell>
              <TableCell>{row.user.gender}</TableCell>
              <TableCell>{row.user.dob}</TableCell>
              <TableCell>{row.user.email}</TableCell>
              <TableCell>{row.user.password}</TableCell>
              <TableCell>{row.user.phone}</TableCell>
              </TableRow>
          ))}
          </TableBody>
      </Table>
      </TableContainer>

    </>
  );
}

export default UserTable;