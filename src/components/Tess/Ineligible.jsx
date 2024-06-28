/** @format */

import React, {useEffect} from "react";
import Successgif from "../../assets/Icons/success.gif";

function Ineligible() {
  
useEffect(()=> {
  window.scrollTo(0, 0);
});


//functions to call the modal open and close 




  return (
    <div className="bg-white flex flex-col justify-center items-center mx-auto h-[fixed] p-4 z-50 ">
      <img
        src={Successgif}
        alt="success-gif"
        className="w-[300px] h-[250px] mx-auto flex justify-center items-center"
      />
      <p className="thanks-text text-dark font-bold relative bottom-[3rem] font-serif text-2xl text-center">
        Thank you for submitting your application for the TEES 2024
        Entrepreneurial Pitches. Due to the high volume of applications, we will
        be unable to provide you with a status of your applications nor provide
        personalized feedback. Should you be accepted to proceed to the next
        stage of the process, you will be contacted via email. Kindly check your
        emails regularly as failure to respond by the stipulated deadlines may
        mean your application will not be progressed. Thank you as your response
        has been recorded. We wish you well in your endeavours. Thank you for
        your time and participation. Don’t forget to register for TEES 2024 as
        it is a prerequisite for the consideration of your application and
        participation in the TEES 2024 Entrepreneurial Pitches. See you at TEES
        24 on November 30 2024. For more information please visit,
        <a href="https://tees2024.webflow " className="text-blue-700">
          {" "}
          tees2024.webflow{" "}
        </a>
        io or{" "}
        <a
          href="mailto:t-ventures@tongston.com
"
          className="text-blue-700"
        >
          t-ventures@tongston.com
        </a>{" "}
      </p>
    </div>
  );
}

export default Ineligible;
