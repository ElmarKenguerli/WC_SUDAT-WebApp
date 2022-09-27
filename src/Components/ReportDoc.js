import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
  Font
} from "@react-pdf/renderer";
import { useAuthValue } from "../database/AuthContext";
import { GetQuestion} from "./QuestionData"

// Create font


// Create styles
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "auto",
  },
  title: {
    fontSize: 35,
  },
  area: {
    fontSize: 28,
  },
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    
    margin: 5,
    padding: 10
  },
  viewer: {
    width: window.innerWidth / 2, //the pdf viewer will take up all of the width and height
    height: window.innerHeight ,
  },

  rows: {
    margin: "10px",
    padding: "5px",
		flexDirection: 'row',
	},
  col: {
    margin: "10px",
    padding: "5px",
    borderTop : "2px solid grey",
		flexDirection: 'row',
	},
	colHead: {
		flexGrow: 1,
    padding: "5px",
    border: "2px solid grey",
	},
  colItem: {
		flexGrow: 1,
    padding: "5px",
    
	},
  
});

// Create Document Component
const ReportDoc = (props) => {
  const { currentUser } = useAuthValue();
  let formData = props.formData
  console.log({ currentUser })
  
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document title={`Client Summary_${formData["DateOfInterview"]} `}>
        {/*render a single page*/}
        <Page wrap size="A4" style={styles.page}>
          {/* Header */}
          <Image
            style={styles.image}
            src="header.jpg"
          /> 
          

          {/* Interview Information */}
          <View style={styles.section}>
            <Text style={styles.title}>Interview Information:</Text>
          </View>

          <View style={styles.section}>
            {/* <Text > {`Interviewer: ${currentUser.email} `}</Text> */}
            <Text > {`Date Of Interview:   ${formData["DateOfInterview"]} `}</Text>
            <Text > {`Place Of Interview:   ${formData["PlaceOfInterview"]} `}</Text>
          </View>

          {/* demographics */}
          <View style={styles.section}>
            <Text style={styles.title}>Demographics:</Text>
          </View>

          <View style={styles.section}>       
            <Text > {`Education:   ${formData["Education"]} `}</Text>
            <Text > {`Gender:   ${formData["Gender"]} `}</Text>
            <Text > {`Housing Situation:   ${formData["HousingSituation"]} `}</Text>
            <Text > {`Language:   ${formData["Language"]} `}</Text>
            <Text > {`Recent Conflict:   ${formData["RecentConflict"]} `}</Text>
            <Text > {`Residence:   ${formData["Residence"]} `}</Text>     
          </View>

          {/* Results */}
          <View style={styles.section}>
            <Text style={styles.title}>Results:</Text>
          </View>

          {/* Column Headings */}
          <View style={styles.col}>
           
              <Text style={styles.colHead}>Section</Text>
              <Text style={styles.colHead}>Risk</Text>   
                  
          </View>
          {/* A Single Row in the table */}
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Risks Section</Text> 
              <Text style={styles.colItem}>Risks Section</Text>        
          </View>
  
          {/* Footer */}
          <View style={styles.section}>
            <Image
              style={styles.image}
              src="footer.jpg"
            /> 
          </View>
        </Page>

        
        
      </Document>
    </PDFViewer>
  );
}
export default ReportDoc;