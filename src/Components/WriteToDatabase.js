import { db } from '../database/firebase'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, where } from 'firebase/firestore'

const getFormDefaults = () => {
    let formData = {}
    let commentFields = [
        "commentDemographics", "commentQ1", "commentQ2", "commentQ3", "commentQ4", "commentQ5",
        "commentDateOfBirth", "commentCountry", "commentGender", "commentResidence" , "commentHousingSituation", 
        "commentEducation", "commentRecentConflict", "commentLanguage"
    ];
    let fields = ["Q1", "Q2", "Q3", "Q4"]

    for(let i=0; i<14; ++i)
        formData[commentFields[i]] = "";
    
    for(let i=0; i<4; ++i)
        formData[fields[i]] = 0;
    
    formData["DateOfBirth"] = "";

    return formData;
}

const writeToDatabase = async (e, formData, currentDate) => {
    e.preventDefault()
    
    try {
        await addDoc(collection(db, 'Responses'), {
            // Question Responses
            ClientName: formData["ClientName"],
            PlaceOfInterview: formData["PlaceOfInterview"],
            Interviewer: formData["email"],
            DateOfInterview: currentDate,

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
            commentLangauge: formData["commentLanguage"],

            commentQ1: formData["commentQ1"],
            commentQ2: formData["commentQ2"],
            commentQ3: formData["commentQ3"],
            commentQ4: formData["commentQ4"],
            commentQ5: formData["commentQ5"],
        })
    } catch (err) {
        alert(err)
    }
}

export {writeToDatabase};
export {getFormDefaults};