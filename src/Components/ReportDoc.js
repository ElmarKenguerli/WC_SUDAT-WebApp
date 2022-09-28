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
        if(i == 21)
        {
          console.log(allQuestions[i].nameA)
          if(formData[allQuestions[i].nameA] === "Yes")
          {
            numberYes++;
          }
          if(formData[allQuestions[i].nameB] === "Yes")
          {
            numberYes++;
          }
          if(formData[allQuestions[i].nameC] === "Yes")
          {
            numberYes++;
          }
          if(formData[allQuestions[i].nameD] === "Yes")
          {
            numberYes++;
          }
        }
       else if(formData[allQuestions[i].name] === "Yes") {
        // significantValues.push({question:allQuestions[i].question,
        //    answer:formData[allQuestions[i].name],
        //   name:allQuestions[i].name
        // })
        numberYes++;

      }
      
      
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
      
    }
    return sliderTotal;
}
// Create Document Component
const ReportDoc = (props) => {
  const { currentUser } = useAuthValue();
  let formData = props.formData
  
 

  let section1Yes = getNumberYes(12,16,"Yes",formData)
  

  let section2Yes = getNumberYes(21,21,"Yes",formData)
  let section2Slider = getSliderTotal(17,17,formData)

  let section3Yes = getNumberYes(23,35,"Yes",formData)
  let section3Slider = getSliderTotal(18,29,formData)

  let section4Yes = getNumberYes(37,48,"Yes",formData)
  let section4Slider = getSliderTotal(30,42,formData)

  let section5Yes = getNumberYes(50,67,"Yes",formData)
  let section5Slider = getSliderTotal(43,55,formData)

  let section6Yes = getNumberYes(69,81,"Yes",formData)
  let section6Slider = getSliderTotal(56,73,formData)
  
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document title={`Client Summary_${formData["DateOfInterview"] }_${formData["ClientFileNumber"] } `}>
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
            <View style={styles.section}>  
            {/* <Text > {`Interviewer: ${currentUser.email} `}</Text> */}
            </View>
            <View style={styles.section}>  
                <Text > {`Date Of Interview:   ${formData["DateOfInterview"]} `}</Text>
            </View>
            <View style={styles.section}>  
                <Text > {`Place Of Interview:   ${formData["PlaceOfInterview"]} `}</Text>
            </View>
          </View>

          {/* demographics */}
          <View style={styles.section}>
            <Text style={styles.title}>Demographics:</Text>
          </View>

          <View style={styles.section}>     
            <View style={styles.section}>  
              <Text > {`Education:   ${formData["Education"]} `}</Text>
            </View>
            <View style={styles.section}>  
              <Text > {`Gender:   ${formData["Gender"]} `}</Text>
            </View>
            <View style={styles.section}>
              <Text > {`Housing Situation:   ${formData["HousingSituation"]} `}</Text>
            </View>
            <View style={styles.section}>
              <Text > {`Language:   ${formData["Language"]} `}</Text>
            </View>
            <View style={styles.section}>
              <Text > {`Recent Conflict:   ${formData["RecentConflict"]} `}</Text>
            </View>
            <View style={styles.section}>
              <Text > {`Residence:   ${formData["Residence"]} `}</Text>  
            </View>   
          </View>
      </Page>
        <Page wrap size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image
            style={styles.image}
            src="footer.jpg"
          /> 
        </View>
          {/* Results */}
          <View style={styles.section}>
            <Text style={styles.title}>Results:</Text>
          </View>

          {/* Column Headings */}
          <View style={styles.col}>
           
              <Text style={styles.colHead}>Section</Text>
              <Text style={styles.colHead}>Risk (Yes's)</Text>   
                  
          </View>
          {/* A Rows in the table */}
          
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Individual Risk Factors  </Text> 
              {  
                section1Yes === 0 &&  <Text style={styles.colItem}>{section1Yes}  | Risk : LOW</Text> 
              }   
              {  
                (section1Yes >=1 && section1Yes <= 3) &&  <Text style={styles.colItem}>{section1Yes}  | Risk : MODERATE</Text> 
              } 
              {  
                (section1Yes >= 4) &&  <Text style={styles.colItem}>{section1Yes}  | Risk : SERIOUS</Text> 
              }        
                             
          </View>

          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Trauma                          </Text> 
              {  
                (section2Yes >=0 && section2Yes <= 1) &&  <Text style={styles.colItem}> {section2Yes}  | Risk : LOW </Text> 
              }   
              {  
                (section2Yes >=2 && section2Yes <= 3) &&  <Text style={styles.colItem}> {section2Yes}  | Risk : MODERATE </Text> 
              } 
              {  
                (section2Yes >= 4) &&  <Text style={styles.colItem}> {section2Yes}  | Risk : SERIOUS </Text> 
              }              
                      
          </View>
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Depression and Anxiety</Text> 
              {  
                section1Yes === 0 &&  <Text style={styles.colItem}> {section1Yes}  | Risk : LOW</Text> 
              }   
              {  
                (section1Yes >=1 && section3Yes <= 3) &&  <Text style={styles.colItem}> {section1Yes}  | Risk : MODERATE</Text> 
              } 
              {  
                (section1Yes >= 4) &&  <Text style={styles.colItem}> {section1Yes}  | Risk : SERIOUS</Text> 
              }        
                           
          </View>

       

       
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Family & Community    </Text> 
              {  
                (section4Yes >=0 && section4Yes <= 4) &&  <Text style={styles.colItem}> {section4Yes}  | Risk : LOW </Text> 
              }   
              {  
                (section4Yes >=5 && section4Yes <= 8) &&  <Text style={styles.colItem}> {section4Yes}  | Risk : MODERATE </Text> 
              } 
              {  
                (section4Yes >= 9) &&  <Text style={styles.colItem}> {section4Yes}  | Risk : SERIOUS </Text> 
              }         
          </View>

          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Protective Factors        </Text> 
              {  
                (section5Yes >=0 && section5Yes <= 4) &&  <Text style={styles.colItem}> {section5Yes}  | Risk : LOW </Text> 
              }   
              {  
                (section5Yes >=5 && section5Yes <= 8) &&  <Text style={styles.colItem}> {section5Yes}  | Risk : MODERATE </Text> 
              } 
              {  
                (section5Yes >= 9) &&  <Text style={styles.colItem}> {section5Yes}  | Risk : SERIOUS </Text> 
              }         
          </View>
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Treatment Eagerness   </Text> 
              {  
                (section6Yes >=0 && section6Yes <= 4) &&  <Text style={styles.colItem}> {section6Yes}  | Risk : LOW </Text> 
              }   
              {  
                (section6Yes >=5 && section6Yes <= 8) &&  <Text style={styles.colItem}> {section6Yes}  | Risk : MODERATE </Text> 
              } 
              {  
                (section6Yes >= 9) &&  <Text style={styles.colItem}> {section6Yes}  | Risk : SERIOUS </Text> 
              }         
          </View>
          
          {/* Footer */}
          
        </Page>
  
          
        

        
        
      </Document>
    </PDFViewer>
  );
}
export default ReportDoc;