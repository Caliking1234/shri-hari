import CardCompnonent from "./cardCompnonent";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  const data = [
    { name: "Cataract", imgSrc: "/images/cataract.jpeg", id: "Cataract" },
    { name: "Cornea", imgSrc: "/images/cornea.jpeg", id: "Cornea" },
    { name: "Retina", imgSrc: "/images/retina.jpg", id: "Retina" },
    { name: "Glaucoma", imgSrc: "/images/glaucoma.jpeg", id: "Glaucoma" },
    { name: "Refractive", imgSrc: "/images/ref.jpeg", id: "Refractive" },
    {
      name: "Squint and oculoplasty",
      imgSrc: "/images/octo.jpeg",
      id: "Squint",
    },
    {
      name: "Pediatrics ophthalmology",
      imgSrc: "/images/baccha.jpeg",
      id: "Pediatricsophthalmology",
    },
    {
      name: "Contact len services",
      imgSrc: "/images/banner.jpg",
      id: "Contactlens",
    },
    {
      name: "Comprehensive eye care",
      imgSrc: "/images/img5.jpg",
      id: "eyecare",
    },
  ];

  return (
    <div className=" w-full ">
      <div className=" w-full min-h-screen flex flex-col px-6 md:px-10 py-10 bg-white relative">
        <h1 className=" w-full text-left text-3xl sm:text-5xl text-[#233976] font-bold tracking-wider overflow-hidden py-10 z-10">
          Our Services
        </h1>
        <div className=" w-full h-full hidden sm:block absolute top-0 left-0">
          <Image src="/images/services-section.jpg" fill alt="abc" />
        </div>
        <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-b from-gray-100 via-transparent to-gray-100"></div>
        <div className=" w-full mx-auto h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 relative">
          {data.map((service, index) => (
            <Link href={`/services/#${service.id}`} key={index}>
              <CardCompnonent
                serviceName={service.name}
                ImageLink={service.imgSrc}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
