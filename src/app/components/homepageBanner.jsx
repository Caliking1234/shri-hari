import React from "react";

const HomepageBanner = () => {
  return (
    <div className=" w-full h-fit bg-[url('/images/banner.jpg')] bg-cover bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-around gap-10 relative py-10">
      <div className=" w-full h-full absolute top-0 left-0 text-center bg-gray-700/50 tracking-widest text-5xl flex items-center justify-center font-bold"></div>
      <div className=" w-full flex flex-col gap-2 text-center justify-center items-center z-10">
        <h1 className=" w-full text-2xl sm:text-4xl text-white font-bold tracking-widest">
          <span className=" text-[#233976] font-bold">ShriHari</span> Navigating
          Dreams, Perfecting Visions!
        </h1>
      </div>
      <div className=" w-full h-fit grid sm:grid-cols-2 md:grid-cols-4 gap-5 z-10">
        <div className=" flex flex-col items-center justify-center">
          <div>
            <span className=" text-lg sm:text-3xl text-white tracking-widest font-bold">
              60000+
            </span>
          </div>
          <div className=" w-[250px] text-center bg-[#7d2793] px-3 py-2">
            <h1 className=" text-lg  text-white tracking-widest font-bold">
              Satisfied Patients
            </h1>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div>
            <span className=" text-lg sm:text-3xl text-white tracking-widest font-bold">
              2
            </span>
          </div>
          <div className=" w-[250px] text-center bg-[#7d2793] px-3 py-2">
            <h1 className=" text-lg text-white tracking-widest font-bold">
              Center
            </h1>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div>
            <span className=" text-lg sm:text-3xl text-white tracking-widest font-bold">
              30+
            </span>
          </div>
          <div className=" w-[250px] text-center bg-[#7d2793] px-3 py-2">
            <h1 className=" text-lg text-white tracking-widest font-bold">
              Employees
            </h1>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div>
            <span className=" text-lg sm:text-3xl text-white tracking-widest font-bold">
              30000+
            </span>
          </div>
          <div className=" w-[250px] text-center bg-[#7d2793] px-3 py-2">
            <h1 className=" text-lg sm:text-xl text-white tracking-widest font-bold">
              Successful Surgeries
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
