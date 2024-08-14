import React, { useState } from "react";
// import { products } from "../../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";
import Image from "next/image";



const NextArrow = (props) => (
  <div {...props} className="slick-arrow next-arrow">
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = (props) => (
  <div {...props} className="slick-arrow prev-arrow">
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const products = [
  {
    id: 1,
    img: "/images/Dr1.jpeg",
    name: "Dr Vivek Sharma",
    price: "Cataract, Cornea & Refractive Surgeon  ",
    exp:"M.B.B.S, M.S (Gold Medal), DNB ,Fellowship in Cornea & External Disease (LVPEI Hyd.)",

  },
  {
    id: 2,
    img: "/images/Dr2.png",
    name: "Dr. Rohini Grover",
    price: "Senior consultant opthalmologist and vitreoretinal surgeon ",
    exp:"Mbbs ,DNB ( ophthalmology) , Fnb  ( vitreoretinal surgeon ) , FICO (UK)",

  },
  {
    id: 3,
    img: "/images/Dr3.png",
    name: "Dr. Pooja Shukla ",
    price: "Specialist in cataract and corneal disease ",
    exp:"Mbbs , DNB , FSSN ",
  },
  {
    id: 4,
    img: "/images/Dr1.jpeg",
    name: "Dr. Shilpa taneja mittal ",
    price: "Facial plastic and aesthetic surgeon ",
    exp:"MBBS , DNB , FICO , MNAMS , FAEH",
  },
  {
    id: 5,
    img: "/images/Dr1.jpeg",
    name: "Dr. Jyoti batra ",
    price: "Oculoplasty surgeon ",
    exp: "Mbbs ( AIIMS) , MD ( AIIMS) FLVPET ( oculoplasty ) , DNB , FACIO",

  },
  
];


const Slider1 = () => {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [qty] = useState(1);


  return (
    <div className="p-8 overflow-hidden text-center  relative lg:w-[80%]  mx-auto z-0">
     <h1 className=" w-full text-center text-4xl lg:text-6xl sm:text-5xl text-[#233976] font-bold tracking-wider overflow-hidden py-10 z-10">
          Our Doctor Panel...
        </h1>
      <Slider {...settings}>
        {products.map((item, index) => (
          <div key={index} className=" max-w-xs relative hover:bg-blue-800 bg-orange-400 rounded-xl bg-clip-padding  text-white ">
            <div className="  hover:shadow transition-all duration-300 relative group">
              <Image
              height={750}
              width={750}
                src={item.img}
                title={item.category}
                alt={item.category}
                className="mx-auto  rounded-t-xl overflow-hidden"
                
              />
       
            </div>
            <div className="mt-2 text-left px-4 py-2">
              <div className="text-black text-xl font-semibold  uppercase">{item.name}</div>
              <div className="">{item.price}</div>
              <div>{item.exp}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;