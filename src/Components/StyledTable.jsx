
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { queryDatabase } from './QueryDatabase';
import { useAuthValue } from "../database/AuthContext";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {

const { currentUser } = useAuthValue();
const formData = queryDatabase(currentUser.email);

const rows = (
  formData.map((ClientName, ClientID, DateOfInterview, Edit, Report) => [{
    ClientName: ClientName, ClientID: ClientID, DateOfInterview: DateOfInterview, Edit: Edit, Report: Report
  }])
)


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell align="center">ClientName</StyledTableCell>
            <StyledTableCell align="center">ClientID</StyledTableCell>
            <StyledTableCell align="center">DateOfInterview</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Report</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{row.ClientName}</StyledTableCell>
              <StyledTableCell align="center">{row.ClientID}</StyledTableCell>
              <StyledTableCell align="center">{row.DateOfInterview}</StyledTableCell>
              <StyledTableCell align="center">{row.Edit}</StyledTableCell>
              <StyledTableCell align="center">{row.Report}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
