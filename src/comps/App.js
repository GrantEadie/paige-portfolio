import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import PhotoDetail from "./PhotoDetail";
import { Nav, MobileNav } from "./Nav";
import { getStuff } from "../hooks/useFirestore";
import Loading from "./Loading";
import { MobileDesc } from "./Nav";
var _ = require("lodash");

function App() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const gotDocs = await getStuff("images");
      setDocs(_.uniqBy(gotDocs, "url"));
    };
    fetchData();
  }, [setDocs]);

  return (
    <div className="main-root">
      <Nav />
      <MobileNav />
      {!docs.length ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<PhotoDetail docs={docs} />} />
          </Routes>
        </Router>
      )}
      <MobileDesc />
    </div>
  );
}

export default App;
