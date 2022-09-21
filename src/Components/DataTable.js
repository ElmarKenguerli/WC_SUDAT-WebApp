import React, {useState} from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { queryDatabase } from './QueryDatabase';
import { queryDatabaseAdmin } from './QueryDatabaseAdmin';
import { useAuthValue } from "../database/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {Button} from '@mui/material';

import {db} from '../database/firebase'
import {collection, addDoc, query, getDocs, where} from 'firebase/firestore'




function DataTable() {
  let navigate = useNavigate();
  const { currentUser } = useAuthValue();
  const[isAdmin, setAdmin] = useState(false)
  var formData;
  
  const checkAdmin = async () => {
      

  const ref = query(collection(db, "Users"));
  const q = query(ref, where("email", "==", currentUser.email));
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    

    setAdmin(doc.data().isAdmin)
  }); 
}
  checkAdmin()
 

  if(isAdmin === false)
  {
    formData = queryDatabase(currentUser.email);
  }
  else
  {
    formData = queryDatabaseAdmin(currentUser.email); 
  }
   
  
  const renderDetailsButton = (params) => {
      return (
          <strong>
              <Button
                  variant="contained"
                  sx={{bgcolor :"#2196f3" , color : "White", border: "2px solid #82d4e4be"}}
                  size="small"
                  
                  onClick={() => {
                      console.log(params.id)
                      navigate("/Assessment")
                  }}
              >
                  View
              </Button>
          </strong>
      )
  }
  
  const columns = [
    { field: 'id', headerClassName: 'col--header', headerName: 'id', minWidth: 110, flex: 1 },
    { field: 'ClientName', headerClassName: 'col--header', headerName: 'ClientName', minWidth: 150, flex: 1 },
    { field: 'ClientID', headerClassName: 'col--header', headerName: 'ClientID', minWidth: 150 , flex: 1},
    { field: 'DateOfInterview', headerClassName: 'col--header', headerName: 'DateOfInterview', minWidth: 150 , flex: 1},
    { field: 'Edit', headerClassName: 'col--header', headerName: 'Edit', minWidth: 110 , flex: 1},
    { field: 'Report', headerClassName: 'col--header', headerName: 'Report', minWidth: 110, renderCell: renderDetailsButton, flex: 1}
    ];


  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={formData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{boxShadow: 2, border: 2,borderColor: 'primary.light', borderRadius: 2, borderShadow : 3, '& .col--header': {
          backgroundColor: '#6ec6ff',
        },}}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
}
export default DataTable;
