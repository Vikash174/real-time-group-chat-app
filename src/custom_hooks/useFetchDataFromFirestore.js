import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase-config";

const useFetchDataFromFirestore = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "rooms"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      setChannels(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });

    return () => {
      unsub();
    };
  }, []);

  return channels;
};

export default useFetchDataFromFirestore;
