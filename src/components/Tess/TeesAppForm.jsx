import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notification";
import { RingLoader } from "react-spinners";

function MyForm({ onClose }) {
  //function to disable scroll on modal toggle
  useEffect(() => {}, []);

  const navigate = useNavigate();
  const [checked, setChecked] = useState({
    chk1: false,
    chk2: false,
    chk3: false,
    chk4: false,
    chk5: false,
    chk6: false,
    chk7: false,
    chk8: false,
    chk9: false,
  });

  const checkChange = (event) => {
    const { id, checked } = event.target;
    setChecked((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  //declaration  for the important values
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption7, setSelectedOption7] = useState("");
  const [selectedOption8, setSelectedOption8] = useState("");

  //set the  loading state and loading message
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  //declaration for the none important values
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    primary_state: "",
    business_name: "",
    dropdown_1: "",
    dropdown_6: "",
    primary_currency: "",
  });

  //loading messages
  const loadingMessages = [
    "Checking Status...",
    "Please Wait...",
    "Almost Done...",
    "Just a Few Seconds..",
    "Finishing Up...",
  ];

  //for the none important values
  const valuesChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const importantOptions = {
    option2: ["Founder", "Co-Founder"],
    option3: [
      "Education",
      "Financial-Services",
      "Health-&-Life-Sciences",
      "Agriculture",
      "Sales-&-Business-Development",
      "Data-&-Research",
      "Technology",
      "Legal-&-Governance",
      "Trade-&-Industry",
      "Telecoms-&-Media",
      "Logistics-&-Storage",
      "Accounting-&-Finance",
    ],
    option4: [
      "Algeria",
      "Angola",
      "Benin",
      "Botswana",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cameroon",
      "Central African Republic",
      "Chad",
      "Comoros",
      "Congo",
      "Congo, Democratic Republic of the",
      "Djibouti",
      "Egypt",
      "Equatorial Guinea",
      "Eritrea",
      "Eswatini",
      "Ethiopia",
      "Gabon",
      "Gambia",
      "Ghana",
      "Guinea",
      "Guinea-Bissau",
      "Ivory Coast",
      "Kenya",
      "Lesotho",
      "Liberia",
      "Libya",
      "Madagascar",
      "Malawi",
      "Mali",
      "Mauritania",
      "Mauritius",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Niger",
      "Nigeria",
      "Rwanda",
      "Sao Tome and Principe",
      "Senegal",
      "Seychelles",
      "Sierra Leone",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Sudan",
      "Tanzania",
      "Togo",
      "Tunisia",
      "Uganda",
      "Zambia",
      "Zimbabwe",
    ],

    option5: ["Early-Stage", "Mid-Stage/Growth-Stage"],
    option7: [
      "Less-than-5,000",
      "5001-10,000",
      "10,000-50,000",
      "50,000-100,000",
      "100,000-500,000",
      "500,000-1,000000",
      "1,000000-5,000000",
      "5,000000+",
    ],
    option8: [
      "SDG1-No-Poverty",
      "SDG2-Zero-Hunger",
      "SDG3-Good-Health-and-Well-being",
      "SDG4-Quality-Education",
      "SDG5-Gender-Equality",
      "SDG6-Clean-Water-and-Sanitation",
      "SDG7-Affordable-and-Clean-Energy",
      "SDG8-Decent-Work-and-Economic-Growth",
      "SDG9-Industry-Innovation-and-Infrastructure",
      "SDG10-Reduced-Inequalities",
      "SDG11-Sustainable-Cities-and-Communities",
      "SDG12-Responsible-Consumption-and-Production",
      "SDG13-Climate-Action",
      "SDG14-Life-Below-water",
      "SDG15-Life-on-Land",
      "SDG16-Peace-Justice-and-Strong-institutions",
      "SDG17-Partnerships-for-the-Goal",
    ],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    //initialize the loading messages
    setLoadingMessage(loadingMessages[0]);
    const selectedImportantOptions = [
      selectedOption2 && importantOptions.option2.includes(selectedOption2),
      selectedOption3 && importantOptions.option3.includes(selectedOption3),
      selectedOption4 && importantOptions.option4.includes(selectedOption4),
      selectedOption5 && importantOptions.option5.includes(selectedOption5),
      selectedOption7 && importantOptions.option7.includes(selectedOption7),
      selectedOption8 && importantOptions.option8.includes(selectedOption8),
    ];

    let messageIndex = 0;

    const intervalId = setInterval(() => {
      messageIndex += 1;
      if (messageIndex < loadingMessages.length) {
        setLoadingMessage(loadingMessages[messageIndex]);
      } else {
        clearInterval(intervalId);

        if (selectedImportantOptions.every((option) => option)) {
          setLoading(false);
          showSuccessNotification("You're Eligible to Apply");
          onClose();
          navigate("/applications");
        } else {
          setLoading(false);
          showErrorNotification("You're Ineligible to Apply");
          onClose();
          navigate("/:!_*$_/");
        }
      }
    }, 5000); // update the  loading message every 5 seconds
  };

  //check if the boxes have been checked by user
  const allCheckboxesChecked = Object.values(checked).every(Boolean);

  return (
    <div className="flex flex-col inset-0 bg-black bg-opacity-84 z-50 w-full h-full justify-center items-center fixed">
      <div className="bg-white w-[360px] h-[fixed] inset-0 z-50 flex flex-col gap-4 justify-start items-center md:w-[900px] md:h-[550px] p-4 overflow-y-auto">
        <h6 className="text-center text-base text-black font-bold  md:text-xl">
          TEES 2024 Entrepreneurial Pitches Eligibility Check
        </h6>
        <button onClick={onClose} className="text-dark text-xl mx-auto mr-5">
          Close
        </button>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 justify-center items-center w-full md:gap-7 md:justify-center md:items-center  md:px-8 md:grid md:grid-cols-3 "
        >
          {/* text-inputs and other option1 and option2 */}

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">First Name</p>
            <input
              type="text"
              name="first_name"
              value={values.first_name}
              onChange={valuesChange}
              placeholder="Enter your First Name"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">Last Name</p>
            <input
              type="text"
              name="last_name"
              value={values.last_name}
              onChange={valuesChange}
              placeholder="Last Name"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">Email Address</p>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={valuesChange}
              placeholder="Email Address"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">How Did You Hear About Us?</p>
            <select
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
              name="dropdown_1"
              onChange={valuesChange}
              value={values.dropdown_1}
            >
              <option value="Blog">Blog</option>
              <option value="Linkedin Post">Linkedin Post</option>
              <option value="Linkedin Group">Linkedin Group</option>
              <option value="Facebook Group / Facebook Post">
                Facebook Group / Facebook Post
              </option>
              <option value="Whatsapp Group">Whatsapp Group</option>
              <option value="From a Tongston Team Member">
                From a Tongston Team Member
              </option>
              <option value="University Mailing Platform / Group / List / Event">
                University Mailing Platform / Group / List / Event
              </option>
              <option value="NYSC CDS Group">NYSC CDS Group</option>
              <option value="Google">Google</option>
              <option value="Tongston Mailing List / Email Newsletter">
                Tongston Mailing List / Email Newsletter
              </option>
              <option value="TEES Zoom Registration / TEES Webpage">
                TEES Zoom Registration / TEES Webpage
              </option>
              <option value="Tongston Partner / Vendor">
                Tongston Partner / Vendor
              </option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              What is the name of the Business?
            </p>
            <input
              type="text"
              name="biz_name"
              value={values.biz_name}
              onChange={valuesChange}
              placeholder="Name of Business"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              What is Your Current role in The Business?
            </p>
            <select
              value={selectedOption2}
              onChange={(event) => setSelectedOption2(event.target.value)}
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-full md:w-[200px] px-2 focus:outline-none "
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              {importantOptions.option2.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              <option value="oCEO">CEO</option>
              <option value="CFO">CFO</option>
              <option value="CMO">CMO</option>
              <option value="COO">COO</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              Please select the sector that most closely aligns with your
              business
            </p>
            <select
              value={selectedOption3}
              onChange={(event) => setSelectedOption3(event.target.value)}
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select an option{" "}
              </option>
              {importantOptions.option3.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}

              <option value="Other">Other</option>
            </select>
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              Where is the primary Country of operation for The Business?
            </p>
            <select
              value={selectedOption4}
              onChange={(event) => setSelectedOption4(event.target.value)}
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select an option{" "}
              </option>
              <option value="United States">United State</option>
              <option value="United Kingdom">United Kingdom</option>
              {importantOptions.option4.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              Where is the primary state of operation for The Business?
            </p>
            <input
              type="text"
              name="dropdown_6"
              value={values.dropdown_6}
              onChange={valuesChange}
              placeholder="Primary State of Operation"
              required
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
            />
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              What stage would you consider the business?
            </p>
            <select
              value={selectedOption5}
              onChange={(event) => setSelectedOption5(event.target.value)}
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              {importantOptions.option5.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}

              <option value="Idea-Stage">Idea-Stage</option>
              <option value="Start-Up">Start-Up</option>
              <option value="Mature">Mature</option>
            </select>
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              What Revenues/Sales did you achieve in the business in 2023 as at
              (3oth December 2023)?
            </p>
            <select
              value={selectedOption7}
              onChange={(event) => setSelectedOption7(event.target.value)}
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="0">0</option>
              {importantOptions.option7.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              Please select the currency of your business operations what
              represents the sales/revenue range you selected above{" "}
            </p>
            <select
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
              name="primary_currency"
              onChange={valuesChange}
              value={values.primary_currency}
            >
              <option value="US$">US$</option>
              <option value="GBP">British Pound (GBP)</option>
              <option value="CFA Franc">CFA Franc</option>
              <option value="Kenyan Shilling">Kenyan Shilling</option>
              <option value="Ghana Cedis">Ghana Cedis</option>
              <option value="Rand">Rand</option>
              <option value="Egyptian Pound (EGP)">Egyptian Pound (EGP)</option>
              <option value="Moroccan Dirham">Moroccan Dirham</option>
              <option value="Zambian Kwacha">Zambian Kwacha</option>
              <option value="Botswana Pula">Botswana Pula</option>
              <option value="Seychellois Rupee">Seychellois Rupee</option>
              <option value="Mauritian Rupee">Mauritian Rupee</option>
              <option value="Namibian Dollar">Namibian Dollar</option>
              <option value="Nigerian Naira">Nigerian Naira</option>
              <option value="Cape Verdean Escudo">Cape Verdean Escudo</option>
              <option value="Ethiopian Birr">Ethiopian Birr</option>
              <option value="Djiboutian Franc">Djiboutian Franc</option>
              <option value="Rwandan Franc">Rwandan Franc</option>
              <option value="Tanzanian Shilling">Tanzanian Shilling</option>
              <option value="Angolan Kwanza">Angolan Kwanza</option>
              <option value="Malawian Kwacha">Malawian Kwacha</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className=" mr-auto flex flex-col gap-2 w-[300px]  md:w-[200px]">
            <p className="text-dark text-sm    ">
              Please select the united Nations Sustainable Development Goals (UN
              SDGs) that your business is addressing{" "}
            </p>
            <select
              value={selectedOption8}
              onChange={(event) => setSelectedOption8(event.target.value)}
              className="border-l-2 border-red border-b-2 border-b-dark h-[20px] w-[300px] md:w-[200px] px-2 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select an option{" "}
              </option>
              {importantOptions.option8.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}

              <option value="None of the above">None of the above</option>
            </select>
          </label>

          {/* concent declaration */}
          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk1"
              checked={checked.chk1}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I hereby declare and confirm the following statements in relation
              to my submission for the TEES 2024 Entrepreneurial Pitches
              eligibility check: 1. I affirm that I am the rightful owner of all
              intellectual property associated with my submission, and I have
              the authority to submit it for consideration.
            </p>
          </label>

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk2"
              checked={checked.chk2}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I certify that my responses do not violate any sanctions, laws, or
              legislations in my jurisdiction, the Federal Republic of Nigeria,
              or any other jurisdiction worldwide.
            </p>
          </label>

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk3"
              checked={checked.chk3}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I certify that my responses do not violate any sanctions, laws, or
              legislations in my jurisdiction, the Federal Republic of Nigeria,
              or any other jurisdiction worldwide.
            </p>
          </label>

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk4"
              checked={checked.chk4}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I understand that failure to follow the instructions strictly may
              lead to disqualification.
            </p>
          </label>

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk5"
              checked={checked.chk5}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I have the necessary authority to submit answers to this
              eligibility check on behalf of the organization herewith named in
              this submission.
            </p>
          </label>

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk6"
              checked={checked.chk6}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I confirm that the business herewith mentioned does not negatively
              impact any of the 17 sustainable development goals (SDGs).
            </p>
          </label>

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk7"
              checked={checked.chk7}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I confirm that my responses are true and correct, and I have not
              misrepresented.
            </p>
          </label>

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk8"
              checked={checked.chk8}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I confirm that I understand that I may not progress to the
              application form if I fail to pass the eligibility check, and that
              Tongston does not owe me a right of reply or appeal.
            </p>
          </label>

          <label
            htmlFor="terms"
            className="text-[12px] font-sans text-gray text-left flex flex-row gap-2 w-[300px]  md:w-[220px]"
          >
            <input
              type="checkbox"
              id="chk9"
              checked={checked.chk9}
              onChange={checkChange}
              className=" cursor-pointer"
            />
            <p>
              I confirm that I may only submit responses to the eligibility
              check once for every business.
            </p>
          </label>

          <button
            className={`hover-effect bg-red text-white h-[40px] w-full md:w-[300pxx] px-2  ${
              !allCheckboxesChecked &&
              "cursor-not-allowed bg-gray-500 hover-bg-transparent"
            }`}
            type="submit"
            disabled={!allCheckboxesChecked}
          >
            <p className="image-wrapper">Check Status</p>
          </button>
        </form>
      </div>
      {loading && (
        <div className="bg-transparent w-full  bg-opacity-0 fixed inset-0 z-50 flex flex-col gap-4 justify-center p-2 items-center md:w-full  overflow-y-auto">
          <div className=" bg-white flex flex-col gap-3 justify-center items-center w-[1000px]      h-[500px]       inset-0 z-50   rounded-md items-center  md:h-[700px] p-4 overflow-y-auto">
            <RingLoader color="red" loading={loading} size={90} />
            <p className="text-black text-center text-xl animate-pulse md:text-2xl">
              {loadingMessage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyForm;
