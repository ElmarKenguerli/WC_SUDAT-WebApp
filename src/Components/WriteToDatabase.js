import { db } from '../database/firebase'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, where } from 'firebase/firestore'
import { getDoc, doc } from "firebase/firestore";


const setFormDefaults = () => {
    let formData = {}

    let commentFields = [
        "commentQ1", "commentQ2", "commentQ3", "commentQ4", "commentQ5", "commentQ6", "commentQ7", "commentQ8", "commentQ9", "commentQ10",
        "commentQ11", "commentQ12", "commentQ13", "commentQ14", "commentQ15", "commentQ16", "commentQ17", "commentQ17a", "commentQ17b",
        "commentQ17c", "commentQ17d", "commentQ18", "commentQ19", "commentQ20", "commentQ21", "commentQ22", "commentQ23", "commentQ24",
        "commentQ25", "commentQ26", "commentQ27", "commentQ28", "commentQ29", "commentQ30", "commentQ31", "commentQ32", "commentQ33",
        "commentQ34", "commentQ35", "commentQ36", "commentQ37", "commentQ38", "commentQ39", "commentQ40", "commentQ41", "commentQ42",
        "commentQ43", "commentQ44", "commentQ45", "commentQ46", "commentQ47", "commentQ48", "commentQ49", "commentQ50", "commentQ51",
        "commentQ52", "commentQ53", "commentQ54", "commentQ55", "commentQ56", "commentQ57", "commentQ58", "commentQ59", "commentQ60",
        "commentQ61", "commentQ62", "commentQ63", "commentQ64", "commentQ65", "commentQ66", "commentQ67", "commentQ68", "commentQ69",
        "commentQ70", "commentQ71", "commentQ72", "commentQ73", "commentDateOfBirth", "commentCountry", "commentGender",
        "commentResidence", "commentHousingSituation", "commentEducation", "commentRecentConflict", "commentLanguage", "commentDemographics",
        "ClientName", "ClientID", "PlaceOfInterview", "email", "Gender", "DateOfBirth", "Country", "Residence", "HousingSituation",
        "Education", "RecentConflict", "Language"
    ];
    let fields = [
        "Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q17a", "Q17b", "Q17c",
        "Q17d", "Q18", "Q19", "Q20", "Q21", "Q22", "Q23", "Q24", "Q25", "Q26", "Q27", "Q28", "Q29", "Q30", "Q31", "Q32", "Q33", "Q34", "Q35",
        "Q36", "Q37", "Q38", "Q39", "Q40", "Q41", "Q42", "Q43", "Q44", "Q45", "Q46", "Q47", "Q48", "Q49", "Q50", "Q51", "Q52", "Q53", "Q54",
        "Q55", "Q56", "Q57", "Q58", "Q59", "Q60", "Q61", "Q62", "Q63", "Q64", "Q65", "Q66", "Q67", "Q68", "Q69", "Q70", "Q71", "Q72", "Q73",
        "Q30a", "Q31a", "Q32a", "Q33a", "Q34a", "Q35a", "Q36a", "Q37a", "Q38a", "Q39a", "Q40a", "Q41a", "Q42a", "Q43a", "Q44a", "Q45a", "Q46a",
        "Q47a", "Q48a", "Q49a", "Q50a", "Q51a", "Q52a", "Q53a", "Q54a"
    ]

    for (let i = 0; i < commentFields.length; ++i)
        formData[commentFields[i]] = "";

    for (let i = 0; i < fields.length; ++i)
        if (i < 4)
            formData[fields[i]] = 0;
        else if (i < 21)
            formData[fields[i]] = "";
        else if (i < 26)
            formData[fields[i]] = "";
        else if (i < 33)
            formData[fields[i]] = "";
        else if (i < 58)
            formData[fields[i]] = "";
        else if (i == 58)
            formData[fields[i]] = "";
        else if (i < 77)
            formData[fields[i]] = 0;
        else
            formData[fields[i]] = 0;

    formData["DateOfBirth"] = "";
    formData["DateOfInterview"] = "";
    formData["Q17"] = "";
    return formData;
}

