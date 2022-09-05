import React, { Component } from 'react';  
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";  
  
class DataGrid extends Component {  
  render() {  
     const data = [{  
         name: 'Ayaan', surname: "Kanji",
         time: '15:26',  link: "View"  
         },{  
         name: 'Ahana', surname: "De Sousa", 
         time: '12:56',  link: "View" 
         },{  
         name: 'Peter', surname: "Bartholomew",
         time: '12:31' ,  link: "View"      
         },{  
         name: 'Virat', surname: "Cristwood",
         time: "07:15" ,  link: "View" 
         },{  
         name: 'Rohit',  surname: "Swingler",
         time: "09:00" ,  link: "View" 
         },{  
         name: 'Dhoni',  surname: "Olatundji",
         time: "11:05"  ,  link: "View" 
         }]  

     const columns = [
       {  
       Header: 'Name',  
       accessor: 'name'  
       },
       {  
       Header: 'Surname',  
       accessor: 'surname'  
       },
       {  
      Header: 'Time',  
      accessor: 'time'  
      },
      {  
      Header: 'Link',  
      accessor: 'link'  
      }
         
      
      ]  
    return (  
          <div>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {6}  
                  pageSizeOptions = {[2,4, 6]}  
              />  
          </div>        
    )  
  }  
}  
export default DataGrid;  