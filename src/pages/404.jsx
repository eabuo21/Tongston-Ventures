import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/NavBar";
import Feat from "../components/Footer";
import Erm from "../assets/images/Robots/Errorimg.png";

const ErrorPage = () => {
  return (
    <>
      <div className="error-container   w-full  flex justify-center items-center  ">
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in"
          data-aos-duration="2000"
          data-aos-once="true"
          data-aos-mirror="true"
          className="bg-white border  border-gold shadow-current shadow-xl flex flex-col justify-center items-center rounded w-80 h-[600px] p-4 mr-4 ml-4 mt-3 mb-3
       
       md:w-[100%] md:h-[600px] md:mt-6 md:mb-6 md:mr-[4rem] md:ml-[4rem]
       "
        >
          <img
            src={Erm}
            alt="error_image"
            className="w-auto h-auto rounded-full"
          />

          <h2
            className="font-semibold   text-2xl text-black font-ger text-center gap-4
          md:text-5xl 
          "
          >
            <FontAwesomeIcon
              icon={faExclamation}
              className=" error-icon text-red text-7xl"
            />{" "}
            Page Not Found
          </h2>
          <p
            className="under-text text-black text-base font-normal font-sans text-center py-4
          md:text-xl
          "
          >
            Looks Like The Page You're Trying to Surf Dose Not Exist!!
          </p>
          <Link to="/">
            <button className="back-button bg-red p-3 text-white text-bold font-sans hover:bg-gold transition-all ease duration-700 hover:transition-all hover:ease-in-out hover:duration-700">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
