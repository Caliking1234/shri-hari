"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContacUsGif from "../../../public/doc-ani.json";
// import ChatWithUS from "../components/ChatWithUS";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";
import Lottie from "lottie-react";
import { gsap } from "gsap";

const Page = () => {
  const [Name, setName] = useState("");
  const [Emails, setEmails] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [Query, setQuery] = useState("");
  const [country, setcountry] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qjf3pee",
        "template_7tqet1k",
        e.target,
        "Jha4ZIaNTb2Anm8Sg"
      )
      .then((res) => {
        setName("");
        setEmails("");
        setPhoneno("");
        setQuery("");
        setcountry("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".texty",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 1.2,
        ease: "back.out(1.7)",
      }
    );

    tl.fromTo(
      ".imga",
      { opacity: 0, y: 20 },
      { opacity1: 1, y: 0, duration: 1.2, ease: "back.out(1.7}" },
      "-=2"
    );

    tl.fromTo(
      ".animi",
      {
        width: 0,
      },
      { width: "10vw", duration: 1, ease: "back.out(1.7)" }
    );
  }, []);
  return (
    <>
      <div className="relative w-full pt-5 md:pt-0 h-[30vh] bg-[url('/images/img4.jpg')] bg-cover bg-center bg-no-repeat flex flex-row items-center justify-center gap-3  ">
        <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#233976] via-[#233976b0] from-50%  to-transparent z-10"></div>
        <div className=" z-[20] texty w-1/2 h-full px-8 text-xl md:text-5xl capatalize tracking-tight leading-none text-white flex flex-col items-start justify-center gap-3 box-border">
          <div className=" w-full flex flex-row items-center justify-start">
            <h1 className=" text-[#F4BA0E] texty font-bold text-7xl">
              Contact Us
            </h1>
          </div>
        </div>
        <div className=" texty w-1/2 h-full">
          <Image
            src="/images/img4.jpg"
            fill
            alt="abc"
            className=" drop-shadow-md w-[280px] md:w-[500px] h-[280px] md:h-[500px]"
          />
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col gap-5 justify-center items-center py-10 px-5 bg-white ">
        <div className=" w-[100%] py-5 bg-gray-200 sm:bg-white rounded-md flex flex-col sm:flex-row shadow-md shadow-black">
          <div className=" w-full sm:w-1/2 flex flex-col justify-around items-center sm:min-h-[100%]">
            <h1 className=" mt-1 text-3xl sm:text-5xl font-bold tracking-wide text-gray-400">
              Contact Us
            </h1>
            <div className=" w-full px-3">
              <div className=" w-full flex flex-col sm:gap-4 text-gray-400 my-5">
                <a className=" hover:text-gray-700" href="#">
                  <i className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <p className=" w-full sm:px-1 text-xs flex flex-col">
                      <span className=" text-xs sm:text-sm">
                        our location :-
                      </span>
                      <span>
                        SHRIHARI EYE CARE & LASER CENTRE Hall no. 10 first floor
                        shri ram plaza near tehsil chopla garh road hapur 245101
                      </span>
                      <br />
                      <span>
                        SHRIHARI EYE CARE & LASER CENTRE A-2, SWAMI NARAYAN RD,
                        beside NDPL OFFICE, Ashok Vihar Phase 3, Block A, Ashok
                        Vihar III, Ashok Vihar, Delhi, 110052
                      </span>
                    </p>
                  </i>
                </a>
                <a className=" hover:text-gray-700" href="#">
                  <i className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>

                    <p className=" sm:px-1 text-xs sm:text-sm">
                      email :- shriharieyecentre@gmail.com
                    </p>
                  </i>
                </a>
                <a className=" hover:text-gray-700" href="#">
                  <i className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>

                    <p className=" sm:px-1 text-xs sm:text-sm">
                      Call Us :- +7428383099,7428377997
                    </p>
                  </i>
                </a>
              </div>
            </div>
            {/* <Lottie
            animationData={ContacUsGif}
            style={{ width: "200px", height: "200px" }}
            /> */}
          </div>
          <div className=" w-full h-fit py-5 sm:py-10 sm:mx-5 sm:w-1/2 sm:min-h-[100%] flex flex-col items-center justify-center bg-gray-200 rounded-md">
            <form
              action=""
              className=" w-[90%] sm:min-h-[100%] flex flex-col items-center justify-center gap-2 sm:gap-4"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="email"
                required
                name="email"
                value={Emails}
                onChange={(e) => {
                  setEmails(e.target.value);
                }}
                className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="number"
                placeholder="phone number"
                required
                name="phoneno"
                value={Phoneno}
                onChange={(e) => {
                  setPhoneno(e.target.value);
                }}
                className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="country"
                name="country"
                required
                value={country}
                onChange={(e) => {
                  setcountry(e.target.value);
                }}
                className=" ring mb-[3px] ring-white text-black w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="type of query"
                name="query"
                value={Query}
                required
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className=" ring mb-[3px] ring-white w-full text-black text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                onClick={() => {
                  toast.success(
                    "We have received you Query and We will reach out soon"
                  );
                }}
                className=" w-1/2 mt-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700  hover:border-black hover:border-solid hover:border-[1px] ease-in duration-150 delay-75"
              >
                Submit
              </button>
              <Toaster richColors position="top-center" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
