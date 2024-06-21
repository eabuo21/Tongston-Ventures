import React, { useEffect, useState } from "react";
import Barrier from "../../assets/Icons/barrier.png"; // Ensure the case matches your actual file name
import { Link } from "react-router-dom";
import TeesAppForm from "./TeesAppForm";
import TessFlyer from "../../assets/images/TEES Pitches Flyer.png";

const TeesModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // state to handle the application form
  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="inset-0 z-50 w-full bg-black bg-opacity-60 flex flex-col justify-center items-center fixed">
      <div
        className="bg-white  relative w-[350px] inset-0 z-50 h-[fixed] p-3 rounded-md  overflow-y-auto flex flex-col justify-start items-center shadow-md md:h-[550px] md:w-[500px]"
        style={{
          background: `url(${TessFlyer}) no-repeat center center / cover`,
        }}
      >
        <button
          onClick={onClose}
          className="flex ml-auto mr-4 p-3 text-dark text-xl"
        >
          close
        </button>

        <div className="flex flex-col gap-2  justify-center items-center p-2 w-full">
          <img
            src={TessFlyer}
            alt="tees-flyer"
            className="w-full h-[350px] relative"
          />
          <h3 className="text-red font-bold text-center text-2xl font-fan ">
            Pitch For Investment @ T<span className="text-dark">EE</span>S{" "}
            <span className="text-dark">2</span>02
            <span className="text-dark">4</span>
          </h3>
        </div>
        <button
          onClick={openForm}
          className="hover-effect bg-red p-3 text-white font-bold flex justify-center items-center tex-center   h-[78px] w-[250px] md:w-[350px] px-2  hover:transition-all hover:ease-in-out hover:duration-1000 ease-in-out transition-all duration-1000 hover:text-white"
        >
          <p className="image-wrapper">Register</p>
        </button>

        {showForm && <TeesAppForm onClose={closeForm} />}
      </div>
    </div>
  );
};

export default TeesModal;
