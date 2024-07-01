import Image from "next/image";
const CardCompnonent = ({ serviceName, ImageLink }) => {
  return (
    <div className="relative group w-[120px] h-[200px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[300px] mx-auto">
      <div className=" w-full h-full absolute top-0 left-0 rounded-md flex flex-col z-10  bg-white px-1 py-3 shadow-xl hover:shadow-2xl">
        <Image
          src={ImageLink}
          width={300}
          height={300}
          className="h-[150px] md:h-[250px] rounded-md"
        />
        <h1 className=" text-center font-bold text-lg text-[#233976]">
          {serviceName}
        </h1>
      </div>
    </div>
  );
};

export default CardCompnonent;
