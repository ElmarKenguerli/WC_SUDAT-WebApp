import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { queryDatabase } from "./QueryDatabase";
import { queryDatabaseAdmin } from "./QueryDatabaseAdmin";
import { useAuthValue } from "../database/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { writeToDatabase, getFormDefaults } from "./WriteToDatabase";
import { db } from "../database/firebase";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";

function DataTable() {
  let navigate = useNavigate();
  const { currentUser } = useAuthValue();
  const [isAdmin, setAdmin] = useState(false);
  var formData;

  const checkAdmin = async () => {
    const ref = query(collection(db, "Users"));
    const q = query(ref, where("email", "==", currentUser.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setAdmin(doc.data().isAdmin);
    });
  };
  checkAdmin();

  if (isAdmin === false) {
    formData = queryDatabase(currentUser.email);
  } else {
    formData = queryDatabaseAdmin(currentUser.email);
  }

  const renderEditButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{
            bgColor: "#57cae1",
            color: "White",
            border: "2px solid #82d4e4be",
          }}
          size="small"
          onClick={() => {
            navigate("/Assessment", { state: { docID: params.id } });
          }}
        >
          Edit
        </Button>
      </strong>
    );
  };

  
  const renderReportButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#57cae1",
            color: "White",
            border: "2px solid #82d4e4be",
          }}
          size="small"
          onClick={async(e) => {
            let formData2 = await getFormDefaults(params.id);
            console.log(formData2)
            navigate("/ReportPage", { state: { formData: formData2 } });
          }}
        >
          View
        </Button>
      </strong>
    );
  };

  const columns = [
    {
      field: "ClientFileNumber",
      headerClassName: "col--header",
      headerName: "ClientFileNumb",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "ClientName",
      headerClassName: "col--header",
      headerName: "Client Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "ClientID",
      headerClassName: "col--header",
      headerName: "Client ID",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "DateOfInterview",
      headerClassName: "col--header",
      headerName: "Date of Interview",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "Edit",
      headerClassName: "col--header",
      headerName: "Edit",
      minWidth: 110,
      renderCell: renderEditButton,
      flex: 1,
    },
    {
      field: "Report",
      headerClassName: "col--header",
      headerName: "Report",
      minWidth: 110,
      renderCell: renderReportButton,
      flex: 1,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={formData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "#57cae1",
          borderRadius: 2,
          borderShadow: 3,
          "& .col--header": {
            backgroundColor: "#57cae1",
          },
        }}
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
