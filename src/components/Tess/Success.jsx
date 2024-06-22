import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Successgif from "../../assets/Icons/success.gif";

function Successful() {
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); // 3 seconds

    // Clean up the timer if the component is unmounted before the timer ends
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-white flex flex-col justify-center items-center mx-auto h-[500px]">
      <img
        src={Successgif}
        alt="success-gif"
        className="w-[300px] h-[250px] mx-auto flex justify-center items-center"
      />
      <p className="thanks-text text-green-800 font-bold relative bottom-[3rem] font-serif text-2xl text-center">
        
      </p>
    </div>
  );
}

export default Successful;