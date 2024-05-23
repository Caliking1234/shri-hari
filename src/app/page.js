import Image from "next/image";
import Crousel from "./components/Crousel";
import img from "/public/images/dr_vivek.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <Crousel />
      <div className=" w-full h-screen flex flex-col md:flex-row items-center justify-center px-5 py-5 bg-gray-100">
        <div className=" w-full h-[400] flex items-center justify-center py-3">
          <Image
            src={img}
            height={500}
            width={500}
            alt="abc"
            className=" h-[400] w-[200] md:w-[300] shadow-md shadow-black"
          />
        </div>
        <div className=" flex justify-center gap-3 md:gap-8 flex-col w-full h-fit md:h-full">
          <h1 className=" text-gray-700 font-bold text-2xl">
            Dr. Vivek Sharma
          </h1>
          <h1 className=" text-gray-700 font-bold text-2xl">
            MBBS,MS Gold Medalist
          </h1>
          <h1 className=" text-gray-600 font-bold text-2xl">
            Experience:15+ years
          </h1>
          <p className=" text-gray-500 text-xl uppercase">
            fellowship in cornea and anterior segment
          </p>
        </div>
      </div>
    </main>
  );
}
