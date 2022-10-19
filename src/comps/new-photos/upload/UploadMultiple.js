import "./upload.css";
import React, { useState } from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import { PlusCircle } from "phosphor-react";
import React from "react";

const UploadForm = ({ setURLs, urls, currentlyUploading, setCurrentlyUploading }) => {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  const [beginUpload, setBeginUpload] = useState([]);

  const types = ["image/png", "image/jpeg"];

  const handleClick = (e) => {
    e.preventDefault();
    const arr = new Array(files.length).fill(true);
    setBeginUpload(arr);
    setCurrentlyUploading(currentlyUploading+1);
  };

  const handleChange = (e) => {
    let selected = e.target.files;
    for (const file of selected) {
      if (file && types.includes(file.type)) {
        setError("");
      } else {
        setFiles(null);
        setError("Please select an image file (png or jpg)");
        return;
      }
    }
    setFiles(Object.values(selected));
  };

  return (
    <form id="upload">
      {!files && (
        <label id="upload-label">
          <input type="file" onChange={handleChange} multiple />
          <span>
            <PlusCircle size={32} />
          </span>
        </label>
      )}
      <div className="upload-output">
        {error && <div className="error">{error}</div>}
        {files &&
          files.map((file, index) => (
            beginUpload[index] || !beginUpload.length ?
            <div className="file-name" key={index}>
              {file.name}
            </div> : null
          ))}
        {files && !beginUpload.length ? (
          <button className="btn-dark" onClick={(e) => handleClick(e)}>
            Upload
          </button>
        ) : null}

        {files && beginUpload.length
          ? files.map(
              (file, index) =>
                beginUpload[index] && (
                  <ProgressBar
                    key={index}
                    file={file}
                    files={files}
                    setFiles={setFiles}
                    setURLs={setURLs}
                    urls={urls}
                    beginUpload={beginUpload[index]}
                    setBeginUpload={setBeginUpload}
                    allUploads={beginUpload}
                    index={index}
                  />
                )
            )
          : null}
      </div>
    </form>
  );
};

export default UploadForm;
