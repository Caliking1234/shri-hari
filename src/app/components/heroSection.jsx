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
    <div className="w-full min-h-screen md:h-[calc(100vh-100px)] flex flex-col md:flex-row items-center justify-center ">
      <div className=" texty w-full h-full px-8 text-5xl capatalize tracking-tight leading-none text-neutral-600 flex flex-col items-center md:items-start justify-center box-border">
        <h1>Welcome to,</h1>
        <div className=" w-full flex flex-row items-center justify-center md:justify-start">
          <div className=" animi w-[200px] overflow-hidden hidden md:block">
            <Lottie
              animationData={ContacUsGif}
              width={"300px"}
              height={"300px"}
            />
          </div>
          <h1 className=" text-[#233976] texty font-bold text-8xl md:text-9xl">
            ShriHari
          </h1>
        </div>
        <h1 className=" texty"> Eye Care Center</h1>
      </div>
      <div className=" texty w-full h-full flex flex-col items-center justify-around">
        <Image
          src="/images/vivek_dr.png"
          height={500}
          width={500}
          alt="abc"
          className=" drop-shadow-md w-[280px] md:w-[500px] h-[280px] md:h-[500px]"
        />
        <div className=" capitalize w-full">
          <h1 className=" text-neutral-600 text-5xl text-center">
            where clarity meets compassion.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
