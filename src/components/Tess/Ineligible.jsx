/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Failed from "../../assets/images/failed.png";

function Ineligible() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  //functions to call the modal open and close

  return (
    <div className="  failed-container bg-white flex flex-col justify-center items-center mx-auto h-auto p-4 z-50 ">
      <div
        className=" bg-white flex flex-col justify-start items-center gap-[5rem]  w-[400px] h-auto overflow-y-auto   
      md:w-[700px]  md:h-full   shadow-xl rounded-md   p-5"
      >
        <img
          src={Failed}
          alt="success-gif"
          className="w-[150px] h-[150px] mx-auto flex justify-center items-center"
        />
        <p className="thanks-text text-dark font-bold relative bottom-[3rem] font-serif    text-sm md:text-base text-center">
          Thank you for your interest in Pitching at{" "}
          <span className="text-red">TEES-2024.</span> Unfortunately, you do not
          meet the eligibility criteria to apply. We encourage you to check our
          requirements and try again in the future. If you have any questions,
          please visit
          <a
            href="https://tees2024.webflow.io "
            target="blank"
            className="text-blue-700"
          >
            {" "}
            tees2024.webflow.io{" "}
          </a>
          or{" "}
          <a
            href=":https://t-ventures.tongston.com"
            target="_blank"
            className="text-blue-700"
          >
            t-ventures.tongston.com
          </a>{" "}
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-red text-white font-bold text-center flex justify-center items-center p-4 w-[200px] h-[50px]   md:w-[400px] md:h-[44px]
      hover:bg-opacity-70 "
        >
          Return to HomePage!
        </button>
      </div>
    </div>
  );
}

export default Ineligible;
