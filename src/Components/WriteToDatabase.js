import { db } from '../database/firebase'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, where, serverTimestamp  } from 'firebase/firestore'

const getFormDefaults = () => {
    let formData = {}
    let commentFields = [
        "commentDemographics", "commentQ1", "commentQ2", "commentQ3", "commentQ4", "commentQ5",
        "commentDateOfBirth", "commentCountry", "commentGender", "commentResidence", "commentHousingSituation",
        "commentEducation", "commentRecentConflict", "commentLanguage"
    ];
    let fields = ["Q1", "Q2", "Q3", "Q4"]

    for (let i = 0; i < 14; ++i)
        formData[commentFields[i]] = "";

    for (let i = 0; i < 4; ++i)
        formData[fields[i]] = 0;

    formData["DateOfBirth"] = "";

    return formData;
}



const writeToDatabase = async (e, formData, shouldContinue) => {


    e.preventDefault()

    try {
        if (!shouldContinue) {
            await addDoc(collection(db, 'Responses'), {
                // Question Responses
                ClientName: formData["ClientName"],
                ClientID: formData["ClientID"],
                PlaceOfInterview: formData["PlaceOfInterview"],
                Interviewer: formData["email"],
                DateOfInterview: serverTimestamp(),

                Gender: formData["Gender"],
                DateOfBirth: formData["DateOfBirth"],
                Country: formData["Country"],
                Residence: formData["Residence"],
                HousingSituation: formData["HousingSituation"],
                Education: formData["Education"],
                RecentConflict: formData["RecentConflict"],
                Langauge: formData["Language"],

                Q1: formData["Q1"],
                Q2: formData["Q2"],
                Q3: formData["Q3"],
                Q4: formData["Q4"],
                Q5: formData["Q5"],

                // Comments
                commentDemographics: formData["commentDemographics"],

                commentGender: formData["commentGender"],
                commentDateOfBirth: formData["commentDateOfBirth"],
                commentCountry: formData["commentCountry"],
                commentResidence: formData["commentResidence"],
                commentHousingSituation: formData["commentHousingSituation"],
                commentEducation: formData["commentEducation"],
                commentRecentConflict: formData["commentRecentConflict"],
                commentLanguage: formData["commentLanguage"],

                commentQ1: formData["commentQ1"],
                commentQ2: formData["commentQ2"],
                commentQ3: formData["commentQ3"],
                commentQ4: formData["commentQ4"],
                commentQ5: formData["commentQ5"],
            })
        }
        else {
            await addDoc(collection(db, 'Responses'), {
                // Question Responses
                ClientName: formData["ClientName"],
                PlaceOfInterview: formData["PlaceOfInterview"],
                Interviewer: formData["email"],
                DateOfInterview: serverTimestamp(),

                Gender: formData["Gender"],
                DateOfBirth: formData["DateOfBirth"],
                Country: formData["Country"],
                Residence: formData["Residence"],
                HousingSituation: formData["HousingSituation"],
                Education: formData["Education"],
                RecentConflict: formData["RecentConflict"],
                Langauge: formData["Language"],

                Q1: formData["Q1"],
                Q2: formData["Q2"],
                Q3: formData["Q3"],
                Q4: formData["Q4"],
                Q5: formData["Q5"],
                Q6: formData["Q6"],
                Q7: formData["Q7"],
                Q8: formData["Q8"],
                Q9: formData["Q9"],
                Q10: formData["Q10"],
                Q11: formData["Q11"],
                Q12: formData["Q12"],
                Q13: formData["Q13"],
                Q14: formData["Q14"],
                Q15: formData["Q15"],
                Q16: formData["Q16"],
                Q17: formData["Q17"],
                Q18: formData["Q18"],
                Q19: formData["Q19"],
                Q20: formData["Q20"],

                // Comments
                commentDemographics: formData["commentDemographics"],

                commentGender: formData["commentGender"],
                commentDateOfBirth: formData["commentDateOfBirth"],
                commentCountry: formData["commentCountry"],
                commentResidence: formData["commentResidence"],
                commentHousingSituation: formData["commentHousingSituation"],
                commentEducation: formData["commentEducation"],
                commentRecentConflict: formData["commentRecentConflict"],
                commentLanguage: formData["commentLanguage"],

                commentQ1: formData["commentQ1"],
                commentQ2: formData["commentQ2"],
                commentQ3: formData["commentQ3"],
                commentQ4: formData["commentQ4"],
                commentQ5: formData["commentQ5"],
                commentQ6: formData["commentQ6"],
                commentQ7: formData["commentQ7"],
                commentQ8: formData["commentQ8"],
                commentQ9: formData["commentQ9"],
                commentQ10: formData["commentQ10"],
                commentQ11: formData["commentQ11"],
                commentQ12: formData["commentQ12"],
                commentQ13: formData["commentQ13"],
                commentQ14: formData["commentQ14"],
                commentQ15: formData["commentQ15"],
                commentQ16: formData["commentQ16"],
                commentQ17: formData["commentQ17"],
                commentQ18: formData["commentQ18"],
                commentQ19: formData["commentQ19"],
                commentQ20: formData["commentQ20"],
            })
        }
    } catch (err) {
        alert(err)
    }
}

export { writeToDatabase };
export { getFormDefaults };