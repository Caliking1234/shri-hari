import Image from "next/image";
const CardCompnonent = ({ serviceName, ImageLink }) => {
  return (
    <div className="relative group w-[250px] h-[200px] md:w-[300px] md:h-[300px] mx-auto">
      <div className=" w-full h-full absolute top-0 left-0 rounded-md flex flex-col z-10  bg-white px-1 py-3 shadow-xl hover:shadow-2xl">
        <Image
          src={ImageLink}
          width={300}
          height={300}
          className="h-[250px] rounded-md"
        />
        <h1 className=" text-center font-bold text-lg text-[#233976]">
          {serviceName}
        </h1>
      </div>
      {/* <div className=" w-full h-full absolute top-0 left-0 rotate-0 rounded-md bg-[#ff000086] group-hover:rotate-12 transition-all duration-200 ease-in"></div>
      <div className=" w-full h-full absolute top-0 left-0 rotate-0 rounded-md bg-[#0080008d] group-hover:-rotate-12 transition-all duration-200 ease-in"></div> */}
    </div>
  );
};

export default CardCompnonent;
