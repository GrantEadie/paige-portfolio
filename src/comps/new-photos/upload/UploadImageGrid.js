import "./upload.css";
import React from "react";

const UploadImageGrid = ({ urls, setCoverImage, coverImage }) => {
  return (
    <div id="upload-img-grid">
      {urls.map((url, index) => (
        <img
          className={coverImage === url ? "cover-selected" : null}
          key={index}
          src={url}
          alt={url}
          onClick={() => setCoverImage(url)}
        />
      ))}
    </div>
  );
};

export default UploadImageGrid;
