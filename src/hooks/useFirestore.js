import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const useGetDocs = (category) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = async () => {
      const querySnapshot = await getDocs(collection(db, category));
      console.log(querySnapshot);
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    };
    return unsub;
  }, [category]);

  return { docs };
};

export default useGetDocs;

export const getStuff = async (stuff) => {
  const stuffSnapshot = await getDocs(collection(db, stuff));
  const mapData = (doc) => {
    const data = doc.data();
    const id = doc.id;
    return { ...data, id: id };
  };
  const stuffList = stuffSnapshot.docs.map((doc) => mapData(doc));
  return stuffList;
};

export const addDocument = async (category, doc) => {
  try {
    const docRef = await addDoc(collection(db, category), {
      ...doc,
    });
    return docRef;
  } catch (e) {
    console.log("Error adding document: ", e);
  }
};

export const updateDocument = async (category, docID, newDoc) => {
  const ref = doc(db, category, docID);
  await updateDoc(ref, {
    ...newDoc,
  });
};

export const deleteDocument = async (category, docID) => {
  await deleteDoc(doc(db, category, docID));
  console.log(docID, "document deleted");
};
