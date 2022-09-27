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
import {GetQuestion, allQuestions} from "./QuestionData"

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
    backgroundColor: "grey"
	},
  colItem: {
		flexGrow: 1,
    padding: "5px",
    
	},
  
});

const getNumberYes = (inclusiveMin,inclusiveMax,affirmative,formData) =>{
  let numberYes = 0;
       for (let i = inclusiveMin; i <= inclusiveMax; i++) {
       if (formData[allQuestions[i].name] === "Yes") {
        // significantValues.push({question:allQuestions[i].question,
        //    answer:formData[allQuestions[i].name],
        //   name:allQuestions[i].name
        // })
        numberYes++;

      }
      console.log(numberYes);
      
    }
    return numberYes;
}
const getSliderTotal = (inclusiveMin,inclusiveMax,formData) =>{
  let sliderTotal = 0;
       for (let i = inclusiveMin; i <= inclusiveMax; i++) {
       if (formData[allQuestions[i].name] >= 1) {
        // significantValues.push({question:allQuestions[i].question,
        //    answer:formData[allQuestions[i].name],
        //   name:allQuestions[i].name
        // })
        sliderTotal+= formData[allQuestions[i].name];

      }
      console.log(sliderTotal);
    }
    return sliderTotal;
}
// Create Document Component
const ReportDoc = (props) => {
  const { currentUser } = useAuthValue();
  let formData = props.formData
  console.log({ currentUser })
  let section1Yes = getNumberYes(1,10,"Yes",formData)
  let section1Slider = getSliderTotal(1,10,formData)

  console.log("The total Yes are: " + section1Yes);
  console.log("The total Slider Values are: " + section1Slider);
  
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document title={`Client Summary_${formData["DateOfInterview"] }_${formData["File"] } `}>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
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
          {/* A Rows in the table */}
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Individual Risk Factors  </Text> 
              <Text style={styles.colItem}>Section 1 Yes: {section1Yes} Section 2 Slider {section1Slider}</Text>        
          </View>

          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Trauma                          </Text> 
              <Text style={styles.colItem}>0</Text>        
          </View>
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Depression and Anxiety</Text> 
              <Text style={styles.colItem}>0</Text>        
          </View>

        </Page>

        <Page wrap size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image
              style={styles.image}
              src="footer.jpg"
            /> 
          </View>
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Family & Community    </Text> 
              <Text style={styles.colItem}>0</Text>        
          </View>
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Protective Factors        </Text> 
              <Text style={styles.colItem}>0</Text>        
          </View>
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Treatment Eagerness   </Text> 
              <Text style={styles.colItem}>0</Text>        
          </View>
          
          {/* Footer */}
          
        </Page>
  
          
        

        
        
      </Document>
    </PDFViewer>
  );
}
export default ReportDoc;