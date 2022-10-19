import "./new-photos.css";
import { useState } from "react";
import UploadForm from "./upload/UploadMultiple";
import React from "react";

const NewPhotos = () => {
  const [docId] = useState("");
  const [urls, setURLs] = useState([]);
  const [currentlyUploading, setCurrentlyUploading] = useState(1);

  return (
    <div id="create-photo">
      <div id="create-photo-holder">
        <div id="create-photo-body">
          <div className="create-photo-col">
            <div className="create-photo-title">Add some photos</div>
            <div className="create-photo-form">
              {[...Array(currentlyUploading)].map((e, index) => (
                <UploadForm
                  docId={docId} 
                  setURLs={setURLs}
                  urls={urls}
                  currentlyUploading={currentlyUploading}
                  setCurrentlyUploading={setCurrentlyUploading}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPhotos;
