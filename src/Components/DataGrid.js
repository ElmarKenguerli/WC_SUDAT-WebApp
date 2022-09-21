import React, { Component } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { useAuthValue } from "../database/AuthContext";
import { queryDatabase } from './QueryDatabase';
import { useNavigate, Link } from "react-router-dom";

const DataGrid = (props) => { //extends Component {
  let navigate = useNavigate();

  const { currentUser } = useAuthValue();
  const formData = queryDatabase(currentUser.email);

  const data = (
    formData.map((ClientName, ClientID, DateOfInterview, Edit, Report) => [{
      ClientName: ClientName, ClientID: ClientID, DateOfInterview: DateOfInterview, Edit: Edit, Report: Report
    }])
  )

  // const data = [{
  //   name: 'Ayaan', surname: "Kanji",
  //   time: '15:26', link: "View"
  // }, {
  //   name: 'Ahana', surname: "De Sousa",
  //   time: '12:56', link: "View"
  // }, {
  //   name: 'Peter', surname: "Bartholomew",
  //   time: '12:31', link: "View"
  // }, {
  //   name: 'Virat', surname: "Cristwood",
  //   time: "07:15", link: "View"
  // }, {
  //   name: 'Rohit', surname: "Swingler",
  //   time: "09:00", link: "View"
  // }, {
  //   name: 'Dhoni', surname: "Olatundji",
  //   time: "11:05", link: "View"
  // }]
  const handleChange = () => {
    navigate("/Assessment");
  }

  const columns = [
    {
      Header: 'Client Name',
      accessor: 'ClientName'
    },
    {
      Header: 'Client ID',
      accessor: 'ClientID'
    },
    {
      Header: 'Date',
      accessor: 'DateOfInterview'
    },
    {
      Header: 'Edit',
      accessor: 'Edit',
      //field: "edit",
      //accessor: [link],
      //render: rowData=><Link href={"/Assessment"} target="_blank">{"edit"}</Link>
      // Cell: ({row}) => <Link to="/Assessment">edit</Link>
      Cell: ({ row }) => <button onClick={(e) => { console.log("Inside onClick function"); navigate("/Assessment"); }}>edit</button>
    },
    {
      Header: 'Survey',
      accessor: 'Report'
    }

  ]

  return (
    <div>
      <ReactTable
        data={formData}
        columns={columns}
        defaultPageSize={6}
        pageSizeOptions={[2, 4, 6]}
      />
    </div>

  )
}


export default DataGrid;  