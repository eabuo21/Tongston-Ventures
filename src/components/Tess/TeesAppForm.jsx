import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../Notification/Notification";
import validation from "./Validate";

const Dropdown = ({ name, options, value, onChange, error }) => (
  <div>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[250px] px-2 focus:outline-none"
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red">{error}</p>}
  </div>
);

const TeesAppForm = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    primary_state: "",
    primary_country: "",
    biz_name: "",
    dropdown_1: "",
    dropdown_2: "",
    dropdown_3: "",
    dropdown_4: "",
    dropdown_5: "",
    dropdown_6: "",
    dropdown_7: "",
    dropdown_8: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const templateParams = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        primary_state: values.primary_state,
        primary_country: values.primary_country,
        biz_name: values.biz_name,
        dropdown_1: values.dropdown_1,
        dropdown_2: values.dropdown_2,
        dropdown_3: values.dropdown_3,
        dropdown_4: values.dropdown_4,
        dropdown_5: values.dropdown_5,
        dropdown_6: values.dropdown_6,
        dropdown_7: values.dropdown_7,
        dropdown_8: values.dropdown_8,
      };

      emailjs
        .send(
          "service_z3uzwhg", // Replace with your EmailJS service ID
          "template_vahdjvt", // Replace with your EmailJS template ID
          templateParams,
          "CDmJ3huYpinZb0wEA" // Replace with your EmailJS public API key
        )
        .then((response) => {
          setValues({
            first_name: "",
            last_name: "",
            email: "",
            primary_state: "",
            primary_country: "",
            biz_name: "",
            dropdown_1: "",
            dropdown_2: "",
            dropdown_3: "",
            dropdown_4: "",
            dropdown_5: "",
            dropdown_6: "",
            dropdown_7: "",
            dropdown_8: "",
          });
          setLoading(false);
          if (response.status === 200) {
            showSuccessNotification("Subscribed successfully");
            onClose();
            navigate("/success");
          } else {
            showErrorNotification("Failed, try again");
            setLoading(false);
          }
        })
        .catch((error) => {
          showErrorNotification("Failed, try again");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const dropdownOptions1 = [
    { value: "Blog", label: "Blog " },
    { value: "Linkedin Post", label: "Linkedin Post " },
    { value: "Linkedin Group", label: "Linkedin Group " },
    {
      value: "Facebook Group / Facebook Post",
      label: "Facebook Group / Facebook Post ",
    },
    { value: "Whatsapp Group", label: "Whatsapp Group " },
    {
      value: "From a Tongston Team Member",
      label: "From a Tongston Team Member ",
    },
    {
      value: "University Mailing Platform / Group / List / Event",
      label: "BlUniversity Mailing Platform / Group / List / Eventog ",
    },
    { value: "NYSC CDS Group", label: "NYSC CDS Group " },
    { value: "Google", label: "Google " },
    {
      value: "Tongston Mailing List / Email Newsletter",
      label: "Tongston Mailing List / Email Newsletter ",
    },
    {
      value: "TEES Zoom Registration / TEES Webpage",
      label: "TEES Zoom Registration / TEES Webpage ",
    },
    { value: "Tongston Partner / Vendor", label: "Tongston Partner / Vendor " },
    { value: "Other", label: "Other " },
  ];

  const dropdownOptions2 = [
    { value: "Founder", label: "Founder " },
    { value: "Co-Founder", label: "Co-Founder " },
    { value: "CEO", label: "CEO " },
    { value: "COO", label: "COO " },
    { value: "CFO", label: "CFO " },
    { value: "CMO", label: "CMO " },
    { value: "Other", label: "Other " },
  ];

  const dropdownOptions3 = [
    { value: "Education", label: "Education " },
    { value: "Financial Services", label: "Financial Services " },
    { value: "Health & Life Sciences", label: "Health & Life Sciences " },
    { value: "Agriculture", label: "Agriculture " },
    {
      value: "Sales & Business Development",
      label: "Sales & Business Development ",
    },
    { value: "Data & Research", label: "Data & Research " },
    { value: "Technology", label: "Technology " },
    { value: "Legal & Governance", label: "Legal & Governance " },
    { value: "Trade & Industry", label: "Trade & Industry " },
    { value: "Telecoms & Media", label: "Telecoms & Media " },
    { value: "Logistics & Storage", label: "Logistics & Storage " },
    { value: "Accounting & Finance", label: "Accounting & Finance " },
    { value: "Other", label: "Other " },
  ];

  const dropdownOptions4 = [
    { value: "Idea Stage", label: "Idea Stage " },
    { value: "Start-Up", label: "Start-Up " },
    { value: "Early-Stage", label: "Early-Stage " },
    { value: "Mid-Stage / Growth-Stage", label: "Mid-Stage / Growth-Stage " },
    { value: "Mature", label: "Mature " },
  ];

  const dropdownOptions5 = [
    { value: "0", label: "0 " },
    { value: "Less than 5,000", label: "Less than 5,000 " },
    { value: "5001 - 10,000", label: "5001 - 10,000 " },
    { value: "10,000 - 50,000", label: "10,000 - 50,000 " },
    { value: "50,000 - 100,000", label: "50,000 - 100,000 " },
    { value: "100,000 - 500,000", label: "100,000 - 500,000 " },
    { value: "500,000 - 1,000000", label: "500,000 - 1,000000 " },
    { value: "1,000000 - 5,000000", label: "1,000000 - 5,000000 " },
    { value: "5,000000+", label: "5,000000+ " },
  ];

  const dropdownOptions6 = [
    { value: "US$", label: "US$ " },
    { value: "EUR", label: "EUR " },
    { value: "CFA Framc", label: "CFA Framc " },
    { value: "Kenyan Shilling", label: "Kenyan Shilling " },
    { value: "Ghana Cedis", label: "Ghana Cedis " },
    { value: "Rand", label: "Rand " },
    { value: "Egyptian Pound (EGP)", label: "Egyptian Pound (EGP) " },
    { value: "Moroccan Dirham", label: "Moroccan Dirham " },
    { value: "Zambian Kwacha", label: "Zambian Kwacha " },
    { value: "Botswana Pula", label: "Botswana Pula " },
    {
      value: "Seychellois / Muritian Rupee",
      label: "Seychellois / Muritian Rupee ",
    },
    { value: "Namibian Dollar", label: "Namibian Dollar " },
    { value: "Nigerian Naira", label: "Nigerian Naira " },
    { value: "Cape Verdean Escudo", label: "Cape Verdean Escudo " },
    { value: "Ethiopian Birr", label: "Ethiopian Birr " },
    { value: "Djiboutian Franc", label: "Djiboutian Franc " },
    { value: "Rwandan Franc", label: "Rwandan Franc " },
    { value: "Tanzanian Shilling", label: "Tanzanian Shilling " },
    { value: "Angolan Kwanza", label: "Angolan Kwanza " },
    { value: "Malawian Kwacha", label: "Malawian Kwacha " },
    { value: "Other", label: "Other " },
  ];

  const dropdownOptions7 = [
    { value: "SDG1 -No Poverty  ", label: "SDG1 -No Poverty   " },
    { value: "SDG2 - Zero Hunger", label: "SDG2 - Zero Hunger" },
    {
      value: "SDG3 - Good Health and Well-being   ",
      label: "SDG3 - Good Health and Well-being    ",
    },
    {
      value: "SDG4 - Quality Education   ",
      label: "SDG4 - Quality Education    ",
    },
    { value: "SDG5 - Gender Equality   ", label: "SDG5 - Gender Equality    " },
    {
      value: "SDG6 - Clean Water and Sanitation   ",
      label: "SDG6 - Clean Water and Sanitation    ",
    },
    {
      value: "SDG7 - Affordable and Clean Energy   ",
      label: "SDG7 - Affordable and Clean Energy    ",
    },
    {
      value: "SDG8 - Decent Work and Economic Growth   ",
      label: "SDG8 - Decent Work and Economic Growth    ",
    },
    {
      value: "SDG9 - Industry Innovation and Infrastructure   ",
      label: "SDG9 - Industry Innovation and Infrastructure    ",
    },
    {
      value: "SDG10 - Reduced Inequalities   ",
      label: "SDG10 - Reduced Inequalities    ",
    },
    {
      value: "SDG11 - Sustainable Cities and Communities   ",
      label: "SDG11 - Sustainable Cities and Communities   ",
    },
    {
      value: "SDG12 - Responsible Consumption and Production   ",
      label: "SDG12 - Responsible Consumption and Production   ",
    },
    { value: "SDG13 - Climate Action   ", label: "SDG13 - Climate Action    " },
    {
      value: "SDG14 - Life Below water   ",
      label: "SDG14 - Life Below water    ",
    },
    { value: "SDG15 - Life on Land   ", label: "SDG15 - Life on Land    " },
    {
      value: "SDG16 - Peace Justice and Strong institutions   ",
      label: "SDG16 - Peace Justice and Strong institutions    ",
    },
    {
      value: "SDG17 - Partnerships for the Goal   ",
      label: "SDG17 - Partnerships for the Goal    ",
    },

    { value: "None of the above   ", label: "None of the above    " },
  ];

  const dropdownOptions8 = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
  ];

  // Define more dropdown options as needed...

  return (
    <div className="flex flex-col inset-0 bg-black z-50 w-full h-full justify-center items-center fixed">
      <div className="bg-white w-[300px] h-[300px] inset-0 z-50 flex flex-col gap-4 justify-start items-center md:w-[800px] md:h-[450px] p-4 overflow-y-auto">
        <button onClick={onClose} className="text-dark text-xl mx-auto mr-5">
          Close
        </button>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 justify-start items-center w-full md:gap-7 md:justify-center md:items-center  md:px-4 md:grid md:grid-cols-2 "
        >
          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">First Name</p>
            <input
              type="text"
              name="first_name"
              value={values.first_name}
              onChange={handleInput}
              placeholder="First Name"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[250px] px-2 focus:outline-none"
            />
          </label>

          {errors.first_name && <p className="text-red">{errors.first_name}</p>}
          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">Last Name</p>
            <input
              type="text"
              name="last_name"
              value={values.last_name}
              onChange={handleInput}
              placeholder="Last Name"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[250px] px-2 focus:outline-none"
            />
          </label>

          {errors.last_name && <p className="text-red">{errors.last_name}</p>}
          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">Email Address</p>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleInput}
              placeholder="Email Address"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[250px] px-2 focus:outline-none"
            />
          </label>

          {errors.email && <p className="text-red">{errors.email}</p>}
          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">How Did You Hear About Us?</p>
            <Dropdown
              name="dropdown_1"
              options={dropdownOptions1}
              value={values.dropdown_1}
              onChange={handleInput}
              error={errors.dropdown_1}
              required
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              What is the name of the Business?
            </p>
            <input
              type="text"
              name="biz_name"
              value={values.biz_name}
              onChange={handleInput}
              placeholder="Name of Business"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[250px] px-2 focus:outline-none"
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              What is Your Current role in The Business?
            </p>
            <Dropdown
              name="dropdown_2"
              options={dropdownOptions2}
              value={values.dropdown_2}
              onChange={handleInput}
              error={errors.dropdown_2}
              required
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              Please select the sector that most most closely aligns with your
              business
            </p>
            <Dropdown
              name="dropdown_3"
              options={dropdownOptions3}
              value={values.dropdown_3}
              onChange={handleInput}
              error={errors.dropdown_3}
              required
            />
          </label>
          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              Where is the primary state of operation for The Business?
            </p>
            <input
              type="text"
              name="primary_state"
              value={values.primary_state}
              onChange={handleInput}
              placeholder="Primary State of Operation"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[250px] px-2 focus:outline-none"
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              Where is the primary Country of operation for The Business?
            </p>
            <input
              type="text"
              name="primary_country"
              value={values.primary_country}
              onChange={handleInput}
              placeholder="Primary Country of Operation"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[250px] px-2 focus:outline-none"
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              What stage would you consider the business?
            </p>
            <Dropdown
              name="dropdown_4"
              options={dropdownOptions4}
              value={values.dropdown_4}
              onChange={handleInput}
              error={errors.dropdown_4}
              required
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              What Revenues/Sales did you achieve in the business in 2023 as at
              (3oth December 2023)?
            </p>
            <Dropdown
              name="dropdown_5"
              options={dropdownOptions5}
              value={values.dropdown_5}
              onChange={handleInput}
              error={errors.dropdown_5}
              required
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              Please select the currency of your business operations what
              represents the sales/revenue range you selected above{" "}
            </p>
            <Dropdown
              name="dropdown_6"
              options={dropdownOptions6}
              value={values.dropdown_6}
              onChange={handleInput}
              error={errors.dropdown_6}
              required
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2">
            <p className="text-dark text-sm    ">
              Please select the united Nations Sustainable Development Goals (UN
              SDGs) that your business is addressing{" "}
            </p>
            <Dropdown
              name="dropdown_7"
              options={dropdownOptions7}
              value={values.dropdown_7}
              onChange={handleInput}
              error={errors.dropdown_7}
              required
            />
          </label>

          {/* Add more Dropdown components with different options as needed */}

          <button
            className="hover-effect bg-red text-white h-[40px] w-[250px] md:w-[250px] px-2"
            type="submit"
            disabled={loading}
          >
            <p className="image-wrapper">
              {loading ? "Please Wait..." : "Submit"}
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeesAppForm;
