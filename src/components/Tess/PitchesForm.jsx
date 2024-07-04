import React, { useState, useEffect, useRef } from "react";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notification";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import CDD from "./Customdropdown2";
import ReCAPTCHA from "react-google-recaptcha";

//hashed route for the success page
const HASHED_SUCCESS_ROUTE =
  "4fbdce769f4bfaa74c9f5fc9e593e3a7bf781f64bf16fb1b9b2a3a4466795373";

const PitchesForm = ({ onClose }) => {
  // disable scroll on modal mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const recaptchaRef = useRef(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bizregistered, setBizRegistered] = useState("");
  const [received_funding, setReceived_Funding] = useState("");
  const [values, setValues] = useState({
    founder_name: "",
    founder_email: "",
    founder_phone_number: "",
    founder_local_city: "",
    founder_profile_link: "",
    business_name: "",
    business_description: "",
    company_mis_vis: "",
    operation_locations: "",
    operation_commence_year: "",
    online_locations: "",
    social_links: "",
    registered_as: "",
    registered_when: "",
    country_incorporation: "",
    services_description: "",
    who_customers: "",
    sales_channel: "",
    number_customers: "",
    active_customers: "",
    main_competitors_description: "",
    unique_usp_description: "",
    number_employees: "",
    addressing_sdg: "",
    cur_raised_tody: "",
    looking_to_raise: "",
    immediate_needs: "",
    why_selected: "",
    signature: "",
  });
  const [fund_type, setFund_Type] = useState([]);

  // custom dropdown and multiple choice

  const [registered, setRegistered] = useState({
    yes: false,
    No: false,
  });

  const [funding, setFunding] = useState({
    Yes: false,
    No: false,
  });

  const [fundtype, setFundType] = useState({
    type_1: false,
    type_2: false,
    type_3: false,
    type_4: false,
    type_5: false,
    type_6: false,
  });

  const fundingChange = (event) => {
    const { id, funding } = event.target;
    setFunding((prev) => ({
      ...prev,
      [id]: funding,
    }));
  };

  const registeredChange = (event) => {
    const { id, registered } = event.target;
    setRegistered((prev) => ({
      ...prev,
      [id]: registered,
    }));
  };

  const fundtypeChange = (event) => {
    const { id, fundtype } = event.target;
    setFundType((prev) => ({
      ...prev,
      [id]: fundtype,
    }));
  };

  const handleOptionChange = (event) => {
    setBizRegistered(event.target.value);
  };
  const handleFunding_Received = (event) => {
    setReceived_Funding(event.target.value);
  };

  const registeredchecked = Object.values(registered).every(Boolean);
  const fundingchecked = Object.values(funding).every(Boolean);
  const fundtypechecked = Object.values(fundtype).every(Boolean);

  //declaration
  const [checked, setChecked] = useState({
    chk1: false,
  });
  const handleChecked = () => {
    const { id, checked } = event.target;
    setChecked((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  //api keys
  const Service_Id = "service_z3uzwhg";
  const Template_Id = "template_vahdjvt";
  const Api_Key = "CDmJ3huYpinZb0wEA";

  const submitForm = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      showErrorNotification("Please complete the reCAPTCHA verification.");
      return;
    }

    if (bizregistered === "No") {
      console.log("user selected No");
    } else {
      console.log("user selected", bizregistered);
    }

    if (received_funding === "No") {
      console.log("user selected No");
    } else {
      console.log("selected", received_funding);
    }

    // Render emailjs function to capture form inputs
    const templateParams = {
      founder_name: values.founder_name,
      founder_email: values.founder_email,
      founder_phone_number: values.founder_phone_number,
      founder_local_city: values.founder_local_city,
      founder_profile_link: values.founder_profile_link,
      business_name: values.business_name,
      business_description: values.business_description,
      company_mis_vis: values.company_mis_vis,
      operation_locations: values.operation_locations,
      operation_commence_year: values.operation_commence_year,
      online_locations: values.online_locations,
      social_links: values.social_links,
      registered_as: values.registered_as,
      registered_when: values.registered_when,
      country_incorporation: values.country_incorporation,
      services_description: values.services_description,
      who_customers: values.who_customers,
      sales_channel: values.sales_channel,
      number_customers: values.number_customers,
      active_customers: values.active_customers,
      main_competitors_description: values.main_competitors_description,
      unique_usp_description: values.unique_usp_description,
      number_employees: values.number_employees,
      addressing_sdg: values.addressing_sdg,
      cur_raised_tody: values.cur_raised_tody,
      looking_to_raise: values.looking_to_raise,
      immediate_needs: values.immediate_needs,
      why_selected: values.why_selected,
      signature: values.signature,
      fund_type: fund_type.join(", "),
      received_funding: received_funding,
      bizregistered: bizregistered,
    };

    emailjs
      .send(Service_Id, Template_Id, templateParams, Api_Key)
      .then((response) => {
        if (response.status === 200) {
          setValues({
            founder_name: "",
            founder_email: "",
            founder_phone_number: "",
            founder_local_city: "",
            founder_profile_link: "",
            business_name: "",
            business_description: "",
            company_mis_vis: "",
            operation_locations: "",
            operation_commence_year: "",
            online_locations: "",
            social_links: "",
            registered_as: "",
            registered_when: "",
            country_incorporation: "",
            services_description: "",
            who_customers: "",
            sales_channel: "",
            number_customers: "",
            active_customers: "",
            main_competitors_description: "",
            unique_usp_description: "",
            number_employees: "",
            addressing_sdg: "",
            cur_raised_tody: "",
            looking_to_raise: "",
            immediate_needs: "",
            why_selected: "",
            signature: "",
          });
          setFund_Type([]);
          setReceived_Funding("");
          setBizRegistered("");
          setLoading(false);
          showSuccessNotification("Submitted successfully");
          setRecaptchaValue(null);
          setAgreed(false);
          onClose();

          setLoading(true);
          //toggle the success modal on successful submission

          navigate(`/${HASHED_SUCCESS_ROUTE}`);
          // Reset the reCAPTCHA widget
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
        } else {
          setLoading(false);
          showErrorNotification("Check network connection");
          console.log("network error");
        }
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Failed to submit, try again");
        console.log("Error:", error);
        console.log("Template Params:", templateParams);
      });
  };
  return (
    <div className="z-50 inset-0 fixed w-full flex flex-col justify-center items-center  transparent bg-opacity-20">
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in linear"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="true"
        className="flex flex-col inset-0 z-50 bg-white w-[fixed] h-500px] overflow-y-auto gap-5 justify-start  items-center  rounded-md shadow-md shadow-current       md:w-[900px] md:h-[600px]"
      >
        <button
          onClick={onClose}
          className="close-button  flex ml-auto text-gray font-normal text-xl pr-7 pt-4 "
        >
          close
        </button>
        <h5 className="text-center text-base text-gray font-dm font-bold   md:text-xl">
          <span className="text-red text-2xl">TEES 2024 </span>Entrepreneurial
          Pitches Application
        </h5>
        <h6 className="text-sm text-gray font-serif text-center w-[300px]   flex flex-col gap-4  md:w-[700px] md:text-base md:text-center">
          <h5 className="text-xl font-bold text-gray font-sans">
            Hello & Welcome!
          </h5>
          Apply for the unique opportunity to pitch your Business at TEES 2024
          Entrepreneurial Pitches powered by Tongston Ventures, at the TEES 2024
          set to host attendees globally from 61+ countries on a virtual stage,
          and access enterprise, finance, media & education advisory services &
          cash funding (in US$) for your business from Tongston Ventures.
        </h6>
        <form
          onSubmit={submitForm}
          className=" flex flex-col gap-6 p-4  w-full  md:grid md:grid-cols-2  md:gap-4"
        >
          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Name:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <input
              type="text"
              name="founder_name"
              placeholder="founder/Co-Founder's Full  Name"
              value={values.founder_name}
              onChange={handleChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Email Address:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <input
              type="email"
              name="founder_email"
              placeholder="founder/Co-Founder's Email"
              value={values.founder_email}
              onChange={handleChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Phone Number:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <input
              type="tel"
              name="founder_phone_number"
              placeholder="founder/Co-Founder's Phone Number"
              value={values.founder_phone_number}
              onChange={handleChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Location(City):
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <input
              type="text"
              name="founder_local_city"
              placeholder="Founder / Co-Founder’s Current Location (City)"
              value={values.founder_local_city}
              onChange={handleChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Founder/Co-Founder's Profile:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Provide a Short profile of the Founder(s) and attach links to the
              Founder’s portfolio(s) / Linkedin profiles
            </p>
            <textarea
              type="text"
              name="founder_profile_link"
              placeholder="Profile/Profile Links"
              value={values.founder_profile_link}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Business Name:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <input
              type="text"
              name="business_name"
              placeholder="Name of Business"
              value={values.business_name}
              onChange={handleChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Business Profile:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">Describe Your Business</p>
            <textarea
              type="text"
              name="business_description"
              placeholder="Describe Your Business"
              value={values.business_description}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Mission & Vision:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              What is the Company's Mission and Vision
            </p>
            <textarea
              type="text"
              name="company_mis_vis"
              placeholder="Mission & Vision"
              value={values.company_mis_vis}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Business Location (s):
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Location(s) of operation for your Business [List your operational
              locations (city)]
            </p>
            <textarea
              type="text"
              name="operation_locations"
              placeholder="Business Location (s)"
              value={values.operation_locations}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Business Commencement Year:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              When did your company commence operation? State Year
            </p>
            <input
              type="number"
              name="operation_commence_year"
              placeholder="Year of Business Commencement "
              value={values.operation_commence_year}
              onChange={handleChange}
              className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Business Website:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Where can we find your Business online? (Website - If you do not
              have any, state "NONE")
            </p>
            <textarea
              type="url"
              name="online_locations"
              placeholder="Business Website "
              value={values.online_locations}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Social Links:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Where can we find your business online? (Facebook / Instagram /
              Linkedin / Website / Youtube / TikTok / X - If you do not have
              any, state "NONE". If you have multiple, state all of them with
              their links)
            </p>
            <textarea
              type="url"
              name="social_links"
              placeholder="Social Media Handles "
              value={values.social_links}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          {/* dropdowns section */}

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Is Your Business Registered?:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <select
              value={bizregistered}
              onChange={handleOptionChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
              required
            >
              <option value="" disabled>
                {" "}
                Select an Option
              </option>
              <option value="Yes"> Yes</option>
              <option value="No"> No</option>
            </select>
            {bizregistered == "Yes" && (
              <label className=" flex flex-col gap-4 justify-start items-start p-1">
                <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
                  What Is Your Business/Company Registered as?:
                  <span className="text-red font-bold text-sm">*</span>
                </h6>
                <select
                  name="registered_as"
                  value={values.registered_as}
                  onChange={handleChange}
                  className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
                  required
                >
                  <option value="" disabled>
                    {" "}
                    Select an Option
                  </option>
                  <option value="Company Limited by Shares">
                    {" "}
                    Company Limited by Shares
                  </option>
                  <option value="Business Name/Sole Proprietorship">
                    Business Name/Sole Proprietorship{" "}
                  </option>
                  <option value="Partnership"> Partnership</option>
                  <option value="Cooperative  Society">
                    {" "}
                    Cooperative Society
                  </option>
                  <option value="Personal Liability Company">
                    Personal Liability Company
                  </option>
                  <option value="Proprietary  Limited Company">
                    Proprietary Limited Company
                  </option>
                  <option value="Joint Venture">Joint Venture</option>
                </select>

                <label className=" flex flex-col gap-4 justify-start items-start p-1">
                  <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
                    Registration Date:
                    <span className="text-red font-bold text-sm">*</span>
                  </h6>
                  <p className="text-[10px] text-gray">
                    When Was Your Company/Business Registered?
                  </p>
                  <input
                    type="date"
                    name="registered_when"
                    placeholder="Registration Date "
                    value={values.registered_when}
                    onChange={handleChange}
                    className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
                    required
                  />
                </label>

                {/* country of incorporation */}

                <label className=" flex flex-col gap-4 justify-start items-start p-1">
                  <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
                    Country of Incorporation :
                    <span className="text-red font-bold text-sm">*</span>
                  </h6>

                  <input
                    type="text"
                    name="country_incorporation"
                    placeholder="Country of  incorporation "
                    value={values.country_incorporation}
                    onChange={handleChange}
                    className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
                    required
                  />
                </label>
              </label>

              //text field for the other values
            )}
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Services Description:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Describe each of your Products and Services. Once done, please
              include an online link to your products and services (e.g.
              Twitter, Jumia, Konga, Amazon, Selar, Facebook, Website, Whatsapp
              Catalog, etc.) OR pictures/videos of the products and services if
              not available online. Please store in a cloud Storage and Share
              the Link here
            </p>
            <textarea
              type="text"
              name="services_description"
              placeholder="Describe your Services "
              value={values.services_description}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Customer Base:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Who are your customers for these products/services?
            </p>
            <textarea
              type="text"
              name="who_customers"
              placeholder="Describe your Customers "
              value={values.who_customers}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Sales Channel:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              What sales channel are You using to reach them?
            </p>
            <input
              type="text"
              name="sales_channel"
              placeholder="Sales  Channel "
              value={values.sales_channel}
              onChange={handleChange}
              className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Number of Customers:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              How many users or customers have you acquired since launch?
            </p>
            <input
              type="number"
              name="number_customers"
              placeholder="Number of Customers "
              value={values.number_customers}
              onChange={handleChange}
              className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Who are your main competitors?:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Who are your main competitors? (In case you don't know any direct
              competitors, please think about solutions that your potential
              customers are using today to solve the same problem)
            </p>
            <textarea
              type="text"
              name="main_competitors_description"
              placeholder="Competitors "
              value={values.main_competitors_description}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Selling Proposition:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              What is your unique selling position (USP)? What’s new about what
              you’re doing? [Describe what features or benefits differentiate
              you from the competitors and existing solutions?]
            </p>
            <textarea
              type="text"
              name="unique_usp_description"
              placeholder="Unique Selling Position "
              value={values.unique_usp_description}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Number of Employees:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Number of Staff/Employees (This includes volunteers, paid & unpaid
              staff)
            </p>
            <select
              name="number_employees"
              value={values.number_employees}
              onChange={handleChange}
              className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
              required
            >
              <option value="" disabled>
                Select an Option
              </option>
              <option value="None (I am the only employee)">
                None (I am the only employee)
              </option>
              <option value="1-10 employees">1-10 employees</option>
              <option value="11-50 employees">11-50 employees</option>
              <option value="Above 50 employees">Above 50 employees</option>
            </select>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              UN SDG Goals:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              How are you addressing the UN-SDG goal(s) selected
            </p>
            <textarea
              type="text"
              name="addressing_sdg"
              placeholder="description of how SDG is being met "
              value={values.addressing_sdg}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Funding Received?:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Has your Business previously received funding? Yes / No?
            </p>
            <select
              value={received_funding}
              onChange={handleFunding_Received}
              className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:text-sm"
              required
            >
              <option value="" disabled>
                Select an Option
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {received_funding == "Yes" && (
              <label className=" flex flex-col gap-4 justify-start items-start p-1 w-full">
                <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
                  Check all that apply:
                  <span className="text-red font-bold text-sm">*</span>
                </h6>
                <p className="text-[10px] text-gray">If yes,what type?</p>
                <CDD
                  options={[
                    "Own Funds",
                    "Equity",
                    "Grant",
                    "Debt",
                    "Convertible Debt",
                    "Other",
                  ]}
                  onChange={(selectedOptions) => setFund_Type(selectedOptions)}
                  value={fund_type}
                />
              </label>
            )}
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              How much are you looking to raise for your immediate Needs?
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              {" "}
              Please include the currency e.g. US$10,000 or EGP150,000"
            </p>
            <textarea
              type="text"
              name="looking_to_raise"
              placeholder="Amount to raise "
              value={values.looking_to_raise}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              What are your immediate Needs? What will you spend the funds
              raised on?: <span className="text-red font-bold text-sm">*</span>
            </h6>

            <textarea
              type="text"
              name="describe"
              placeholder="intermediate Needs "
              value={values.immediate_needs}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Why Should You be Selected to Pitch?
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Please upload a 2-minute video. Please make sure you find a clear
              background; no background noise; clear camera, Upload to a Cloud
              Storage and Share link to Video here!
            </p>

            <textarea
              type="text"
              name="why_selected"
              placeholder=" Video url "
              value={values.why_selected}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-l-2   border-l-red   border-b-2 border-b-gray border-r-2  border-r-red  focus:outline-none  md:w-full  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfyBg4pAAAAAK2lT4J7KmjcQC9FJENGHbS9SpJL"
            onChange={handleRecaptchaChange}
            className="mr-auto "
          />

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-full  justify-center items-center md:w-full"
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className=" cursor-pointer h-[20px] mx-auto flex w-[20px] mx-auto flex"
            />
            <p className="h-[300px] p-3 text-sm overflow-y-auto">
              <ul className="list-disc flex flex-col gap-4">
                <li>
                  I hereby declare and confirm the following statements in
                  relation to my submission for the TEES 2024 Entrepreneurial
                  Pitches, scheduled for November 30, 2024.
                </li>
                <li>
                  I acknowledge and accept the reputational risks associated
                  with my submission and participation in the TEES 2024
                  Entrepreneurial Pitches.
                </li>
                <li>
                  I affirm that I am the rightful owner of all intellectual
                  property associated with my submission, and I have the
                  authority to submit it for consideration. My submission does
                  not violate any sanctions, laws, or legislations in any
                  jurisdiction worldwide.
                </li>
                <li>
                  I declare that I am not associated with any criminal activity
                  or anti-money laundering schemes and have the necessary
                  authorization and capacity to make this submission.
                </li>
                <li>
                  I confirm that I am of sound mental and physical health, fully
                  capable of participating in this competition and fulfilling
                  all subsequent obligations.
                </li>
                <li>
                  I understand and accept the terms of the TEES 2024
                  Entrepreneurial Pitches, including the competition process,
                  obligations, and nature of the prizes. Participation does not
                  guarantee a prize, and the organizers are under no obligation
                  to provide direct feedback or information regarding the status
                  of my submission.
                </li>
                <li>
                  I agree to adhere to all rules, guidelines, and deadlines
                  established by the TEES 2024 Entrepreneurial Pitches
                  organizers throughout the competition.
                </li>
                <li>
                  I understand that any misrepresentation or falsification of
                  information in my submission may lead to disqualification from
                  the competition. The organizers have the right to disqualify
                  any participant found to be in violation of the competition's
                  rules or engaged in unethical conduct.
                </li>
                <li>
                  I grant the organizers of the TEES 2024 Entrepreneurial
                  Pitches the right to use my name, likeness, and submission
                  materials for promotional and publicity purposes related to
                  the competition. My participation does not create any
                  partnership, joint venture, or employment relationship with
                  the organizers.
                </li>
                <li>
                  I agree to keep confidential any sensitive information or
                  trade secrets shared during the competition, whether from
                  other participants or the organizers. I am not under any
                  contractual or legal obligations that would prevent me from
                  participating in the TEES 2024 Entrepreneurial Pitches or
                  accepting any potential prizes.
                </li>
                <li>
                  If selected as a finalist or winner, I may be required to
                  provide additional documentation or information to verify the
                  accuracy of my submission. I acknowledge that aspects of the
                  competition may be conducted by a third party duly appointed
                  by Tongston, and I agree to oblige and participate in the
                  process as necessary.
                </li>
                <li>
                  I have read and understood the terms and conditions of the
                  non-disclosure agreement provided herewith and agree to abide
                  by any relevant policies and procedures of Tongston.
                </li>

                <li>
                  There is no application fee for this competition. Anyone
                  purporting to collect an application fee is not associated
                  with Tongston and should be reported to
                  t-ventures@tongston.com, copying lprg@tongston.com. Tongston
                  does not owe a duty to take action on any fraudulent matters
                  that may affect me. It is my responsibility to be vigilant,
                  read all relevant terms and conditions, and provide
                  information only as presented or requested.
                </li>

                <li>
                  Tongston reserves the right to conduct further due diligence
                  and Know Your Customer (KYC) checks on me, my submissions, my
                  team, and any other affiliates or third parties associated
                  with my submission. Any additional information required for
                  due diligence will be at my cost. I must make myself available
                  throughout the competition process to ensure that any
                  information is adequately reviewed.
                </li>

                <li>
                  I agree to provide Portfolio Reporting, including information,
                  testimonials, and any relevant details pertaining to my
                  submission, my business, or organization, or myself, whether I
                  win the prize or not. I authorize Tongston to retain my
                  information for marketing purposes. Tongston reserves the
                  right to use the information provided by me to pre-register me
                  for events or activities organized by the Tongston group of
                  companies or to share my information for marketing purposes by
                  Tongston or its affiliates or partners.
                </li>

                <li>
                  Tongston shall be granted the right of first refusal to
                  acquire a significant minority of the company's equity at par.
                  Additionally, they will have the primary responsibility as the
                  lead arranger for equity, debt, quasi-equity, and other
                  financial instruments within the company's capital structure,
                  as well as for its associated products and services.
                </li>

                <li>
                  Tongston can take action should I not fulfill all the terms
                  and conditions required by the rules and regulations
                  stipulated for the prizes and/or any further documentation
                  that is signed at a later date. This may include legal action
                  or other remedial actions. If Tongston chooses not to take any
                  action, it is not a waiver of Tongston's rights, and Tongston
                  may do so at a later date if required.
                </li>

                <li>
                  I will hold Tongston harmless and indemnify Tongston for any
                  losses, issues, or damages that Tongston may face as a result
                  of my not abiding by the terms and conditions or breaching any
                  of the terms and conditions as applicable. Tongston reserves
                  the right to take action accordingly. If Tongston has to do
                  so, it is not a waiver of Tongston's rights.
                </li>

                <li>
                  In the event that Tongston is unable to provide the specified
                  prizes, benefits, or services in full or in part due to
                  unforeseen circumstances, including but not limited to force
                  majeure events, technical or technological difficulties,
                  man-made difficulties, or acts of God, Tongston will not be
                  held liable for any such inability or its consequences.
                  Tongston will make reasonable efforts to provide the benefits
                  and services to the fullest extent possible. If I am unable to
                  claim or fully enjoy the benefits due to any reasons beyond
                  Tongston's control, it is my responsibility to manage and
                  accept such limitations.
                </li>

                <li>
                  Tongston shall not be responsible for any losses, unmet
                  expectations, or outcomes arising from my participation in
                  TEES, entrepreneurial pitches, or any other related
                  activities, products, or services. Tongston and its affiliates
                  or partners reserve the right to charge an appropriate fee for
                  the continuing enjoyment of its products and services, whether
                  it is in connection with the TEES 2024 Entrepreneurial Pitches
                  submissions or any other engagements with me. Tongston is
                  under no obligation to provide any of its products and
                  services for free or at a discount.
                </li>

                <li>
                  Failure to follow the instructions strictly may lead to
                  disqualification.
                </li>

                <li>
                  I have the necessary authority to submit an application on
                  behalf of the organization named in this application. The
                  business mentioned does not negatively impact any of the 17
                  sustainable development goals (SDGs). I will be required to
                  provide further information at the due diligence stage to
                  verify the information shared and provide additional
                  information/documentation as required. This may include
                  physical searches, verification of business, interviews, other
                  enquiries, including interviews with stakeholders, customers,
                  funders, partners, and others.
                </li>

                <li>
                  I have read, accepted, and understood the terms and conditions
                  for participating in the Tongston Entrepreneurial Education
                  Summit (TEES) and TEES Entrepreneurial Pitches. I commit to
                  abide by the rules and guidelines set forth for the TEES 2024
                  Entrepreneurial Pitches and accept the outcomes of the
                  competition, whether successful or not.
                </li>
                <label className="flex flex-col gap-2 relative top-7">
                  <p className="text-sm  flex flex-row gap-2">
                    Signature
                    <span className="text-red flex justify-start items-center">
                      *
                    </span>{" "}
                  </p>
                  <input
                    type="text"
                    name="signature"
                    value={values.signature}
                    onChange={handleChange}
                    className=" border border-gold focus:outline-none"
                    placeholder="Use You Legal Name"
                  />
                </label>
              </ul>
            </p>
          </label>

          <button
            type="submit"
            disabled={!agreed}
            className={`bg-red w-full h-[40px] p-2 text-white ${
              !agreed && "cursor-not-allowed  bg-opacity-50"
            }`}
            onClick={() => {
              if (values.signature === "") {
                alert("please  read terms and enter your signature");
              } else {
                console.log("signature entered");
              }
            }}
          >
            {loading ? "Please Wait..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PitchesForm;
