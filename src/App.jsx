import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Investment from "./pages/Investment";
import ErrorPage from "./pages/404";
import Business from "./pages/Business";
import { ToastContainer } from "react-toastify";
import { CircleLoader } from "react-spinners";
import TeesModal from "./components/Tess/TeesModal";
import Success from "./components/Tess/Success";
import Applications from "./components/Tess/Applications";
import Ineligible from "./components/Tess/Ineligible";
import Scroll from "./components/Tess/ScrolltoBttom";
import PitchesForm from "./components/Tess/PitchesForm";

const HASHED_INELIGIBLE_ROUTE =
  "d8e23981a7d2de3c0f3a2d3f02f823b7a514889a04ec843d0907f10b0389bc2a";

const HASHED_APPLICATIONS_ROUTE =
  "56f1c75521d58a3b4cc7c05615353673a2e1f55d5e5aaed0e1c9915a3a64d47e";

const HASHED_SUCCESS_ROUTE =
  "4fbdce769f4bfaa74c9f5fc9e593e3a7bf781f64bf16fb1b9b2a3a4466795373";

const HASHED_PITCH_FORM_ROUTE = "7fbdce769f4bfaa74c9f5fc9e593e3a7bf781f_espx";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
    sessionStorage.setItem("teesModalShown", "true");
  };

  const simulateWebsiteLoading = () => {
    return new Promise((resolve, ) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  useEffect(() => {
    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const teesModalShown = sessionStorage.getItem("teesModalShown");
    if (!teesModalShown) {
      const timeout = setTimeout(() => {
        setModalOpen(true);
      }, 7000); // 7 seconds in milliseconds

      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container flex  flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 h-[100vh]">
          <CircleLoader
            color={"red"}
            loading={true}
            size={60}
            speedMultiplier={0.3}
          />
          <h7 className="text-red font-bold font-ger text-center">
            Tongston <span className="text-black">Ventures</span>
          </h7>
        </div>
      ) : (
        <>
          {/* <NavBar /> */}
          {/* Tees Modal component mount */}
          {isModalOpen && <TeesModal onClose={closeModal} />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/business" element={<Business />} />
            
            <Route path={`/${HASHED_SUCCESS_ROUTE}`} element={<Success />} />
            <Route
              path={`/${HASHED_APPLICATIONS_ROUTE}`}
              element={<Applications />}
            />
            <Route
              path={`/${HASHED_INELIGIBLE_ROUTE}`}
              element={<Ineligible />}
            />
           <Route 
           path={`/${HASHED_PITCH_FORM_ROUTE}`} element={<PitchesForm/>}/>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <ToastContainer />
          <Scroll className="fixed right-4 " />
        </>
      )}
    </div>
  );
}

export default App;