const getFormDefaults = async(clientID) => {
    let formData = {}

    if (clientID === "") {
        let commentFields = [
            "commentQ1", "commentQ2", "commentQ3", "commentQ4", "commentQ5", "commentQ6", "commentQ7", "commentQ8", "commentQ9", "commentQ10",
            "commentQ11", "commentQ12", "commentQ13", "commentQ14", "commentQ15", "commentQ16", "commentQ17", "commentQ17a", "commentQ17b",
            "commentQ17c", "commentQ17d", "commentQ18", "commentQ19", "commentQ20", "commentQ21", "commentQ22", "commentQ23", "commentQ24",
            "commentQ25", "commentQ26", "commentQ27", "commentQ28", "commentQ29", "commentQ30", "commentQ31", "commentQ32", "commentQ33",
            "commentQ34", "commentQ35", "commentQ36", "commentQ37", "commentQ38", "commentQ39", "commentQ40", "commentQ41", "commentQ42",
            "commentQ43", "commentQ44", "commentQ45", "commentQ46", "commentQ47", "commentQ48", "commentQ49", "commentQ50", "commentQ51",
            "commentQ52", "commentQ53", "commentQ54", "commentQ55", "commentQ56", "commentQ57", "commentQ58", "commentQ59", "commentQ60",
            "commentQ61", "commentQ62", "commentQ63", "commentQ64", "commentQ65", "commentQ66", "commentQ67", "commentQ68", "commentQ69",
            "commentQ70", "commentQ71", "commentQ72", "commentQ73", "commentDateOfBirth", "commentCountry", "commentGender",
            "commentResidence", "commentHousingSituation", "commentEducation", "commentRecentConflict", "commentLanguage", "commentDemographics",
            "ClientName", "ClientID", "PlaceOfInterview", "email", "Gender", "DateOfBirth", "Country", "Residence", "HousingSituation",
            "Education", "RecentConflict", "Language"
        ];
        let fields = [
            "Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q17a", "Q17b", "Q17c",
            "Q17d", "Q18", "Q19", "Q20", "Q21", "Q22", "Q23", "Q24", "Q25", "Q26", "Q27", "Q28", "Q29", "Q30", "Q31", "Q32", "Q33", "Q34", "Q35",
            "Q36", "Q37", "Q38", "Q39", "Q40", "Q41", "Q42", "Q43", "Q44", "Q45", "Q46", "Q47", "Q48", "Q49", "Q50", "Q51", "Q52", "Q53", "Q54",
            "Q55", "Q56", "Q57", "Q58", "Q59", "Q60", "Q61", "Q62", "Q63", "Q64", "Q65", "Q66", "Q67", "Q68", "Q69", "Q70", "Q71", "Q72", "Q73",
            "Q30a", "Q31a", "Q32a", "Q33a", "Q34a", "Q35a", "Q36a", "Q37a", "Q38a", "Q39a", "Q40a", "Q41a", "Q42a", "Q43a", "Q44a", "Q45a", "Q46a",
            "Q47a", "Q48a", "Q49a", "Q50a", "Q51a", "Q52a", "Q53a", "Q54a"
        ]

        for (let i = 0; i < commentFields.length; ++i)
            formData[commentFields[i]] = "";

        for (let i = 0; i < fields.length; ++i)
            if (i < 4)
                formData[fields[i]] = 0;
            else if (i < 21)
                formData[fields[i]] = "";
            else if (i < 26)
                formData[fields[i]] = "";
            else if (i < 33)
                formData[fields[i]] = "";
            else if (i < 58)
                formData[fields[i]] = "";
            else if (i == 58)
                formData[fields[i]] = "";
            else if (i < 77)
                formData[fields[i]] = 0;
            else
                formData[fields[i]] = 0;

        formData["DateOfBirth"] = "";
        formData["DateOfInterview"] = "";
        formData["Q17"] = "";
    }
    else {
        const q = await getDoc(doc(db, "Responses", clientID));
        // onSnapshot(q, (querySnapshot) => {
                

            formData["commentQ1"] = q.data().commentQ1;
            formData["commentQ2"] = q.data().commentQ2;
            formData["commentQ3"] = q.data().commentQ3;
            formData["commentQ4"] = q.data().commentQ4;
            formData["commentQ5"] = q.data().commentQ5;
            formData["commentQ6"] = q.data().commentQ6;
            formData["commentQ7"] = q.data().commentQ7;
            formData["commentQ8"] = q.data().commentQ8;
            formData["commentQ9"] = q.data().commentQ9;
            formData["commentQ10"] = q.data().commentQ10;
            formData["commentQ11"] = q.data().commentQ11;
            formData["commentQ12"] = q.data().commentQ12;
            formData["commentQ13"] = q.data().commentQ13;
            formData["commentQ14"] = q.data().commentQ14;
            formData["commentQ15"] = q.data().commentQ15;
            formData["commentQ16"] = q.data().commentQ16;
            formData["commentQ17"] = q.data().commentQ17;
            formData["commentQ17a"] = q.data().commentQ17a;
            formData["commentQ17b"] = q.data().commentQ17b;
            formData["commentQ17c"] = q.data().commentQ17c;
            formData["commentQ17d"] = q.data().commentQ17d;
            formData["commentQ18"] = q.data().commentQ18;
            formData["commentQ19"] = q.data().commentQ19;
            formData["commentQ20"] = q.data().commentQ20;
            formData["commentQ21"] = q.data().commentQ21;
            formData["commentQ22"] = q.data().commentQ22;
            formData["commentQ23"] = q.data().commentQ23;
            formData["commentQ24"] = q.data().commentQ24;
            formData["commentQ25"] = q.data().commentQ25;
            formData["commentQ26"] = q.data().commentQ26;
            formData["commentQ27"] = q.data().commentQ27;
            formData["commentQ28"] = q.data().commentQ28;
            formData["commentQ29"] = q.data().commentQ29;
            formData["commentQ30"] = q.data().commentQ30;
            formData["commentQ31"] = q.data().commentQ31;
            formData["commentQ32"] = q.data().commentQ32;
            formData["commentQ33"] = q.data().commentQ33;
            formData["commentQ34"] = q.data().commentQ34;
            formData["commentQ35"] = q.data().commentQ35;
            formData["commentQ36"] = q.data().commentQ36;
            formData["commentQ37"] = q.data().commentQ37;
            formData["commentQ38"] = q.data().commentQ38;
            formData["commentQ39"] = q.data().commentQ39;
            formData["commentQ40"] = q.data().commentQ40;
            formData["commentQ41"] = q.data().commentQ41;
            formData["commentQ42"] = q.data().commentQ42;
            formData["commentQ43"] = q.data().commentQ43;
            formData["commentQ44"] = q.data().commentQ44;
            formData["commentQ45"] = q.data().commentQ45;
            formData["commentQ46"] = q.data().commentQ46;
            formData["commentQ47"] = q.data().commentQ47;
            formData["commentQ48"] = q.data().commentQ48;
            formData["commentQ49"] = q.data().commentQ49;
            formData["commentQ50"] = q.data().commentQ50;
            formData["commentQ51"] = q.data().commentQ51;
            formData["commentQ52"] = q.data().commentQ52;
            formData["commentQ53"] = q.data().commentQ53;
            formData["commentQ54"] = q.data().commentQ54;
            formData["commentQ55"] = q.data().commentQ55;
            formData["commentQ56"] = q.data().commentQ56;
            formData["commentQ57"] = q.data().commentQ57;
            formData["commentQ58"] = q.data().commentQ58;
            formData["commentQ59"] = q.data().commentQ59;
            formData["commentQ60"] = q.data().commentQ60;
            formData["commentQ61"] = q.data().commentQ61;
            formData["commentQ62"] = q.data().commentQ62;
            formData["commentQ63"] = q.data().commentQ63;
            formData["commentQ64"] = q.data().commentQ64;
            formData["commentQ65"] = q.data().commentQ65;
            formData["commentQ66"] = q.data().commentQ66;
            formData["commentQ67"] = q.data().commentQ67;
            formData["commentQ68"] = q.data().commentQ68;
            formData["commentQ69"] = q.data().commentQ69;
            formData["commentQ70"] = q.data().commentQ70;
            formData["commentQ71"] = q.data().commentQ71;
            formData["commentQ72"] = q.data().commentQ72;
            formData["commentQ73"] = q.data().commentQ73;
            formData["commentQ74"] = q.data().commentQ74;
            
            formData["commentDateOfBirth"] = q.data().commentDateOfBirth;
            formData["commentCountry"] = q.data().commentCountry;
            formData["commentGender"] = q.data().commentGender;
            formData["commentResidence"] = q.data().commentResidence;
            formData["commentHousingSituation"] = q.data().commentHousingSituation;
            formData["commentEducation"] = q.data().commentEducation;
            formData["commentRecentConflict"] = q.data().commentRecentConflict;
            formData["commentLanguage"] = q.data().commentLanguage;
            formData["commentDemographics"] = q.data().commentDemographics;
            formData["Q1"] = q.data().Q1;
            formData["Q2"] = q.data().Q2;
            formData["Q3"] = q.data().Q3;
            formData["Q4"] = q.data().Q4;
            formData["Q5"] = q.data().Q5;
            formData["Q6"] = q.data().Q6;
            formData["Q7"] = q.data().Q7;
            formData["Q8"] = q.data().Q8;
            formData["Q9"] = q.data().Q9;
            formData["Q10"] = q.data().Q10;
            formData["Q11"] = q.data().Q11;
            formData["Q12"] = q.data().Q12;
            formData["Q13"] = q.data().Q13;
            formData["Q14"] = q.data().Q14;
            formData["Q15"] = q.data().Q15;
            formData["Q16"] = q.data().Q16;
            formData["Q17"] = q.data().Q17;
            formData["Q17a"] = q.data().Q17a;
            formData["Q17b"] = q.data().Q17b;
            formData["Q17c"] = q.data().Q17c;
            formData["Q17d"] = q.data().Q17d;
            formData["Q18"] = q.data().Q18;
            formData["Q19"] = q.data().Q19;
            formData["Q20"] = q.data().Q20;
            formData["Q21"] = q.data().Q21;
            formData["Q22"] = q.data().Q22;
            formData["Q23"] = q.data().Q23;
            formData["Q24"] = q.data().Q24;
            formData["Q25"] = q.data().Q25;
            formData["Q26"] = q.data().Q26;
            formData["Q27"] = q.data().Q27;
            formData["Q28"] = q.data().Q28;
            formData["Q29"] = q.data().Q29;
            formData["Q30"] = q.data().Q30;
            formData["Q31"] = q.data().Q31;
            formData["Q32"] = q.data().Q32;
            formData["Q33"] = q.data().Q33;
            formData["Q34"] = q.data().Q34;
            formData["Q35"] = q.data().Q35;
            formData["Q36"] = q.data().Q36;
            formData["Q37"] = q.data().Q37;
            formData["Q38"] = q.data().Q38;
            formData["Q39"] = q.data().Q39;
            formData["Q40"] = q.data().Q40;
            formData["Q41"] = q.data().Q41;
            formData["Q42"] = q.data().Q42;
            formData["Q43"] = q.data().Q43;
            formData["Q44"] = q.data().Q44;
            formData["Q45"] = q.data().Q45;
            formData["Q46"] = q.data().Q46;
            formData["Q47"] = q.data().Q47;
            formData["Q48"] = q.data().Q48;
            formData["Q49"] = q.data().Q49;
            formData["Q50"] = q.data().Q50;
            formData["Q51"] = q.data().Q51;
            formData["Q52"] = q.data().Q52;
            formData["Q53"] = q.data().Q53;
            formData["Q54"] = q.data().Q54;
            formData["Q55"] = q.data().Q55;
            formData["Q56"] = q.data().Q56;
            formData["Q57"] = q.data().Q57;
            formData["Q58"] = q.data().Q58;
            formData["Q59"] = q.data().Q59;
            formData["Q60"] = q.data().Q60;
            formData["Q61"] = q.data().Q61;
            formData["Q62"] = q.data().Q62;
            formData["Q63"] = q.data().Q63;
            formData["Q64"] = q.data().Q64;
            formData["Q65"] = q.data().Q65;
            formData["Q66"] = q.data().Q66;
            formData["Q67"] = q.data().Q67;
            formData["Q68"] = q.data().Q68;
            formData["Q69"] = q.data().Q69;
            formData["Q70"] = q.data().Q70;
            formData["Q71"] = q.data().Q71;
            formData["Q72"] = q.data().Q72;
            formData["Q73"] = q.data().Q73;
            formData["Q74"] = q.data().Q74;
            formData["ClientName"] = q.data().ClientName;
            formData["ClientID"] = q.data().ClientID;
            formData["PlaceOfInterview"] = q.data().PlaceOfInterview;
            formData["Country"] = q.data().Country;
            formData["DateOfBirth"] = q.data().DateOfBirth;
            formData["DateOfInterview"] = q.data().DateOfInterview;
            formData["Education"] = q.data().Education;
            formData["Gender"] = q.data().Gender;
            formData["HousingSituation"] = q.data().HousingSituation;
            formData["Interviewer"] = q.data().Interviewer;
            formData["Language"] = q.data().Language;
            formData["ClientFileNumber"] = q.data().ClientFileNumber;
            formData["Residence"] = q.data().Residence;
            formData["RecentConflict"] = q.data().RecentConflict;
            formData["Q30a"] = q.data().Q30a;
            formData["Q31a"] = q.data().Q31a;
            formData["Q32a"] = q.data().Q32a;
            formData["Q33a"] = q.data().Q33a;
            formData["Q34a"] = q.data().Q34a;
            formData["Q35a"] = q.data().Q35a;
            formData["Q36a"] = q.data().Q36a;
            formData["Q37a"] = q.data().Q37a;
            formData["Q38a"] = q.data().Q38a;
            formData["Q39a"] = q.data().Q39a;
            formData["Q40a"] = q.data().Q40a;
            formData["Q41a"] = q.data().Q41a;
            formData["Q42a"] = q.data().Q42a;
            formData["Q43a"] = q.data().Q43a;
            formData["Q44a"] = q.data().Q44a;
            formData["Q45a"] = q.data().Q45a;
            formData["Q46a"] = q.data().Q46a;
            formData["Q47a"] = q.data().Q47a;
            formData["Q48a"] = q.data().Q48a;
            formData["Q49a"] = q.data().Q49a;
            formData["Q50a"] = q.data().Q50a;
            formData["Q51a"] = q.data().Q51a;
            formData["Q52a"] = q.data().Q52a;
            formData["Q53a"] = q.data().Q53a;
            formData["Q54a"] = q.data().Q54a;

            

        // })
    }

    return formData;
}



