import { db } from '../database/firebase'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, where } from 'firebase/firestore'
import { useState } from 'react';


const queryDatabaseAdmin = (email) => {
    const [items, setItems] = useState([]);

    const q = query(collection(db, 'Responses'))
    onSnapshot(q, (querySnapshot) => {
        setItems(querySnapshot.docs.map(doc => ({
            id : doc.id,
            ClientName: doc.data().ClientName,
            DateOfInterview: doc.data().DateOfInterview,
            ClientID: doc.data().ClientID,
            Edit: "edit",
            Report: "view"
        })))

    })

    return items;
}

export { queryDatabaseAdmin };