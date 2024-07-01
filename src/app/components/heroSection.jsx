"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import ContacUsGif from "../../../public/eyeAnimation.json";
import { gsap } from "gsap";

const HeroSection = () => {
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
    <div className="relative w-full pt-5 md:pt-0 md:h-[calc(100vh-100px)] bg-[url('/images/img4.jpg')] bg-cover bg-fixed bg-center bg-no-repeat flex flex-row items-center justify-center  ">
      <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#233976] via-[#233976b0] from-50%  to-transparent z-10"></div>
      <div className=" z-[100] texty w-full h-full px-8 text-xl md:text-5xl capatalize tracking-tight leading-none text-white flex flex-col items-start justify-center box-border">
        <h1>Welcome to,</h1>
        <div className=" w-full flex flex-row items-center justify-start">
          <div className=" animi w-[200px] overflow-hidden hidden md:block">
            <Lottie
              animationData={ContacUsGif}
              width={"300px"}
              height={"300px"}
            />
          </div>
          <h1 className=" text-[#F4BA0E] texty font-bold text-6xl md:text-9xl">
            ShriHari
          </h1>
        </div>
        <h1 className=" texty text-xl md:text-5xl"> Eye Care Center</h1>
        <h1 className=" texty w-full text-white text-xl md:text-5xl text-left capitalize">
          where clarity meets compassion.{" "}
        </h1>
      </div>
      <div className=" texty w-1/2 h-full flex flex-col items-center justify-around">
        <Image
          src="/images/img4.jpg"
          fill
          alt="abc"
          className=" drop-shadow-md w-[280px] md:w-[500px] h-[280px] md:h-[500px]"
        />
        {/* <div className=" capitalize w-full">
          <h1 className=" text-neutral-600 text-5xl text-center">
            where clarity meets compassion.{" "}
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
