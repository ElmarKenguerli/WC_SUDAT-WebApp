import { db } from '../database/firebase'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, where } from 'firebase/firestore'
import { useState } from 'react';


const queryDatabase = (email) => {
    const [items, setItems] = useState([]);

    const q = query(collection(db, 'Responses'), where('Interviewer', "==", email))
    onSnapshot(q, (querySnapshot) => {
        setItems(querySnapshot.docs.map(doc => ({
            id : doc.id,
            ClientFileNumber: doc.data().ClientFileNumber,
            ClientName: doc.data().ClientName,
            DateOfInterview: doc.data().DateOfInterview,
            ClientID: doc.data().ClientID,
            Edit: "edit",
            Report: "view"
        })))

    })

    return items;
}

export { queryDatabase };