"use client";
import React, { useEffect, useRef, useState } from "react";
import { DropDownMenu } from "../data/data";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const DropDown = ({ flexy, setnavFalse }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const divRef = useRef();
  const router = usePathname();
  const rout = router.split("/");
  const rout1 = rout[1];
  const rout2 = rout[2];
  console.log(rout1);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== divRef.current) {
        setIsOpen(false);
      }
    });
  });

  return (
    <div
      className={
        flexy === 1
          ? " flex flex-col items-center justify-center p-[2px] gap-5"
          : " flex flex-row items-center justify-center p-[2px] gap-5"
      }
    >
      {DropDownMenu.map((menuInfo, index) => (
        <div
          key={index}
          className=" relative group flex justify-center items-center"
        >
          <Link
            href={menuInfo.landinglink}
            ref={divRef}
            onClick={() => setIsOpen(!IsOpen)}
            className={
              rout1 === menuInfo.reflink
                ? " text-sm cursor-pointer tracking-wider text-[#f59522] p-1 uppercase"
                : " text-sm cursor-pointer tracking-wider text-[#223A79] group-hover:text-[#f59522] transition-all duration-200 ease-in  p-1 uppercase"
            }
          >
            {menuInfo.title}
            {rout1 !== menuInfo.reflink ? (
              <div className="w-[0px] bg-[#00C1F4] transition-all ease-in-out delay-300 group-hover:w-full h-[1px]"></div>
            ) : (
              <></>
            )}
          </Link>
          <div className=" invisible shadow-md shadow-black opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in delay-100 top-[32px] text-xs z-50 w-[200px] p-2 flex flex-col gap-2 items-center justify-center h-fit bg-gray-100  rounded-md absolute left-[50%] translate-x-[-50%]">
            {menuInfo.Link.map((module, i) => {
              return (
                <Link
                  onClick={setnavFalse}
                  key={i}
                  href={module.link}
                  className={
                    rout2 === module.ref
                      ? " shadow-sm shadow-black flex items-center justify-center  w-full py-2 mx-auto bg-[#f59522] text-white"
                      : " hover:shadow-md shadow-black  flex items-center justify-center  w-full py-2 mx-auto hover:bg-[#f59522] text-[#223A79] hover:text-white transition-all duration-200 ease-in"
                  }
                >
                  <div className=" invisible text-center group-hover:visible transition-all duration-200 ease-in relative flex items-center justify-center uppercase w-full text-xs">
                    {module.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