const writeToDatabase = async (e, formData) => {
    e.preventDefault()

    try {
        await addDoc(collection(db, 'Responses'), {
            // Question Responses
            ClientName: formData["ClientName"],
            ClientID: formData["ClientID"],
            PlaceOfInterview: formData["PlaceOfInterview"],
            Interviewer: formData["email"],
            DateOfInterview: formData["DateOfInterview"],

            Gender: formData["Gender"],
            DateOfBirth: formData["DateOfBirth"],
            Country: formData["Country"],
            Residence: formData["Residence"],
            HousingSituation: formData["HousingSituation"],
            Education: formData["Education"],
            RecentConflict: formData["RecentConflict"],
            Language: formData["Language"],

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
            Q17: formData["Q17a"],
            Q17: formData["Q17b"],
            Q17: formData["Q17c"],
            Q17: formData["Q17d"],
            Q18: formData["Q18"],
            Q19: formData["Q19"],
            Q20: formData["Q20"],
            Q21: formData["Q21"],
            Q22: formData["Q22"],
            Q23: formData["Q23"],
            Q24: formData["Q24"],
            Q25: formData["Q25"],
            Q26: formData["Q26"],
            Q27: formData["Q27"],
            Q28: formData["Q28"],
            Q29: formData["Q29"],
            Q30: formData["Q30"],
            Q31: formData["Q31"],
            Q32: formData["Q32"],
            Q33: formData["Q33"],
            Q34: formData["Q34"],
            Q35: formData["Q35"],
            Q36: formData["Q36"],
            Q37: formData["Q37"],
            Q38: formData["Q38"],
            Q39: formData["Q39"],
            Q40: formData["Q40"],
            Q41: formData["Q41"],
            Q42: formData["Q42"],
            Q43: formData["Q43"],
            Q44: formData["Q44"],
            Q45: formData["Q45"],
            Q46: formData["Q46"],
            Q47: formData["Q47"],
            Q48: formData["Q48"],
            Q49: formData["Q49"],
            Q50: formData["Q50"],
            Q51: formData["Q51"],
            Q52: formData["Q52"],
            Q53: formData["Q53"],
            Q54: formData["Q54"],
            Q55: formData["Q55"],
            Q56: formData["Q56"],
            Q57: formData["Q57"],
            Q58: formData["Q58"],
            Q59: formData["Q59"],
            Q60: formData["Q60"],
            Q61: formData["Q61"],
            Q62: formData["Q62"],
            Q63: formData["Q63"],
            Q64: formData["Q64"],
            Q65: formData["Q65"],
            Q66: formData["Q66"],
            Q67: formData["Q67"],
            Q68: formData["Q68"],
            Q69: formData["Q69"],
            Q70: formData["Q70"],
            Q71: formData["Q71"],
            Q72: formData["Q72"],
            Q73: formData["Q73"],

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
            commentQ17: formData["commentQ17a"],
            commentQ17: formData["commentQ17b"],
            commentQ17: formData["commentQ17c"],
            commentQ17: formData["commentQ17d"],
            commentQ18: formData["commentQ18"],
            commentQ19: formData["commentQ19"],
            commentQ20: formData["commentQ20"],
            commentQ21: formData["commentQ21"],
            commentQ22: formData["commentQ22"],
            commentQ23: formData["commentQ23"],
            commentQ24: formData["commentQ24"],
            commentQ25: formData["commentQ25"],
            commentQ26: formData["commentQ26"],
            commentQ27: formData["commentQ27"],
            commentQ28: formData["commentQ28"],
            commentQ29: formData["commentQ29"],
            commentQ30: formData["commentQ30"],
            commentQ31: formData["commentQ31"],
            commentQ32: formData["commentQ32"],
            commentQ33: formData["commentQ33"],
            commentQ34: formData["commentQ34"],
            commentQ35: formData["commentQ35"],
            commentQ36: formData["commentQ36"],
            commentQ37: formData["commentQ37"],
            commentQ38: formData["commentQ38"],
            commentQ39: formData["commentQ39"],
            commentQ40: formData["commentQ40"],
            commentQ41: formData["commentQ41"],
            commentQ42: formData["commentQ42"],
            commentQ43: formData["commentQ43"],
            commentQ44: formData["commentQ44"],
            commentQ45: formData["commentQ45"],
            commentQ46: formData["commentQ46"],
            commentQ47: formData["commentQ47"],
            commentQ48: formData["commentQ48"],
            commentQ49: formData["commentQ49"],
            commentQ50: formData["commentQ50"],
            commentQ51: formData["commentQ51"],
            commentQ52: formData["commentQ52"],
            commentQ53: formData["commentQ53"],
            commentQ54: formData["commentQ54"],
            commentQ55: formData["commentQ55"],
            commentQ56: formData["commentQ56"],
            commentQ57: formData["commentQ57"],
            commentQ58: formData["commentQ58"],
            commentQ59: formData["commentQ59"],
            commentQ60: formData["commentQ60"],
            commentQ61: formData["commentQ61"],
            commentQ62: formData["commentQ62"],
            commentQ63: formData["commentQ63"],
            commentQ64: formData["commentQ64"],
            commentQ65: formData["commentQ65"],
            commentQ66: formData["commentQ66"],
            commentQ67: formData["commentQ67"],
            commentQ68: formData["commentQ68"],
            commentQ69: formData["commentQ69"],
            commentQ70: formData["commentQ70"],
            commentQ71: formData["commentQ71"],
            commentQ72: formData["commentQ72"],
            commentQ73: formData["commentQ73"],
        })

    } catch (err) {
        alert(err)
    }
}

export { writeToDatabase };
export { getFormDefaults };
export { setFormDefaults };