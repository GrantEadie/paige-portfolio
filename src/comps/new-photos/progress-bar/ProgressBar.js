import React, { useEffect } from "react";
import useStorage from "../../../hooks/useStorage";
import { motion } from "framer-motion";
import "./progress-bar.css";

const ProgressBar = ({
  file,
  setFiles,
  setURLs,
  urls,
  files,
  setBeginUpload,
  allUploads,
  index
}) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      let changeState = [...allUploads];
      changeState[index] = false;
      setBeginUpload(changeState);
      setURLs([...urls, url]);
    }
  }, [url, setFiles, urls, setURLs, files, file, allUploads, index, setBeginUpload]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
