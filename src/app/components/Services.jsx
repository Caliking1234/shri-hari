import CardCompnonent from "./cardCompnonent";
import Image from "next/image";
import React from "react";

const Services = () => {
  const data = [
    { name: "Cataract", imgSrc: "/images/img6.jpg" },
    { name: "Cornea", imgSrc: "/images/img6.jpg" },
    { name: "Retina", imgSrc: "/images/img6.jpg" },
    { name: "Glaucoma", imgSrc: "/images/img6.jpg" },
    { name: "Refractive", imgSrc: "/images/img6.jpg" },
    { name: "Squint and oculoplasty", imgSrc: "/images/img6.jpg" },
    { name: "Pediatrics ophthalmology", imgSrc: "/images/img6.jpg" },
    { name: "Contact len services", imgSrc: "/images/img6.jpg" },
    { name: "Comprehensive eye care", imgSrc: "/images/img6.jpg" },
  ];
  return (
    <div className=" w-full h-full flex flex-col px-6 md:px-10 py-10 bg-white relative">
      <h1 className=" fade-heading w-full text-left text-3xl sm:text-5xl text-[#233976] font-bold tracking-wider overflow-hidden z-10">
        Our Services
      </h1>
      <div className=" w-full h-full absolute top-0 left-0">
        <Image src="/images/services-section.jpg" fill alt="abc" />
      </div>
      <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-b from-gray-100 via-transparent to-gray-100"></div>
      <div className=" w-full mx-auto h-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 relative">
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
  );
};

export default Services;
