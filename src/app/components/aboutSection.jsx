"use client";
import Image from "next/image";
import img from "/public/images/cover-img.jpg";
import img2 from "/public/images/whyshriharisection.jpg";
import Lottie from "lottie-react";
import docani from "/public/doc-ani.json";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <div className="px-5 py-10 text-3xl md:text-5xl text-neutral-600 flex flex-col items-center justify-center gap-5 text-center">
        <h1>
          Why <span className=" text-[#233976] font-bold">ShriHari</span> Eye
          Care Center Is A Better Choice
        </h1>
      </div>
      <div className=" w-full h-full flex flex-col md:flex-row relative py-5">
        <div className=" w-full md:w-[40%] h-[70vh] overflow-hidden">
          <Image
            objectFit="cover"
            src={img2}
            alt="abc"
            className="w-[90%] mx-auto lg:w-[95%] h-[40vh] lg:h-[70vh] "
          />
        </div>

        <div className=" w-full md:w-[60%] h-full my-auto grid grid-cols-2 px-2 py-8 md:px-10 md:py-16 gap-y-5 bg-[url('/images/banner2.jpg')] bg-cover relative">
          <div className=" w-full h-full bg-gradient-to-b from-gray-100 via-gray-100/75 to-gray-100 absolute top-0 left-0 z-10"></div>
          <div className=" w-[90%] md:w-[70%] mx-auto h-full z-20">
            <h1 className=" text-lg md:text-xl text-[#233976]">
              TEAM OF OVER 19 HIGHLY EXPERIENCED DOCTORS
            </h1>
            <p className=" text-sm text-neutral-500">
              When you visit any of our hospitals, you have the collective
              experience of over 100+ doctors backing your treatments
            </p>
          </div>
          <div className=" w-[90%] md:w-[70%] mx-auto h-full z-20">
            <h1 className=" text-lg md:text-xl text-[#233976] uppercase">
              Advanced Technology and Equipment
            </h1>
            <p className=" w-full text-sm text-neutral-500">
              Regularly updates and maintains equipment to ensure it meets the
              latest standards and can provide the best possible outcomes.
            </p>
          </div>
          <div className=" w-[90%] md:w-[70%] mx-auto h-full z-20">
            <h1 className=" text-lg md:text-xl text-[#233976] uppercase">
              comprehensive range of services
            </h1>
            <p className=" text-sm text-neutral-500">
              At ShriHari Eye Care & Laser Centre we provide a vast range of eye
              treatments and surgical procedures
            </p>
          </div>
          <div className=" w-[90%] md:w-[70%] mx-auto h-full z-20">
            <h1 className=" text-lg md:text-xl text-[#233976] uppercase">
              Patient Centric Approach
            </h1>
            <p className=" text-sm text-neutral-500">
              Enhance the patient experience by focusing on customer service.
              Train staff to be empathetic, responsive, and efficient in
              handling patient inquiries and concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
