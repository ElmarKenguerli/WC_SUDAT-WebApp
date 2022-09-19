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
    title: {
        fontSize: 40,
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
      width: window.innerWidth /2, //the pdf viewer will take up all of the width and height
      height: window.innerHeight/2,
    },
  });
  
  // Create Document Component
  function BasicDocument() {
    const { currentUser } = useAuthValue();
    console.log({currentUser})
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>

          {/*render a single page*/}
          <Page size="A4" style={styles.page}>

            <View style={styles.section}>

                <Text style={styles.title}>Summary of Client Data</Text>
                
            </View>

            <View style={styles.section}>

              <Text break > { `Interviewer: ${currentUser.email} `}</Text>
              
            </View>

          </Page>

        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;