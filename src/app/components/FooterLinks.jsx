"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const FooterLinks = ({ title, list1 }) => {
  const router = usePathname();
  const rout = router.split("/");
  const rout1 = rout[1];
  const rout2 = rout[2];
  return (
    <>
      <p className="text-gray-600 font-semibold text-lg pb-4">{title}</p>
      {list1.map((module, i) => {
        return (
          <div
            key={i}
            className={
              rout2 === module.ref
                ? " text-xs pb-2 text-[#f59522] cursor-pointer"
                : "text-black text-xs pb-2 hover:text-[#f59522] transition-all duration-200 ease-in cursor-pointer"
            }
          >
            <Link href={module.link}>{module.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default FooterLinks;
