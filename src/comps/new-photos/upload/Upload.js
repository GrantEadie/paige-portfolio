import "./upload.css";
import React, { useState } from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import { PlusCircle } from "phosphor-react";
import { DragControls } from "framer-motion";
import React from "react";

const UploadForm = ({ setURLs, urls }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form id="upload">
      {!file && (
        <label id="upload-label">
          <input type="file" onChange={handleChange} />
          <span>
            <PlusCircle size={32} />
          </span>
        </label>
      )}
      <div className="upload-output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file-name">{file.name}</div>}
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            setURLs={setURLs}
            urls={urls}
          />
        )}
      </div>
    </form>
  );
};

export default UploadForm;
