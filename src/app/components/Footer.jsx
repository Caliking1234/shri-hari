"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DropDownMenu } from "../data/data";
import GGLogo from "/public/images/shriharilogo.png";
import FooterLinks from "./FooterLinks";
import { useRouter, usePathname } from "next/navigation";

function Footer() {
  const router = usePathname();
  const rout = router.split("/");
  const rout1 = rout[1];
  const rout2 = rout[2];
  return (
    <>
      <div className="bg-gray-100 h-1/2 w-full flex flex-col justify-around items-center py-4 px-5 md:px-8 uppercase border-t-[2px] border-gray-700 border-solid">
        <div className="flex flex-row items-center justify-center">
          <Image width={200} src={GGLogo} className="aspect-auto" />
          {/* <div className="flex flex-col">
            <h1 className=" text-base sm:text-lg font-bold text-[#f59522]">
              GULF GLOBAL
            </h1>
            <p className=" text-xs font-bold text-[#7d2793]">
              Technologies & General Trading L.L.C
            </p>
          </div> */}
        </div>
        <div className=" py-5 md:p-5 grid grid-cols-2 md:grid-cols-4 w-full gap-5">
          {/* {DropDownMenu.map((items, index) => {
            return (
              <div key={index} className=" md:mx-auto w-full md:w-[70%]">
                <FooterLinks title={items.title} list1={items.Link} />
              </div>
            );
          })} */}
          <div className=" md:mx-auto w-full md:w-[70%]">
            <p className="text-gray-600 font-semibold text-lg pb-4">Services</p>
            <div
              className={
                router === "/services"
                  ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                  : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
              }
            >
              <Link href="/services">Our Services</Link>
            </div>
          </div>
          <div className=" md:mx-auto w-full md:w-[70%]">
            <p className="text-gray-600 font-semibold text-lg pb-4">Contact</p>
            <div
              className={
                router === "/contact"
                  ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                  : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
              }
            >
              <Link href="/contact">Book An Appointment</Link>
            </div>
          </div>
          <div className=" md:mx-auto w-full md:w-[70%]">
            <p className="text-gray-600 font-semibold text-lg pb-4">About</p>
            <div
              className={
                router === "/about"
                  ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                  : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
              }
            >
              <Link href="/about">About Us</Link>
            </div>
          </div>
          {/* <div className=" md:mx-auto w-full md:w-[70%]">
            <p className="text-gray-600 font-semibold text-lg pb-4">Contact</p>
            <div
              className={
                router === "/contact"
                  ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                  : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
              }
            >
              <Link href="/contact">Contact-Us</Link>
            </div>
          </div> */}
          <div className=" md:mx-auto w-full md:w-[70%]">
            <p className="text-gray-600 font-semibold text-lg pb-4">
              Follow Us
            </p>
            <div className=" flex flex-row gap-5">
              <div
                className={
                  router === "/contact"
                    ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                    : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
                }
              >
                <Link
                  href={
                    "https://www.linkedin.com/company/gulf-global-technologies-and-general-trading-llc/"
                  }
                  className="flex flex-row gap-3 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="h-6 w-6 fill-black-600  mt-[-3px]"
                  >
                    <path
                      fill="#212121"
                      fill-rule="evenodd"
                      d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                    ></path>
                    <polygon
                      fill="#fff"
                      points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                    ></polygon>
                    <polygon
                      fill="#fff"
                      points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                    ></polygon>
                  </svg>
                </Link>
              </div>
              <div
                className={
                  router === "/contact"
                    ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                    : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
                }
              >
                <Link
                  href={
                    "https://www.linkedin.com/company/gulf-global-technologies-and-general-trading-llc/"
                  }
                  className="flex flex-row gap-3 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // x="0px"
                    // y="0px"
                    // width="100"
                    // height="100"
                    viewBox="0 0 48 48"
                    className="h-7 w-7 fill-red-600  mt-[-5px]"
                  >
                    <path
                      //   fill="#FF3D00"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    ></path>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                  </svg>
                </Link>
              </div>
              <div
                className={
                  router === "/contact"
                    ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                    : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
                }
              >
                <Link
                  href={"https://www.instagram.com/gulf_global_technologies/"}
                  className="flex flex-row gap-3 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-5 w-5 fill-pink-600"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
                  </svg>
                </Link>
              </div>
              <div
                className={
                  router === "/contact"
                    ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                    : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
                }
              >
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61550709927804&mibextid=LQQJ4d"
                  }
                  className="flex flex-row gap-3 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    className="h-7 w-7 fill-blue-600 mt-[-5px]"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#3F51B5"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center text-center  py-3 bg-gray-100 tracking-widest">
        <h1 className=" text-gray-700 text-xs mr-[2px]">©2024-2025</h1>
        <h1 className=" text-gray-700 text-xs">
          All rights reserved{" "}
          <span className=" text-[#253773] font-bold uppercase">
            Shri hari eye care centre
          </span>{" "}
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center text-center  py-3 bg-gray-100 border-t-[1px] border-gray-700">
        <Link
          href="/privacy&policy"
          className=" cursor-pointer text-xs text-[#F4BA0E] hover:text-[#253773] transition-all duration-200 ease-in"
        >
          Privacy & Policy
        </Link>
        <div className=" h-[20px] w-[1px] mx-[12px] bg-gray-700"></div>
        <Link
          href="/term&condition"
          className=" cursor-pointer text-xs text-[#F4BA0E] hover:text-[#253773] transition-all duration-200 ease-in"
        >
          Term & Condition
        </Link>
      </div>
    </>
  );
}

export default Footer;
