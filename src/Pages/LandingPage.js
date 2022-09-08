import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import MuiDrawer from '../Components/MuiDrawer'
import PDF from "../Assets/reportTest.pdf";

//Firebase imports
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../database/firebase'

import PostAddTwoToneIcon from '@mui/icons-material/PostAddTwoTone';
import Button from '@material-ui/core/Button';
import {Box} from '@mui/material';
import DataGrid from "../Components/DataGrid"


export const LandingPage = () => {



  const [users, setUsers] = useState([])

  /* function to get all tasks from firestore - fills 'users' array with data from Users Collection */ 
    useEffect(() => {
      const q = query(collection(db, 'Users'))
      onSnapshot(q, (querySnapshot) => {
        setUsers(querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
      console.log("Reading data");
    },[])


  let navigate = useNavigate();
  
  return (
    <div>
        <MuiDrawer/>

        <Box textAlign="center" >
          <Button 
          size="large" 
          className='.center'
          style={
            { 
              width: 300, 
              height: 100, 
              fontSize: 25, 
              border: "2px solid dodgerblue", 
              margin:0, 
              color: "dodgerblue" 
              }}  
          startIcon={<PostAddTwoToneIcon style={{ fontSize: "80px" }}/>}  
          onClick={() => {
            navigate("/Assessment");
          }}>
          {" "}
          New Assessment 
          </Button>
          
          
        </Box>
        
        <Box textAlign="center" width="1000" margin="80px" >
          <DataGrid/>
          <br></br>
          <h4>View Report Below</h4>

          <embed
            src={PDF}
            type="application/pdf"
            height={800}
            width={500}
          />

          
        
        </Box>
          
        <Box  margin="80px" >
           <p><br></br>List of Users: </p>
          {/* Display users */}         
          {/* {users.map((user) => ( <p>{user.data.userName}</p> ))} */}
          
        
        </Box>
         

          

      </div>
  )
}

export default LandingPage