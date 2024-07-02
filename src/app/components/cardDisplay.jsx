import Image from "next/image";
const CardDisplay = ({ serviceName, ImageLink, servicedescp, idx }) => {
  return (
    <div className="relative group w-[90%] md:w-3/4 mx-auto h-[400px] md:h-[250px] px-3">
      <div
        className={
          idx % 2 == 0
            ? ` w-full h-full absolute top-0 left-0 rounded-md flex flex-row z-10  bg-white px-1 py-3 shadow-xl hover:shadow-2xl`
            : ` w-full h-full absolute top-0 left-0 rounded-md flex flex-row-reverse z-10  bg-white px-1 py-3 shadow-xl hover:shadow-2xl`
        }
      >
        <div className=" h-full">
          <Image
            src={ImageLink}
            width={300}
            height={300}
            className=" rounded-md h-full object-cover"
          />
        </div>
        <div className=" w-full p-2">
          <h1 className=" text-left font-bold text-lg text-[#233976]">
            {serviceName}
          </h1>
          <p className=" text-left text-xs md:text-sm text-neutral-500">
            {servicedescp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
