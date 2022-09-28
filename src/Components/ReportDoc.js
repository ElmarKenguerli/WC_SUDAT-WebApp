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
    fontSize: 32,
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
    fontSize: 31,
		flexGrow: 1,
    padding: "5px",
    border: "2px solid grey",
    backgroundColor: "grey"
	},
  colHeadReady: {
		flexGrow: 1,
    padding: "5px",
    border: "2px solid grey",
    backgroundColor: "lightgrey"
	},
  colItem: {
		flexGrow: 1,
    padding: "5px",
    
	},
  colItemP: {
		flexGrow: 1,
    padding: "5px",
    fontSize: 15,
	},
  
});

const getNumberYes = (inclusiveMin,inclusiveMax,affirmative,formData) =>{

  let numberYes = 0;
       for (let i = inclusiveMin; i <= inclusiveMax; i++) {
        if(i == 21)
        {
          console.log(allQuestions)
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
        
        numberYes++;

      }
      
      
    }
    return numberYes;
}
const getSliderTotal = (inclusiveMin,inclusiveMax,formData) =>{
  let recTotal =0;
  let ambTotal = 0; 
  let stepsTotal = 0;
       for (let i = inclusiveMin; i <= inclusiveMax; i++) { 
        
        if(i >=64 && i <=81  )
        {
          console.log(allQuestions[i].name)
          if(formData[allQuestions[i].name] >= 0) {
           
            switch(allQuestions[i].name)
            {
              case "Q56":
                console.log("here")
                recTotal+= formData[allQuestions[i].name];
                break;
              case "Q57":

                ambTotal+= formData[allQuestions[i].name];
                break;
              case "Q58": 

                recTotal+= formData[allQuestions[i].name];
                break;
              case "Q59":

                stepsTotal+= formData[allQuestions[i].name];
                break;
              case "Q60":

                stepsTotal+= formData[allQuestions[i].name];
                break;
              case "Q61": 

                ambTotal+= formData[allQuestions[i].name];
                break;
              //8 and so on
              case "Q62":

                stepsTotal+= formData[allQuestions[i].name];
                break;
              case "Q63":

                stepsTotal+= formData[allQuestions[i].name];
                break;
              case "Q64": 

                recTotal+= formData[allQuestions[i].name];
                break;
              case "Q65":

                ambTotal+= formData[allQuestions[i].name];
                break;
              case "Q66":

                recTotal+= formData[allQuestions[i].name];
                break;
              case "Q67":

              stepsTotal+= formData[allQuestions[i].name];
                break;
              case "Q68":

                stepsTotal+= formData[allQuestions[i].name];
                break;
              case "Q69":

                recTotal+= formData[allQuestions[i].name];
                break;
              case "Q70":

                ambTotal+= formData[allQuestions[i].name];
                break;
              case "Q71":

                recTotal+= formData[allQuestions[i].name];
                break;
              case "Q72":
                
                stepsTotal+= formData[allQuestions[i].name];
                break;
              case "Q73": 

                stepsTotal+= formData[allQuestions[i].name];
                break;
            }
          }  
        }
      
    }
    console.log(recTotal)
    console.log(ambTotal)
    console.log(stepsTotal)
    return {ambTotal ,recTotal, stepsTotal};
}
// Create Document Component
const ReportDoc = (props) => {
  const { currentUser } = useAuthValue();
  let formData = props.formData
  
 

  let section1Yes = getNumberYes(12,19,"Yes",formData)
  

  let section2Yes = getNumberYes(21,21,"Yes",formData)
 

  let section3Yes = getNumberYes(23,35,"Yes",formData)
  

  let section4Yes = getNumberYes(37,48,"Yes",formData)
  

  let section5Yes = getNumberYes(50,67,"Yes",formData)
  
  
  let sliderData = getSliderTotal(56,73,formData)
  let stepsTotal = sliderData["stepsTotal"]
  let ambTotal = sliderData["ambTotal"]
  let recTotal = sliderData["recTotal"]
  
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
                <Text > {`Client File Number: ${formData["ClientFileNumber"]} `}</Text>
            </View>
            <View style={styles.section}>  
                <Text > {`Interviewer: ${currentUser.email} `}</Text>
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

          <View style={styles.col}>
           
           <Text style={styles.colHead}>Treatment Eagerness</Text>
            
               
       </View>
          

          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Recognition   </Text> 
              {  
                (recTotal >=0 && recTotal <= 20) &&  <Text style={styles.colItem}> {recTotal}  | LOW </Text> 
              }   
              {  
                (recTotal >20) &&  <Text style={styles.colItem}> {recTotal}  | HIGH </Text> 
              } 
              
                 
          </View>
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Ambivalence   </Text> 
              {  
                (ambTotal >=0 && ambTotal <= 9) &&  <Text style={styles.colItem}> {ambTotal}  LOW </Text> 
              }   
              {  
                (ambTotal >9) &&  <Text style={styles.colItem}> {ambTotal}  | HIGH </Text> 
              } 
              
                 
          </View>
          <View style={styles.rows}>
            
              <Text style={styles.colItem}>Taking Steps   </Text> 
              {  
                (stepsTotal >=0 && stepsTotal <= 20) &&  <Text style={styles.colItem}> {stepsTotal}  | LOW </Text> 
              }   
              {  
                (stepsTotal >20) &&  <Text style={styles.colItem}> {stepsTotal}  | HIGH </Text> 
              } 
              
                 
          </View>
          
         
          
        </Page>

        <Page> 
        <View style={styles.section}>
          <Image
            style={styles.image}
            src="footer.jpg"
          /> 
        </View>

        {/* Interview Information */}
        <View style={styles.section}>
            <Text style={styles.title}>Understanding Treatment Eagerness Values</Text>
        </View>

        <View style={styles.col}>
            <Text style={styles.colHeadReady}>RECOGNITION</Text>
        </View>

        <View style={styles.rows}>        
            <Text style={styles.colItemP}>HIGH scorers directly acknowledge that they are having problems related to their using/drinking, tending to express a desire for change and to perceive that harm will continue if they do not change.  LOW scorers deny that using/alcohol is causing them serious problems, reject diagnostic labels such as “problem drinker or user” and “alcoholic or addict” and do not express a desire for change. </Text>              
        </View>
        <View style={styles.col}>
        <Text style={styles.colHeadReady}>AMBIVALENCE</Text>   
        </View>

        <View style={styles.rows}>        
        <Text style={styles.colItemP}>HIGH scorers say that they sometimes wonder if they are in control of their using/drinking, are using/drinking too much, are hurting other people, and/or are addicted/alcoholic.  Thus, a high score reflects ambivalence or uncertainty.  A high score here reflects some openness to reflection, as might be particularly expected in the contemplation stage of change.  LOW scorers say that they do not wonder whether they use/drink too much, are in control, are hurting others, or are addicted/alcoholic.  Note that a person may score low on ambivalence either because they “know” their using/drinking is causing problems (high Recognition), or because they “know” that they do not have drinking problems (low Recognition).  Thus, a low Ambivalence score should be interpreted in relation to the Recognition score.</Text> 
        </View>
        <View style={styles.col}>
        <Text style={styles.colHeadReady}>TAKING STEPS</Text>  
        </View>

        <View style={styles.rows}>        
        <Text style={styles.colItemP}>HIGH scorers report that they are already doing things to make a positive change in their using/drinking and may have experienced some success in this regard.  Change is underway, and they may want help to persist or to prevent backsliding.  A high score on this scale has been found to be predictive of successful change.  LOW scorers report that they are not currently doing things to change their using/drinking and have not made such changes recently.  </Text> 
        </View>


        </Page>  
          
        

        
        
      </Document>
    </PDFViewer>
  );
}
export default ReportDoc;