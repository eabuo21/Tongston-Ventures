import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BacktoTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  return (
    <>
      {visible && (
        <>
          <button
            onClick={handleScrollToTop}
            className="flex flex-col justify-center items-center p-4 bg-blue-500 rounded-full cursor-pointer fixed bottom-20 right-4 hover:bg-opacity-70 transition-all duration-1000 ease-in-out hover:text-red"
          >
            <FontAwesomeIcon
              icon={faChevronUp}
              className="text-white font-bold text-xl"
            />
          </button>
          <button
            onClick={handleScrollDown}
            className="flex flex-col justify-center items-center p-4 bg-green-500 rounded-full cursor-pointer fixed bottom-4 right-4 hover:bg-opacity-70 transition-all duration-1000 ease-in-out hover:text-red"
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-white font-bold text-xl"
            />
          </button>
        </>
      )}
    </>
  );
};

export default BacktoTop;
