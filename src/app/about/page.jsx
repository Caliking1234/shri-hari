"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import Slider1 from "../components/aboutuspg/Slider1"
import Ouraim from "../components/aboutuspg/Ouraim"
import Whyus from "../components/aboutuspg/Whyus"

const Page = () => {


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
    <div>
      <div className="relative w-full pt-5 md:pt-0 h-[30vh] bg-[url('/images/img4.jpg')] bg-cover bg-center bg-no-repeat flex flex-row items-center justify-center gap-3  ">
        <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#233976] via-[#233976b0] from-50%  to-transparent z-10"></div>
        <div className=" z-[20] texty w-1/2 h-full px-8 text-xl md:text-5xl capatalize tracking-tight leading-none text-white flex flex-col items-start justify-center gap-3 box-border">
          <div className=" w-full flex flex-row items-center justify-start">
            <h1 className=" text-[#F4BA0E] texty font-bold text-7xl">
            About Us
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
      <Slider1/>
      <Ouraim/>
      {/* <Whyus/> */}
      

    

      
    </div>
  )
}

export default Page