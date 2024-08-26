import { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/tongstonlogo.png";
import TeesForm from "../components/Tess/TeesAppForm";

const NavList = [
  {
    name: "Direct Investing",
    route: "/investment",
  },
  // {
  //   name: "Solutions",
  //   route: "#",
  // },
  {
    name: "Business Development",
    route: "/business",
  },
];

const NavBar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  var [openform, setOpenForm] = useState(false);
  var open = () => {
    setOpenForm(true);
  };

  var close = () => {
    setOpenForm(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrollPos > 0 ? "bg-white shadow" : "";

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className="sticky top-0  w-full text-black bg-white flex justify-between py-5 items-center z-40">
      {/* <div className="relative flex items-center justify-between mx-auto w-[90%]"> */}
      <Link
        to="/"
        onClick={() => {
          setMobileNavOpen(false);
        }}
      >
        <img
          src={logo}
          className="lg:w-[20rem]   w-[10rem] h-auto object-cover"
          alt="tongston-logo"
        />
      </Link>

      <div className="lg:flex hidden items-center w-full  justify-center   ">
        <ul className="space-x-12 text-lg md:text-xl font-bold   ml-[5rem]">
          {NavList.map((option, index) => (
            <li
              key={index}
              className="float-left hover:text-red focus:text-red active:text-red  hover:bg-gray-100 hover:p-2 hover:rounded-md"
            >
              {/* {option.name === "Solutions" ? (
                <Menu as="div" className="relative inline-block text-left">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="inline-flex items-center space-x-2">
                          <span>{option.name}</span>
                          <ChevronDownIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-5 h-5`}
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-[200px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border-t-2 border-gray-300"
                        >
                          <div className="py-2 space-y-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/investment"
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-lg`}
                                >
                                  Direct Investing
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/business"
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-lg`}
                                >
                                  Business Development
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={option.route}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-lg`}
                                >
                                  Grant Management
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              ) : ( */}
              <Link
                to={option.route}
                className="block text-lg md:text-xl font-bold"
              >
                {option.name}
              </Link>
              {/* )} */}
            </li>
          ))}
        </ul>
      </div>

      <div className=" hidden lg:flex  lg:flex-row   gap-x-5  mr-[1rem]">
        <Link to="/contact">
          {" "}
          <button
            onClick={() => {
              setMobileNavOpen(false);
            }}
            className="bg-red text-white font-semibold  w-[200px] p-3 flex justify-center items-center "
          >
            Contact Us
          </button>
        </Link>
        <button
          onClick={() => open()}
          className="bg-red text-white font-semibold  w-[200px] p-3 flex justify-center items-center "
        >
          Pitch for TEES 2024
        </button>
        {openform && <TeesForm onClose={() => close()} />}
      </div>

      <button
        onClick={() => {
          setMobileNavOpen(!mobileNavOpen);
        }}
        className="p-2 lg:hidden block"
      >
        {" "}
        <FaBars size={25} />
      </button>

      <div
        className={`${
          mobileNavOpen ? "block" : "hidden"
        } lg:hidden z-50 duration-300 w-full absolute top-0 left-0 py-4 px-4 rounded-md bg-white font-bold mobile-menu`}
      >
        <div className="flex justify-between items-center text-center">
          <Link
            to="/"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <img src={logo} className="w-full h-auto" alt="tongston-logo" />
          </Link>
          <button
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            {" "}
            <FaTimes size={25} />
          </button>
        </div>
        <br />

        <ul>
          {NavList.map((option, index) => (
            <li key={index} className="my-5">
              {option.name === "Solutions" ? (
                <Menu as="div" className="relative inline-block text-left">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="inline-flex items-center space-x-2">
                          <span>{option.name}</span>
                          <ChevronDownIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-5 h-5`}
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-center relative right-0 mt-2 w-full bg-white focus:outline-none transition ease-in-out duration-5000 opacity-2"
                        >
                          <div className="py-2 space-y-1 font-medium">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/investment"
                                  onClick={() => {
                                    setMobileNavOpen(false);
                                  }}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-sm`}
                                >
                                  Direct Investing
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to={option.route}
                                  onClick={() => {
                                    setMobileNavOpen(false);
                                  }}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-sm`}
                                >
                                  Business Development{" "}
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  onClick={() => {
                                    setMobileNavOpen(false);
                                  }}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block px-4 py-2 text-sm`}
                                >
                                  Grant Management{" "}
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              ) : (
                <Link
                  to={option.route}
                  onClick={() => {
                    setMobileNavOpen(false);
                  }}
                  className="block text-sm"
                >
                  {option.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <br />

        <div className="w-[10rem] flex  flex-col gap-y-3">
          <Link to="/contact">
            <button
              onClick={() => {
                setMobileNavOpen(false);
              }}
              className="bg-red text-white font-semibold py-[20px]  w-[200px] gap-2"
            >
              Contact Us
            </button>
          </Link>

          <button
            onClick={() => {
              open();
            }}
            className="bg-red text-white font-semibold py-[20px] w-[200px] gap-2"
          >
            Pitch for TEES 2024
          </button>
          {openform && <TeesForm onClose={() => close()} />}
        </div>
        <br />
        <br />
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
