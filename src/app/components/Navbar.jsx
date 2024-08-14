"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import DropDown from "./DropDown";
import { useRouter, usePathname } from "next/navigation";
import GGLogo from "/public/images/shriharilogo.png";
import Image from "next/image";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [open, setopen] = useState(true);
  const router = usePathname();

  const HandleMenu = () => {
    setMenu(!menu);
  };

  const setnavFalse = () => {
    console.warn("nav-change");
    return setMenu(false);
  };

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center h-[100px] w-full px-2 sm:px-10 border-b-[2px] border-gray-700 border-solid z-50">
      <div className=" w-full flex flex-row items-center justify-between py-10">
        <Link href={"/"} className="flex flex-row items-center justify-center">
          <Image
            height={100}
            src={GGLogo}
            className="h-[100px] aspect-auto py-1"
            alt="p"
          />
          {/* <div className="flex flex-col">
            <h1 className=" text-lg sm:text-xl font-bold text-[#223A79]">
              Shri
            </h1>
            <p className=" text-xs sm:text-sm font-bold text-[#7d2793]">
              Technologies & General Trading L.L.C
            </p>
          </div> */}
        </Link>
        <div className="hidden md:flex gap-5 text-lg">
          <div className="relative group">
            <Link
              href="/"
              className={
                router == "/"
                  ? " text-sm cursor-pointer tracking-wider text-[#F4BA0E] p-1"
                  : " text-sm cursor-pointer tracking-wider text-[#223A79] group-hover:text-[#F4BA0E] transition-all duration-200 ease-in  p-1"
              }
            >
              HOME
            </Link>
            {router !== "/" ? (
              <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-full h-[2px]"></div>
            ) : (
              <></>
            )}
          </div>
          <div>{/* <DropDown flexy={0} setnavFalse={setnavFalse} /> */}</div>
          <div className="relative group">
            <Link
              href="/services"
              className={
                router == "/services"
                  ? " text-sm cursor-pointer tracking-wider  text-[#F4BA0E] p-1"
                  : " text-sm cursor-pointer tracking-wider text-[#223A79] group-hover:text-[#F4BA0E] transition-all duration-200 ease-in  p-1"
              }
            >
              SERVICES
            </Link>
            {router !== "/services" ? (
              <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-full h-[2px]"></div>
            ) : (
              <></>
            )}
          </div>
          {/* <div className="relative group uppercase">
            <Link
              href="/generaltrading"
              className={
                router == "/generaltrading"
                  ? " text-sm cursor-pointer tracking-wider text-[#F4BA0E] p-1"
                  : " text-sm cursor-pointer tracking-wider text-[#223A79] group-hover:text-[#F4BA0E] transition-all duration-200 ease-in  p-1"
              }
            >
              General Trading
            </Link>
            {router !== "/generaltrading" ? (
              <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-full h-[2px]"></div>
            ) : (
              <></>
            )} 
          </div>*/}
          <div className="relative group">
            <Link
              href="/contact"
              className={
                router == "/contact"
                  ? " text-sm cursor-pointer tracking-wider text-[#F4BA0E] p-1"
                  : " text-sm cursor-pointer tracking-wider text-[#223A79] group-hover:text-[#F4BA0E] transition-all duration-200 ease-in  p-1"
              }
            >
              CONTACT US
            </Link>
            {router !== "/contact" ? (
              <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-full h-[2px]"></div>
            ) : (
              <></>
            )}
          </div>
          <div className="relative group">
            <Link
              href="/about"
              className={
                router == "/about"
                  ? " text-sm cursor-pointer tracking-wider text-[#F4BA0E] p-1"
                  : " text-sm cursor-pointer tracking-wider text-[#223A79] group-hover:text-[#F4BA0E] transition-all duration-200 ease-in  p-1"
              }
            >
              ABOUT US
            </Link>
            {router !== "/about" ? (
              <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-full h-[2px]"></div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div
          onClick={HandleMenu}
          className=" block md:hidden text-white text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div
          className={
            menu
              ? " z-40 py-3 bg-white text-black w-screen min-h-[100dvh] absolute top-0 left-0 ease-in duration-500  md:hidden text-center font-bold"
              : " z-40 bg-white text-black w-screen min-h-[100dvh] top-0 left-[-150%] absolute ease-in duration-500  text-center font-bold"
          }
        >
          <div
            onClick={HandleMenu}
            className="w-full flex py-8 px-5 justify-between items-center text-3xl font-medium"
          >
            <div className="flex flex-row items-center justify-center text-left">
              <Image
                height={100}
                src={GGLogo}
                className="h-[100px] aspect-auto py-1"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 fill-white text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-5 w-full h-full text-black  px-10 py-16 text-xl">
            <div className="relative group">
              <Link
                onClick={setnavFalse}
                href="/"
                className={
                  router == "/"
                    ? " text-sm cursor-pointer tracking-wider text-[#223A79] p-1"
                    : " text-sm cursor-pointer tracking-wider text-gray-700 group-hover:text-[#223A79] transition-all duration-200 ease-in  p-1"
                }
              >
                HOME
              </Link>
              {router !== "/" ? (
                <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-[60%] mx-auto h-[2px]"></div>
              ) : (
                <></>
              )}
            </div>
            {/* <div className={router === "/services/*" ? "font-semibold" : ""}>
              <div className="w-full min-h-fit transition-height duration-200 ease-in">
                <div
                  onClick={() => {
                    setopen(!open);
                  }}
                  className="relative"
                >
                  <h1>SERVICES</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={
                      open
                        ? " absolute top-0 right-1 w-6 h-6 transition-all duration-200 ease-in"
                        : " absolute top-0 right-1 w-6 h-6 rotate-180 transition-all duration-200 ease-in"
                    }
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className={
                      open
                        ? ` flex flex-col gap-y-3 py-3 bg-gray-200 items-center justify-center w-full h-fit overflow-hidden transition-all duration-200 ease-in`
                        : ` flex flex-col gap-y-3 py-0 bg-gray-200 items-center justify-center w-full h-0   overflow-hidden transition-all duration-200 ease-in`
                    }
                  >
                    <Link onClick={HandleMenu} href="/services/theory&concepts">
                      Theory & Concepts
                    </Link>
                    <Link
                      onClick={HandleMenu}
                      href="/services/practice&mocktest"
                    >
                      Practice & Mocktest
                    </Link>
                    <Link onClick={HandleMenu} href="/services/doubtsupport">
                      Doubt Support
                    </Link>
                    <Link
                      onClick={HandleMenu}
                      href="/services/mentorship&guidance"
                    >
                      Mentorship & Guidance
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <DropDown flexy={1} setnavFalse={setnavFalse} /> */}
            {/* <div className="relative group">
              <Link
              onClick={setnavFalse}
                href="/clients"
                className={
                  router == "/clients"
                    ? " text-sm cursor-pointer tracking-wider text-[#223A79] p-1"
                    : " text-sm cursor-pointer tracking-wider text-gray-700 group-hover:text-[#223A79] transition-all duration-200 ease-in  p-1"
                }
              >
                CLIENTS
              </Link>
              {router !== "/clients" ? (
                <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-[60%] mx-auto h-[2px]"></div>
              ) : (
                <></>
              )}
            </div> */}
            <div className="relative uppercase group">
              <Link
                href="/services"
                className={
                  router == "/services"
                    ? " text-sm cursor-pointer tracking-wider text-[#223A79] p-1"
                    : " text-sm cursor-pointer tracking-wider text-gray-700 group-hover:text-[#223A79] transition-all duration-200 ease-in  p-1"
                }
              >
                SERVICES
              </Link>
              {router !== "/services" ? (
                <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-full h-[2px]"></div>
              ) : (
                <></>
              )}
            </div>
            <div className="relative group">
              <Link
                onClick={setnavFalse}
                href="/contact"
                className={
                  router == "/contact"
                    ? " text-sm cursor-pointer tracking-wider text-[#223A79] p-1"
                    : " text-sm cursor-pointer tracking-wider text-gray-700 group-hover:text-[#223A79] transition-all duration-200 ease-in  p-1"
                }
              >
                CONTACT US
              </Link>
              {router !== "/contact" ? (
                <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-[60%] mx-auto h-[2px]"></div>
              ) : (
                <></>
              )}
            </div>
            <div className="relative group">
              <Link
                onClick={setnavFalse}
                href="/about"
                className={
                  router == "/about"
                    ? " text-sm cursor-pointer tracking-wider text-[#223A79] p-1"
                    : " text-sm cursor-pointer tracking-wider text-gray-700 group-hover:text-[#223A79] transition-all duration-200 ease-in  p-1"
                }
              >
                ABOUT US
              </Link>
              {router !== "/about" ? (
                <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-[60%] mx-auto h-[2px]"></div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
