/** @format */

import { useEffect, useState } from "react";
import PitchesForm from "./PitchesForm";

import Tessflyer from "../../assets/images/TEES Pitches Flyer.png";

function Successful() {
  // function to toggle the focus-modal

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  //functions to call the modal open and close
  const [ismodalopen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex  fixed inset-0 bg-[#6FA7C0] z-50 flex-col justify-center items-center  ">
      <div className=" flex flex-col  gap-3  shadow-xl shaw-current justify-start items-center mx-auto h-[450px] overflow-y-auto  w-[340px] md:h-[520px] bg-white md:w-[800px] p-4 z-50 ">
        <img
          src={Tessflyer}
          alt="success-gif"
          className="w-auto h-[300px] mx-auto flex justify-center items-center  md:w-[750px]"
        />
        <p className="text-gray font-normal text-base font-serif text-center w-full    md:text-xl ">
          <b className="text-2xl">Thank you </b>for completing the eligibility
          check for the TEES 2024 Entrepreneurial Pitches! A copy of your
          responses has been sent to your email with the Application Link. Click
          the button to continue. <br />
          <b>GoodLuck!</b>
        </p>
        <button
          onClick={() => openModal()}
          className="bg-[#6FA7C0] p-5 text-white font-bold text-base font-serif text-center  flex justify-center items-center  w-[200px] h-[30px]"
        >
          Continue
        </button>
        {ismodalopen && <PitchesForm onClose={() => closeModal()} />}
      </div>
    </div>
  );
}

export default Successful;
