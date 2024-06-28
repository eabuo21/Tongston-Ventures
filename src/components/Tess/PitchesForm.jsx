import React, { useState, useEffect } from "react";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notification";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const PitchesForm = ({ onClose }) => {
  // disable scroll on modal mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [bizregistered, setBizRegistered] = useState("");
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

  const submitForm = (e) => {
    e.preventdefault();
    setLoading(true);

    if (bizregistered == "No") {
      console.log("user selected No");
    } else {
      console.log("user selected", bizregistered);
    }

    // render emailjs function to capture form inputs
    const templateParams = [values.first_name, values.last_name];

    emailjs.send = ("service_id", "template_id", templateParams, "api_key")
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          showSuccessNotification("submitted");
          onClose;
          navigate("/success");
        } else {
          setLoading(false);
          showErrorNotification("check network connection");
          console.log("network error");
        }
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("failed to submit try again", error);
        if (error) {
          console.log(templateParams, "templateParams");
        } else {
          console.log(error, "error");
        }
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
        <h6 className="text-sm text-gray font-serif text-center w-[300px]     md:w-[700px] md:text-base md:text-center">
          Hello & Welcome! Apply for the unique opportunity to pitch your
          Business at TEES 2024 Entrepreneurial Pitches powered by Tongston
          Ventures, at the TEES 2024 set to host attendees globally from 61+
          countries on a virtual stage, and access enterprise, finance, media &
          education advisory services & cash funding (in US$) for your business
          from Tongston Ventures.
        </h6>
        <form
          onSubmit={submitForm}
          className=" flex flex-col gap-6 p-4  w-full  md:grid md:grid-cols-4  md:gap-4"
        >
          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Name:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <input
              type="text"
              name="founder_name"
              placeholder="founder/Co-Founder's Name"
              value={values.founder_name}
              onChange={handleChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:text-sm"
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
              placeholder="founder/Co-Founder's Name"
              value={values.founder_email}
              onChange={handleChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:text-sm"
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
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:text-sm"
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
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Founder's Profile:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Provide a Short profile of the Founder(s) and attach links to the
              Founder’s portfolio(s) / Linkedin profiles
            </p>
            <textarea
              type="text"
              name="founder_profile_link"
              placeholder="Profile"
              value={values.founder_profile_link}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
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
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:text-sm"
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
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Mission & Vision:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              What is The Company's Mission and Vision
            </p>
            <textarea
              type="text"
              name="company_mis_vis"
              placeholder="Mission & Vision"
              value={values.company_mis_vis}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Business Location (s):
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Location(s) of operation for your business [List your operational
              locations (city)]
            </p>
            <textarea
              type="text"
              name="operation_locations"
              placeholder="Business Location (s)"
              value={values.operation_locations}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Business Commenced Year?:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              When did your company commence operation? State Year
            </p>
            <input
              type="text"
              name="operation_commence_year"
              placeholder="Business Commenced? "
              value={values.operation_commence_year}
              onChange={handleChange}
              className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Business Website:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Where can we find your business online? (Website - If you do not
              have any, state "NONE")
            </p>
            <textarea
              type="url"
              name="online_locations"
              placeholder="Business Website "
              value={values.online_locations}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Social Links:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              Where can we find your business online? (Facebook / Instagram - If
              you do not have any, state "NONE")
            </p>
            <textarea
              type="url"
              name="social_links"
              placeholder="Social Media Handles "
              value={values.social_links}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          {/* checkboxes section */}

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Is Your Business Registered?:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <select
              value={bizregistered}
              onChange={handleOptionChange}
              className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:text-sm"
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
                  className="w-full h-[30px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:text-sm"
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
                    Registration Date?:
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
                    className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
                    required
                  />
                </label>

                {/* country of incorporation */}

                <label className=" flex flex-col gap-4 justify-start items-start p-1">
                  <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
                    Registration Date?:
                    <span className="text-red font-bold text-sm">*</span>
                  </h6>
                  <p className="text-[10px] text-gray">
                    When Was Your Company/Business Registered?
                  </p>
                  <input
                    type="text"
                    name="country_incorporation"
                    placeholder="Country of  incorporation "
                    value={values.country_incorporation}
                    onChange={handleChange}
                    className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
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
              Describe Your Products and Services Attach an online link to your
              products and services (e.g. Twitter, WHatsapp, Selar, Facebook
              etc), OR pictures of the products and services if not available
              onlin for Images, Please store in a cloud Storage and Share Link
              here
            </p>
            <textarea
              type="text"
              name="services_description"
              placeholder="Describe your Services "
              value={values.services_description}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
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
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Sales Channel:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              What Sales Channel are You Using to Reach Them?
            </p>
            <input
              type="text"
              name="sales_channel"
              placeholder="Sales  Channel "
              value={values.sales_channel}
              onChange={handleChange}
              className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
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
              className="w-full h-[40px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            />
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Who are Your Main Competitors?:
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
              placeholder="Number of Customers "
              value={values.main_competitors_description}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          <label className=" flex flex-col gap-4 justify-start items-start p-1 ">
            <h6 className="text-gray font-semibold text-[12px] flex justify-center items-center">
              Selling Proposition:
              <span className="text-red font-bold text-sm">*</span>
            </h6>
            <p className="text-[10px] text-gray">
              What is your unique selling proposition (USP)? What’s new about
              what you’re doing? [Describe what features or benefits
              differentiate you from the competitors and existing solutions?]
            </p>
            <textarea
              type="text"
              name="unique_usp_description"
              placeholder="Number of Customers "
              value={values.unique_usp_description}
              onChange={handleChange}
              className="w-full h-[60px] p-1 px-2 text-sm  text-gray  border-b border-b-gray border-l border-l-red focus:outline-none  md:w-[200px]  md:h-[40px] md:text-sm"
              required
            ></textarea>
          </label>

          
        </form>
      </div>
    </div>
  );
};

export default PitchesForm;
