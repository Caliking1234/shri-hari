"use client";
import React, { useEffect, useRef } from "react";
import CardCompnonent from "./cardCompnonent";
import Image from "next/image";
import GGLogo from "/public/images/shriharilogo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const component = useRef(null);
  const data = [
    { name: "Cataract", imgSrc: "/images/cataract.jpeg" },
    { name: "Cornea", imgSrc: "/images/cornea.jpeg" },
    { name: "Retina", imgSrc: "/images/retina.jpg" },
    { name: "Glaucoma", imgSrc: "/images/glaucoma.jpeg" },
    { name: "Refractive", imgSrc: "/images/ref.jpeg" },
    { name: "Squint and oculoplasty", imgSrc: "/images/octo.jpeg" },
    { name: "Pediatrics ophthalmology", imgSrc: "/images/baccha.jpeg" },
    { name: "Contact len services", imgSrc: "/images/banner.jpg" },
    { name: "Comprehensive eye care", imgSrc: "/images/img5.jpg" },
  ];

  return (
    <div ref={component} className=" w-full ">
      <div className="px-5 py-10 text-3xl md:text-5xl text-neutral-600 flex flex-col items-center justify-center gap-5 text-center">
        <h1>
          {" "}
          Welcome to <span className=" text-[#233976] font-bold">
            ShriHari
          </span>{" "}
          Eye Care Center
        </h1>
        <p className=" text-2xl text-[#233976]">
          Your Perfection Vision Is Our Dream
        </p>
      </div>
      <div className=" w-full min-h-screen flex flex-col px-6 md:px-10 py-10 bg-white relative">
        <h1 className=" w-full text-left text-3xl sm:text-5xl text-[#233976] font-bold tracking-wider overflow-hidden py-10 z-10">
          Our Services
        </h1>
        <div className=" w-full h-full hidden sm:block absolute top-0 left-0">
          <Image src="/images/services-section.jpg" fill alt="abc" />
        </div>
        <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-b from-gray-100 via-transparent to-gray-100"></div>
        <div className=" w-full mx-auto h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 relative">
          {data.map((service, index) => (
            <React.Fragment key={index}>
              <CardCompnonent
                serviceName={service.name}
                ImageLink={service.imgSrc}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
