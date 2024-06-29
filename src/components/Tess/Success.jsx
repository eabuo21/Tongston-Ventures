import React from "react";

import Successgif from "../../assets/Icons/success.gif";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHome } from "react-icons/fa";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className=" success-container bg-white flex flex-col justify-center items-center mx-auto h-auto p-4 z-50 ">
      <div
        className=" bg-white flex flex-col justify-start items-center gap-5  w-[400px] h-auto overflow-y-auto   
      md:w-[700px]  md:h-full   shadow-xl rounded-md   p-5"
      >
        <img
          src={Successgif}
          alt="success-gif"
          className="w-[300px] h-[250px] mx-auto flex justify-center items-center"
        />
        <p className="thanks-text text-dark font-bold relative bottom-[3rem] font-serif    text-sm md:text-base text-justify">
          Thank you for submitting your application for the TEES 2024
          Entrepreneurial Pitches. Due to the high volume of applications, we
          will be unable to provide you with a status of your applications nor
          provide personalized feedback. Should you be accepted to proceed to
          the next stage of the process, you will be contacted via email. Kindly
          check your emails regularly as failure to respond by the stipulated
          deadlines may mean your application will not be progressed. Thank you
          as your response has been recorded. We wish you well in your
          endeavours. Thank you for your time and participation. Don’t forget to
          register for TEES 2024 as it is a prerequisite for the consideration
          of your application and participation in the TEES 2024 Entrepreneurial
          Pitches. See you at TEES 24 on November 30 2024. For more information
          please visit,
          <a
            href="https://tees2024.webflow.io "
            target="blank"
            className="text-blue-700"
          >
            {" "}
            tees2024.webflow.io{" "}
          </a>
          or{" "}
          <a href="https://t-ventures.tongston.com" target="blank"
          className="text-blue-700">
            t-ventures.tongston.com
          </a>
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-red text-white font-bold text-center flex justify-center items-center p-4 w-[200px] h-[50px]   md:w-[400px] md:h-[44px]
      hover:bg-opacity-70 "
        >
          <FontAwesomeIcon
            icon={FaHome}
            className="text-white font-bold text-xl"
          />{" "}
          Return to HomePage!
        </button>
      </div>
    </div>
  );
};

export default Success;
