import React, { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useNavigate } from "react-router";
import "swiper/swiper.min.css";
import _ from "lodash";
import { ArrowLeft } from "phosphor-react";

const PhotoDetail = ({ docs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialSlide = useCallback(() => {
    return _.findIndex(docs, (img) => `/${img.id}` === location.pathname, 0);
  }, []);
  return (
    <>
      <Swiper
        className="photo-detail-root"
        initialSlide={initialSlide()}
        slidesPerView={1}
      >
      <ArrowLeft
        size={20}
        className="back-arrow"
        onClick={() => navigate("/")}
      />
        {docs.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="photo-holder">
              <img className="photo-detail-img" src={img.url} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PhotoDetail;
