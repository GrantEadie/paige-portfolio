import React, { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router";
import "swiper/swiper.min.css";
import _ from "lodash";

const PhotoDetail = ({ docs }) => {
  const location = useLocation();
  const initialSlide = useCallback(() => {
    return _.findIndex(docs, (img) => `/${img.id}` === location.pathname, 0);
  }, []);
  console.log(initialSlide);
  return (
    <div className="photo-detail-root">
      <Swiper initialSlide={initialSlide()}>
        {docs.map((img) => (
          <SwiperSlide key={img.id}>
            <img className="photo-detail-img" src={img.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoDetail;
