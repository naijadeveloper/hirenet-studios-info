"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Dropdown from "./header_sections/dropdown";

export default function PageHeader() {
  const [dropdownBooking, setDropdownBooking] = useState(false);
  const [country, setCountry] = useState("United Kingdom");
  const [countryDropdown, setCountryDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  let isMobileView = false;

  useEffect(() => {
    isMobileView = window.matchMedia("(max-width: 767px)").matches;
  });

  return (
    <nav
      onClick={() => {
        setCountryDropdown(false);
        setDropdownBooking(false);
      }}
      className="py-3 text-gray-700 bg-gray-800 md:px-2"
      aria-label="Menu"
    >
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex items-center justify-between px-2 md:px-0 md:justify-center max-md:w-full">
          <h1 className="flex items-center justify-center text-lg">
            <Link href="/" className="font-extrabold text-gray-100 lg:pr-2">
              HireyNet Studios
            </Link>
          </h1>

          <button
            onClick={() => setMobileMenu(() => !mobileMenu)}
            className="inline-block text-gray-400 bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-600 rounded-lg text-sm p-2 md:hidden"
            type="button"
          >
            <span className="sr-only">Open mobile menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
        </div>

        <ul
          className={`md:flex flex-col items-start justify-center divide-y-2 divide-gray-600 md:flex-row md:items-center md:divide-y-0 lg:grow-[2] lg:gap-x-8 max-lg:mt-4 max-lg:w-full max-lg:justify-evenly ${
            mobileMenu ? "max-md:flex" : "max-md:hidden"
          }`}
        >
          <li className="max-md:w-full">
            <div className="items-center w-full md:flex">
              <Link
                href="#about"
                className="flex font-medium text-base text-gray-400 hover:text-white p-2 py-4 md:text-sm md:p-0 max-md:hover:bg-gray-700"
              >
                About
              </Link>
            </div>
          </li>

          <div
            onClick={(e) => {}}
            className={`${
              !isHovering && "group"
            } flex items-center justify-start bg-gray-700 md:rounded-md md:justify-center md:px-3 md:py-2 max-md:w-full`}
          >
            <li>
              <div className="flex items-center">
                <span className="flex font-medium text-base text-gray-400 hover:text-white p-2 py-4 md:text-sm md:p-0 md:mx-2 max-md:hover:bg-gray-700 max-md:group-hover:text-white cursor-pointer">
                  Our services
                </span>
              </div>
            </li>

            <li>
              <div className="flex items-center ">
                <svg
                  className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="flex font-medium text-base text-gray-400 p-2 py-4 md:text-sm md:p-0 md:mx-2">
                  Country
                </span>

                <div
                  onMouseEnter={(e) => {
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                  }}
                >
                  <Dropdown
                    {...{
                      parentDivClassName: "relative",
                      trigger: {
                        name: `${country}`,
                        className:
                          "items-center justify-center text-xs font-semibold me-2 px-2 py-0.5 rounded bg-orange-200 text-orange-800 flex",
                      },
                      triggerFunction: () =>
                        setCountryDropdown(() => !countryDropdown),
                      dropdownDivClassName: `z-10 absolute top-4 -right-2 rounded-lg shadow w-44 bg-orange-200 text-sm text-orange-800 ${
                        countryDropdown ? "block" : "hidden"
                      }`,
                      contents: [
                        { name: "Nigeria" },
                        { name: "United Kingdom" },
                      ],
                      contentsFunctions: [
                        (e) => {
                          if (isMobileView) {
                            e?.stopPropagation();
                            setCountryDropdown(false);
                          }
                          setCountry(() => "Nigeria");
                        },
                        (e) => {
                          if (isMobileView) {
                            e?.stopPropagation();
                            setCountryDropdown(false);
                          }
                          setCountry(() => "United kingdom");
                        },
                      ],
                      contentsClassName:
                        "w-full text-left px-4 py-2 font-extrabold hover:bg-orange-300",
                    }}
                  />
                </div>
              </div>
            </li>
          </div>

          <li className="max-md:w-full">
            <div className="items-center w-full md:flex">
              <Link
                href="#customers"
                className="flex font-medium text-base text-gray-400 hover:text-white p-2 py-4 md:text-sm md:p-0 max-md:hover:bg-gray-700"
              >
                Our Customers
              </Link>
            </div>
          </li>

          <li className="max-md:w-full">
            <div className="items-center w-full md:flex">
              <Link
                href="#"
                className="flex font-medium text-base text-gray-400 hover:text-white p-2 py-4 md:text-sm md:p-0 max-md:hover:bg-gray-700"
              >
                Contacts
              </Link>
            </div>
          </li>

          <Dropdown
            {...{
              parentDivClassName:
                "block relative pt-3 md:pt-0 max-md:w-full lg:hidden",
              trigger: {
                name: "Booking",
                className:
                  "inline-flex items-center px-3 py-2 text-sm text-center rounded-md rounded-s-none bg-orange-400 hover:bg-primary text-orange-900 hover:text-orange-950 font-extrabold md:rounded-s-md",
              },
              triggerFunction: () => setDropdownBooking(() => !dropdownBooking),
              dropdownDivClassName: `z-10 absolute top-8 left-2 rounded-lg shadow w-44 bg-orange-400 text-sm text-orange-900 ${
                dropdownBooking ? "block" : "hidden"
              } md:-left-20`,
              contents: [
                { name: "Contract Packages" },
                { name: "One-off Packages" },
              ],
              contentsFunctions: [function () {}, function () {}],
              contentsClassName:
                "w-full text-left px-4 py-2 font-extrabold hover:bg-primary hover:text-orange-950",
            }}
          />
        </ul>

        <Dropdown
          {...{
            parentDivClassName: "hidden relative pt-0 lg:block",
            trigger: {
              name: "Booking",
              className:
                "inline-flex items-center px-3 py-2 text-sm text-center rounded-md bg-orange-400 hover:bg-primary text-orange-900 hover:text-orange-950 font-extrabold",
            },
            triggerFunction: () => setDropdownBooking(() => !dropdownBooking),
            dropdownDivClassName: `z-10 absolute top-8 left-2 rounded-lg shadow w-44 bg-orange-400 text-sm text-orange-900 ${
              dropdownBooking ? "block" : "hidden"
            } lg:-left-20`,
            contents: [
              { name: "Contract Packages" },
              { name: "One-off Packages" },
            ],
            contentsFunctions: [function () {}, function () {}],
            contentsClassName:
              "w-full text-left px-4 py-2 font-extrabold hover:bg-primary hover:text-orange-950",
          }}
        />
      </div>
    </nav>
  );
}
