import React from "react";
import Image from "next/image";

const Logo = "/images/dr_vivek.jpg"
const Ouraim = () => {
  return (
    <>
      {/* <h1 className=" w-full text-center text-4xl lg:text-6xl sm:text-5xl text-[#233976] font-bold tracking-wider overflow-hidden py-10 z-10">
        Our Aim
      </h1> */}

      <section
        // changeLanguage={changeLanguage}
        id="author"
        aria-labelledby="author-title"
        className="relative scroll-mt-14  pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
      >
        <h1 className="text-5xl lg:text-6xl text-[#233976] font-extrabold text-center mx-auto justify-center">
          Dr Vivek Sharma <br/>
          <span className="text-xl">Founder</span>
        </h1>

        <div className="relative mx-auto max-w-5xl pt-16  sm:px-6 ">
          <div className=" shadow-2xl pt-px sm:rounded-6xl bg-no-repeat bg-cover    bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100">
            <div className="relative shadow-2xl mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
              <Image
              width={750}
              height={750}
                className="absolute inset-0 h-full w-full object-cover"
                src={Logo}
                // src="/images/Dr4.jfif"
                alt=""
                sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
              />
            </div>
            <div className="px-4 py-10  text-justify sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
              <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                {/* Founder */}
                Founder & Director <br/> of SHRIHARI EYE CARE <br/> & LASER CENTRE
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                *15+ years’ experience{" "}
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Completed his Graduation (M.B.B.S) from Dr V.M.M.C, Solapur.
                Completed his postgraduation from A.M.C.H in 2009.
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Was awarded from Ram Labaya Memorial Gold Medal during
                post-graduation exams held in 2009.
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Best paper awardee at Assam Ophthalmological Society
                Conference in 2009.
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Completed Fellowship in Cornea & External Eye Diseases from
                prestigious L.V.P.E.I, Hyderabad.{" "}
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Completed Lamellar Corneal Surgery Course at Apollo Hospital
                Hyderabad under the guidance of Dr Rajesh Fogla .{" "}
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Worked as Cornea & refractive surgeon at I Care Eye Institute,
                Noida from 2013- 2018.{" "}
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Worked as Phaco trainer with Alcon Phaco development Programme
                for Upcoming surgeons. He has trained numerous doctors in
                phacoemulsification.{" "}
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Cornea Consultant at Eye Health Clinic, Noida.{" "}
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Cornea Consultant at Radium Eye Centre, Rohini, Delhi.{" "}
              </p>

              <p className="mt-4 text-lg tracking-tight text-gray-500">
                * Area of interest is Keratoconus Management , Lamellar
                surgeries (DALK ,DSAEK ,DMEK ), complex cataract surgeries and
                other Ocular surface disorders .{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ouraim;
