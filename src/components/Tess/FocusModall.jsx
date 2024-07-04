import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const FocusModall = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const contentRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 1000); // Match the duration of the closing animation
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    if (scrollTop + clientHeight >= scrollHeight) {
      setShowScrollDown(false);
    } else {
      setShowScrollDown(true);
    }
  };

  useEffect(() => {
    const contentEl = contentRef.current;
    contentEl.addEventListener("scroll", handleScroll);
    return () => {
      contentEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    contentRef.current.scrollBy({ top: 100, behavior: "smooth" });
  };

  const handleScrollUp = () => {
    contentRef.current.scrollBy({ top: -100, behavior: "smooth" });
  };

  return (
    <div
      className={`focus-modall w-full inset-0 flex flex-col justify-start items-start z-50 fixed bg-dark bg-opacity-70 ${
        isClosing ? "closing" : ""
      }`}
    >
      <div
        ref={contentRef}
        className="bg-white rounded-md w-full h-[400px] overflow-y-auto p-2 flex flex-col justify-start items-start md:w-full relative"
      >
        <button
          onClick={handleClose}
          className="close-button flex ml-auto pr-4 p-2 text-gray hover:text-red text-6xl"
        >
          &times;
        </button>
        <section className="py-4 p-2 flex flex-col justify-start items-start w-full h-auto">
          {showScrollDown ? (
            <button
              onClick={handleScrollDown}
              className="scroll-arrow-down flex justify-center items-center p-2 bg-blue-500 rounded-full cursor-pointer  fixed   left-[80%]   md:left-[90%]  hover:bg-opacity-70 transition-all duration-1000 ease-in-out hover:text-red"
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-white font-bold text-xl"
              />
            </button>
          ) : (
            <button
              onClick={handleScrollUp}
              className="scroll-arrow-up flex justify-center items-center p-2 bg-green-500 rounded-full cursor-pointer fixed   left-[80%]   md:left-[90%]  hover:bg-opacity-70 transition-all duration-1000 ease-in-out hover:text-red"
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                className="text-white font-bold text-xl"
              />
            </button>
          )}
          <l className="list-decimal-zero flex flex-col gap-5 justify-start items-start py-2 text-base md:text-xl">
            <li>
              The business must be an early-stage or mid-stage business (micro /
              nano business)
            </li>
            <li>The business must have early revenues</li>
            <li>The business must be based in Africa</li>
            <li>The business must be within the focus sectors</li>
            <li>
              The business must meet at least 1 sustainable development goal
              (SDG) and must not negatively impact any SDG
            </li>
            <li>The applicant must be the founder/co-founder</li>
            <li>
              The applicant must possess the necessary authority to submit an
              application on behalf of their respective organizations or legal
              entities
            </li>
          </l>
          <p className="learn more-link text-left text-base flex gap-4 text-gray font-sans py-6 md:text-xl">
            Visit the TEES2024 website to get started
            <a
              href="https://tees2024.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://tees2024.webflow.io/
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};
