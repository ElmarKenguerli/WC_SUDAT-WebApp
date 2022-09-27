import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { useAuthValue } from "../database/AuthContext";

// Create styles
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "auto",
  },
  title: {
    fontSize: 40,
  },
  area: {
    fontSize: 28,
  },
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth / 2, //the pdf viewer will take up all of the width and height
    height: window.innerHeight ,
  },
});

// Create Document Component
function ReportDoc(props) {
  const { currentUser } = useAuthValue();
  let formData = props.formData
  console.log({ currentUser })
  
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <Image
            style={styles.image}
            src="header.jpg"
          /> 
          

          {/* Interview Information */}
          <View style={styles.section}>
            <Text style={styles.area}>Interview Information:</Text>
          </View>
          <View style={styles.section}>
            {/* <Text > {`Interviewer: ${currentUser.email} `}</Text> */}
            <Text > {`Date Of Interview: ${formData["DateOfInterview"]} `}</Text>
            <Text > {`Place Of Interview: ${formData["PlaceOfInterview"]} `}</Text>
          </View>

          {/* demographics */}
          <View style={styles.section}>
            <Text style={styles.area}>Demographics:</Text>
          </View>
          <View style={styles.section}>
            <Text > {`Client Name: ${formData["ClientName"]} `}</Text>
            <Text > {`Country: ${formData["Country"]} `}</Text>
            <Text > {`Date Of Birth: ${formData["DateOfBirth"]} `}</Text>
            <Text > {`Education: ${formData["Education"]} `}</Text>
            <Text > {`Gender: ${formData["Gender"]} `}</Text>
            <Text > {`Housing Situation: ${formData["HousingSituation"]} `}</Text>
            <Text > {`Language: ${formData["Language"]} `}</Text>
            <Text > {`Recent Conflict: ${formData["RecentConflict"]} `}</Text>
            <Text > {`Residence: ${formData["Residence"]} `}</Text>
          </View>

        </Page>
      </Document>
    </PDFViewer>
  );
}
export default ReportDoc;