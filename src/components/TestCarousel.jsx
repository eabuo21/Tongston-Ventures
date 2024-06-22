import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import promise from "../assets/images/clientel/promiseChukwu.png";
import lilian from "../assets/images/clientel/Lilian.jpg";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TestCarol() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    useCss: true,
    useTransform: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div
          key={i}
          className={`custom-dot flex flex-col justify-center items-center hover:border-2 -red border-2     border-gold  rounded-[50%]  h-[20px] p-2 transition-all transition-duration-800 ease-in-out ${
            i === activeIndex ? "active bg-red border-red " : "    " // Add a class for the active dot
          }`}
        ></div>
      );
    },
  };

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="slick-prev bg-rose-400 w-10 h-8 rounded-lg hover:bg-black hover:text-white focus:bg-gold focus:text-white"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="slick-next bg-rose-400 w-10 h-8 rounded-lg hover:bg-black hover:text-white focus:bg-gold focus:text-white"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  }

  return (
    <div className="main-slider-container p-8 flex flex-col justify-center items-center bg-light-brown">
      <Slider
        {...settings}
        className="w-full h-[fixed] flex flex-row justify-center items-center gap-2 md:gap-9 md:justify-center md:items-center "
      >
        {/*section 1*/}
        <div className="promise-container flex flex-col gap-4 justify-center items-center h-auto p-4">
          <div className="image-container flex justify-center items-center rounded-[50%] p-2 bg-gray-300 w-40 ml-auto mr-auto mb-6  shadow-current shadow-md">
            <img
              src={promise}
              alt="promises-image"
              className="w-[160px] h-[160px] rounded-[50%] "
            />
          </div>
          <h3 className="heading-text text-xl text-center font-bold font-sans text-black   md:text-2xl">
            PROMISE OKWUCHUKWU
          </h3>
          <h4 className="text-black font-sans text-base text-center md:text-xcl">
            Founder, Mijolnia
          </h4>
          <section className="relative top-4  flex  w-full     md:w-[50%]   md:mx-auto">
            <p className="text-sm text-center font-sans text-black   mmd:text-base pb-6">
              <span
                className=" text-transparent bg-clip-text bg-gradient-to-br 
              from-gold to-rose-700 text-2xl font-cur  font-bold"
              >
                "{" "}
              </span>{" "}
              I'm grateful to Tongston for recognizing Mijolnia's potential and
              awarding us the TEES Elevator Pitch prize, which included both a
              substantial cash award and a transformative business advisory
              session. Their support has been invaluable on our journey to
              provide sustainable energy solutions. The entrepreneurial insights
              and network connections I gained during the Tongston Business
              Advisory Session have been instrumental in shaping our vision.
              We're excited to continue making an impact, starting here in
              Nigeria and reaching out to the world. Thank you, Tongston!
              <span
                className=" text-transparent bg-clip-text bg-gradient-to-br 
              from-gold to-rose-700 text-2xl font-cur  font-bold"
              >
                "{" "}
              </span>
            </p>
          </section>
        </div>

        {/*section 2*/}
        <div className="promise-container flex flex-col gap-4 justify-center items-center h-auto p-4">
          <div className="image-container flex justify-center items-center rounded-[50%] p-2 bg-gray-300 w-40 ml-auto mr-auto mb-6  shadow-current shadow-md">
            <img
              src={lilian}
              alt="promises-image"
              className="w-[160px] h-[160px] rounded-[50%] "
            />
          </div>
          <h3 className="heading-text text-xl text-center font-bold font-sans text-black   md:text-2xl">
            LILIAN EFOBI
          </h3>
          <h4 className="text-black font-sans text-base text-center md:text-xcl">
            Founder, Skills On Wheels
          </h4>
          <section className="relative top-4  flex  w-full     md:w-[50%]   md:mx-auto">
            <p className="text-sm text-center font-sans text-black   mmd:text-base pb-6">
              <span
                className=" text-transparent bg-clip-text bg-gradient-to-br 
              from-gold to-rose-700 text-2xl font-cur  font-bold"
              >
                "{" "}
              </span>{" "}
              I came across TEES2022, thanks to Skills Outside School
              Foundation. They recommended it for the participants of Skills
              Outside School Foundation Lead4Change Initiative. I submitted my
              proposal and got selected to pitch my innovation. I took home some
              valuable insights not just from pitching my innovation but from
              attending the summit itself, through the Tongston business
              advisory session with the CEO and CFO.
              <span
                className=" text-transparent bg-clip-text bg-gradient-to-br 
              from-gold to-rose-700 text-2xl font-cur  font-bold"
              >
                "{" "}
              </span>
            </p>
          </section>
        </div>
      </Slider>
    </div>
  );
}

export default TestCarol;
