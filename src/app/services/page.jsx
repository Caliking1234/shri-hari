"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import CardDisplay from "../components/cardDisplay";
import Link from "next/link";

const Page = () => {
  const data = [
    {
      name: "Cataract",
      imgSrc: "/images/cataract.jpeg",
      descp:
        "Cataract surgery has evolved significantly with the advent of advanced techniques like Femtosecond Laser-Assisted Cataract Surgery (FLACS), Micro-Incision Cataract Surgery (MICS), and Phacoemulsification. FLACS employs a femtosecond laser to make precise incisions and soften the cataract, enhancing the accuracy and safety of the procedure. MICS is characterized by the use of smaller incisions, typically less than 2.2 mm, which promotes faster healing and reduces the risk of complications. Phacoemulsification remains the most widely used technique, utilizing ultrasonic vibrations to emulsify the cataractous lens before it is aspirated out of the eye. These advancements have minimized surgical trauma, shortened recovery times, and improved visual outcomes for patients. The integration of these techniques allows ophthalmologists to tailor the surgical approach to individual patient needs, ensuring optimal results and enhancing overall patient satisfaction.",
    },
    {
      name: "Cornea",
      imgSrc: "/images/cornea.jpeg",
      descp:
        "Corneal health is crucial for clear vision, and several advanced treatments address common corneal issues such as corneal transplants, pterygium, and keratoconus. Corneal transplant, or keratoplasty, involves replacing a damaged or diseased cornea with a donor cornea, significantly restoring vision. Techniques like penetrating keratoplasty (PK) and endothelial keratoplasty (EK) are tailored to the patient's specific condition. Pterygium, a benign growth on the cornea, can impair vision and is typically treated with surgical removal, often followed by grafting to prevent recurrence. Keratoconus, a progressive thinning of the cornea, distorts vision and can be managed through treatments like corneal collagen cross-linking (CXL), which strengthens the corneal tissue, and intracorneal ring segments (ICRS) to reshape the cornea. In advanced cases, a corneal transplant may be necessary. These treatments underscore the advancements in ophthalmology, offering improved visual outcomes and quality of life for patients. ",
    },
    {
      name: "Retina",
      imgSrc: "/images/retina.jpg",
      descp:
        "Retinal health is pivotal for vision, and modern diagnostic and treatment methods have significantly improved outcomes for retinal conditions. Diagnostic techniques include optical coherence tomography (OCT), which provides detailed cross-sectional images of the retina, aiding in the detection of conditions like macular degeneration and diabetic retinopathy. Fluorescein angiography is another vital tool, using a dye to visualize blood flow in the retina, helping diagnose vascular issues. For treatment, intravitreal injections of anti-VEGF drugs are commonly used to manage conditions such as age-related macular degeneration (AMD) and diabetic macular edema by inhibiting abnormal blood vessel growth and leakage. Laser therapy is effective for treating retinal tears, diabetic retinopathy, and other retinal disorders by sealing blood vessels or creating adhesions to prevent retinal detachment. Surgical interventions, like vitrectomy, are employed for more severe conditions, such as retinal detachment or macular holes. These advanced diagnostic and treatment options are crucial in preserving vision and enhancing patients' quality of life.",
    },
    {
      name: "Glaucoma",
      imgSrc: "/images/glaucoma.jpeg",
      descp:
        "Glaucoma is a group of eye conditions that damage the optic nerve, often due to elevated intraocular pressure (IOP), leading to vision loss if untreated. Early diagnosis is crucial, with comprehensive eye exams including tonometry to measure IOP, gonioscopy to inspect the drainage angle, and visual field testing to assess peripheral vision loss. Optical coherence tomography (OCT) can also evaluate the optic nerve and retinal nerve fiber layer for damage.",
    },
    {
      name: "Refractive",
      imgSrc: "/images/ref.jpeg",
      descp:
        "Refractive surgery encompasses a variety of advanced procedures designed to correct vision issues such as myopia, hyperopia, and astigmatism, offering alternatives to glasses and contact lenses. LASIK (Laser-Assisted in Situ Keratomileusis) uses a microkeratome or femtosecond laser to create a corneal flap, which is then reshaped with an excimer laser to correct refractive errors. Femto LASIK utilizes a femtosecond laser for flap creation, enhancing precision and safety.",
    },
    {
      name: "Squint and oculoplasty",
      imgSrc: "/images/octo.jpeg",
      descp:
        "Squint, or strabismus, and oculoplasty are two distinct yet important areas within ophthalmology. Strabismus involves the misalignment of the eyes, where one eye may turn inward, outward, upward, or downward. Diagnosis includes a thorough eye examination, covering visual acuity, ocular alignment, and binocular function. Treatment options range from corrective glasses and prism lenses to eye muscle exercises and surgery. Strabismus surgery involves adjusting the eye muscles to align the eyes properly, significantly improving binocular vision and aesthetic appearance.Oculoplasty, or oculoplastic surgery, focuses on the reconstructive and cosmetic enhancement of the eye and its surrounding structures. This specialty addresses a range of conditions, including droopy eyelids (ptosis), eyelid malpositions (entropion and ectropion), tear duct obstructions, and orbital fractures. Procedures may involve eyelid surgery (blepharoplasty), tear duct surgery (dacryocystorhinostomy), and orbital decompression for thyroid eye disease. Oculoplasty also includes cosmetic procedures such as Botox injections and dermal fillers to rejuvenate the periocular area. Both fields significantly enhance visual function, eye health, and overall quality of life for patients.",
    },
    {
      name: "Pediatrics ophthalmology",
      imgSrc: "/images/baccha.jpeg",
      descp:
        "Pediatric ophthalmology is a specialized field focused on diagnosing and treating eye conditions in children, ensuring proper visual development and preventing long-term vision problems. Early detection is crucial, as children's visual systems are still developing. Common conditions include amblyopia (lazy eye), strabismus (misaligned eyes), refractive errors (myopia, hyperopia, astigmatism), and congenital cataracts.",
    },
    {
      name: "Contact len services",
      imgSrc: "/images/banner.jpg",
      descp:
        "Contact lens services encompass a range of professional offerings aimed at providing patients with the most suitable contact lenses for their visual needs and lifestyle. This includes comprehensive eye examinations to determine the correct prescription and assess the health of the cornea and ocular surface. Eye care professionals evaluate factors such as refractive error, corneal curvature, tear film stability, and the presence of any ocular conditions to recommend the most appropriate lens type.",
    },
    {
      name: "Comprehensive eye care",
      imgSrc: "/images/img5.jpg",
      descp:
        "Comprehensive eye care involves a holistic approach to maintaining and improving eye health and vision. This includes routine eye examinations to detect and monitor a wide range of ocular conditions such as refractive errors (myopia, hyperopia, astigmatism), glaucoma, cataracts, macular degeneration, diabetic retinopathy, and more. During these exams, an eye care professional evaluates visual acuity, refraction, ocular alignment, and the overall health of the eye, including the retina, cornea, lens, and optic nerve.",
    },
  ];
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".texty",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 1.2,
        ease: "back.out(1.7)",
      }
    );

    tl.fromTo(
      ".imga",
      { opacity: 0, y: 20 },
      { opacity1: 1, y: 0, duration: 1.2, ease: "back.out(1.7}" },
      "-=2"
    );

    tl.fromTo(
      ".animi",
      {
        width: 0,
      },
      { width: "10vw", duration: 1, ease: "back.out(1.7)" }
    );
  }, []);
  return (
    <div className=" w-full relative">
      <div className=" z-[60] fixed bottom-2 left-0 md:top-[50%] md:-translate-y-[50%] bg-[#233976] w-full md:w-[100px] h-[80px] text-sm px-2 py-3 flex items-center justify-center shadow-md shadow-black hover:scale-95 hover:shadow-lg hover:shadow-black transition-all duration-150">
        <Link href={"/contact"}>Book An Appointment</Link>
      </div>
      <div className="relative w-full pt-5 md:pt-0 h-[30vh] bg-[url('/images/img4.jpg')] bg-cover bg-center bg-no-repeat flex flex-row items-center justify-center gap-3  ">
        <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#233976] via-[#233976b0] from-50%  to-transparent z-10"></div>
        <div className=" z-[20] texty w-1/2 h-full px-8 text-xl md:text-5xl capatalize tracking-tight leading-none text-white flex flex-col items-start justify-center gap-3 box-border">
          <div className=" w-full flex flex-row items-center justify-start">
            <h1 className=" text-[#F4BA0E] texty font-bold text-7xl">
              Our Services
            </h1>
          </div>
        </div>
        <div className=" texty w-1/2 h-full">
          <Image
            src="/images/img4.jpg"
            fill
            alt="abc"
            className=" drop-shadow-md w-[280px] md:w-[500px] h-[280px] md:h-[500px]"
          />
        </div>
      </div>
      <div className=" w-full h-full relative flex flex-col gap-3 py-10 bg-gray-100">
        {data.map((service, index) => (
          <React.Fragment key={index}>
            <CardDisplay
              serviceName={service.name}
              ImageLink={service.imgSrc}
              servicedescp={service.descp}
              idx={index}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Page;
