import { useState, useEffect } from "react";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            break;
          default:
            break;
        }
      },
      (error) => {
        setError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
          try {
            const docRef = await addDoc(collection(db, "images"), {
              createdAt: serverTimestamp(),
              url: downloadURL,
            });
            console.log(docRef);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
