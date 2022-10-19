import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getStuff } from "../hooks/useFirestore";
import _ from "lodash";

const Gallery = () => {
  const [grids, setGrids] = useState([[], [], []]);
  const [docs, setDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const gotDocs = await getStuff("images");
      setDocs(_.uniqBy(gotDocs, "url"));
    };
    fetchData();
  }, [setDocs]);

  useEffect(() => {
    const updateGrids = (i, doc) => {
      const newGrids = [...grids];
      newGrids[i].push(doc);
      return newGrids;
    };

    if (docs && docs.length) {
      const counter = docs.length - 1;
      for (let i = 0; i < counter; i++) {
        if (i < counter / 3) {
          setGrids(updateGrids(0, docs[i]));
          continue;
        }
        if (i < (counter / 3) * 2) {
          setGrids(updateGrids(1, docs[i]));
        }
        if (i > (counter / 3) * 2) {
          setGrids(updateGrids(2, docs[i]));
        }
      }
    }
    // eslint-disable-next-line
  }, [setGrids, docs]);

  const handleClickImg = (img) => {
    navigate(`/${img.id}`);
  };

  return (
    <div className="gallery-root">
      <div className="photo-grid">
        {grids.map((grid, i) => (
          <div className="photo-column" key={i}>
            {grid.map((img, j) => (
              <div
                className="photo-item"
                key={j}
                onClick={() => handleClickImg(img)}
              >
                <img src={img.url} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
