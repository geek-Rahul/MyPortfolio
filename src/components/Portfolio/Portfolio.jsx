import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import chatApp from "../../img/chatApp.png";
import Ecommerce from "../../img/Ecommerce.png";
import placementPrep from "../../img/placementPrep.png";
import ecamResources from "../../img/ecamResources.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      {/* <span>Portfolio</span> */}

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://placementportfolio.netlify.app/"><img src={placementPrep} className="placementPrep" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ecam-resources.netlify.app/"><img src={ecamResources} className="placementPrep" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shoping-cart-app.netlify.app/"><img src={Ecommerce} className="placementPrep" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src={chatApp} className="chatApp" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src={MusicApp} className="placementPrep" alt="" /></a>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
