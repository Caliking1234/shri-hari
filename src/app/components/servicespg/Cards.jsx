import React, { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

const Cards = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const data = [
    {
      name: "Cataract",
      imgSrc: "/images/cataract.jpeg",
      id: "Cataract",
      descp:
        "Cataract surgery has evolved significantly with the advent of advanced techniques like Femtosecond Laser-Assisted Cataract Surgery (FLACS), Micro-Incision Cataract Surgery (MICS), and Phacoemulsification. FLACS employs a femtosecond laser to make precise incisions and soften the cataract, enhancing the accuracy and safety of the procedure. MICS is characterized by the use of smaller incisions, typically less than 2.2 mm, which promotes faster healing and reduces the risk of complications. Phacoemulsification remains the most widely used technique, utilizing ultrasonic vibrations to emulsify the cataractous lens before it is aspirated out of the eye. These advancements have minimized surgical trauma, shortened recovery times, and improved visual outcomes for patients. The integration of these techniques allows ophthalmologists to tailor the surgical approach to individual patient needs, ensuring optimal results and enhancing overall patient satisfaction.",
    },
    {
      name: "Cornea",
      imgSrc: "/images/cornea.jpeg",
      id: "Cornea",
      descp:
        "Corneal health is crucial for clear vision, and several advanced treatments address common corneal issues such as corneal transplants, pterygium, and keratoconus. Corneal transplant, or keratoplasty, involves replacing a damaged or diseased cornea with a donor cornea, significantly restoring vision. Techniques like penetrating keratoplasty (PK) and endothelial keratoplasty (EK) are tailored to the patient's specific condition. Pterygium, a benign growth on the cornea, can impair vision and is typically treated with surgical removal, often followed by grafting to prevent recurrence. Keratoconus, a progressive thinning of the cornea, distorts vision and can be managed through treatments like corneal collagen cross-linking (CXL), which strengthens the corneal tissue, and intracorneal ring segments (ICRS) to reshape the cornea. In advanced cases, a corneal transplant may be necessary. These treatments underscore the advancements in ophthalmology, offering improved visual outcomes and quality of life for patients. ",
    },
    {
      name: "Retina",
      imgSrc: "/images/retina.jpg",
      id: "Retina",
      descp:
        "Retinal health is pivotal for vision, and modern diagnostic and treatment methods have significantly improved outcomes for retinal conditions. Diagnostic techniques include optical coherence tomography (OCT), which provides detailed cross-sectional images of the retina, aiding in the detection of conditions like macular degeneration and diabetic retinopathy. Fluorescein angiography is another vital tool, using a dye to visualize blood flow in the retina, helping diagnose vascular issues. For treatment, intravitreal injections of anti-VEGF drugs are commonly used to manage conditions such as age-related macular degeneration (AMD) and diabetic macular edema by inhibiting abnormal blood vessel growth and leakage. Laser therapy is effective for treating retinal tears, diabetic retinopathy, and other retinal disorders by sealing blood vessels or creating adhesions to prevent retinal detachment. Surgical interventions, like vitrectomy, are employed for more severe conditions, such as retinal detachment or macular holes. These advanced diagnostic and treatment options are crucial in preserving vision and enhancing patients' quality of life.",
    },
    {
      name: "Glaucoma",
      imgSrc: "/images/glaucoma.jpeg",
      id: "Glaucoma",
      descp:
        "Glaucoma is a group of eye conditions that damage the optic nerve, often due to elevated intraocular pressure (IOP), leading to vision loss if untreated. Early diagnosis is crucial, with comprehensive eye exams including tonometry to measure IOP, gonioscopy to inspect the drainage angle, and visual field testing to assess peripheral vision loss. Optical coherence tomography (OCT) can also evaluate the optic nerve and retinal nerve fiber layer for damage.",
    },
    {
      name: "Refractive",
      imgSrc: "/images/ref.jpeg",
      id: "Refractive",
      descp:
        "Refractive surgery encompasses a variety of advanced procedures designed to correct vision issues such as myopia, hyperopia, and astigmatism, offering alternatives to glasses and contact lenses. LASIK (Laser-Assisted in Situ Keratomileusis) uses a microkeratome or femtosecond laser to create a corneal flap, which is then reshaped with an excimer laser to correct refractive errors. Femto LASIK utilizes a femtosecond laser for flap creation, enhancing precision and safety.",
    },
    {
      name: "Squint and oculoplasty",
      imgSrc: "/images/octo.jpeg",
      id: "Squint",
      descp:
        "Squint, or strabismus, and oculoplasty are two distinct yet important areas within ophthalmology. Strabismus involves the misalignment of the eyes, where one eye may turn inward, outward, upward, or downward. Diagnosis includes a thorough eye examination, covering visual acuity, ocular alignment, and binocular function. Treatment options range from corrective glasses and prism lenses to eye muscle exercises and surgery. Strabismus surgery involves adjusting the eye muscles to align the eyes properly, significantly improving binocular vision and aesthetic appearance.",
    },
    {
      name: "Pediatrics ophthalmology",
      imgSrc: "/images/baccha.jpeg",
      id: "Pediatricsophthalmology",
      descp:
        "Pediatric ophthalmology is a specialized field focused on diagnosing and treating eye conditions in children, ensuring proper visual development and preventing long-term vision problems. Early detection is crucial, as children's visual systems are still developing. Common conditions include amblyopia (lazy eye), strabismus (misaligned eyes), refractive errors (myopia, hyperopia, astigmatism), and congenital cataracts.",
    },
    {
      name: "Contact len services",
      imgSrc: "/images/banner.jpg",
      id: "Contactlens",
      descp:
        "Contact lens services encompass a range of professional offerings aimed at providing patients with the most suitable contact lenses for their visual needs and lifestyle. This includes comprehensive eye examinations to determine the correct prescription and assess the health of the cornea and ocular surface. Eye care professionals evaluate factors such as refractive error, corneal curvature, tear film stability, and the presence of any ocular conditions to recommend the most appropriate lens type.",
    },
    {
      name: "Comprehensive eye care",
      imgSrc: "/images/img5.jpg",
      id: "eyecare",
      descp:
        "Comprehensive eye care involves a holistic approach to maintaining and improving eye health and vision. This includes routine eye examinations to detect and monitor a wide range of ocular conditions such as refractive errors (myopia, hyperopia, astigmatism), glaucoma, cataracts, macular degeneration, diabetic retinopathy, and more. During these exams, an eye care professional evaluates visual acuity, refraction, ocular alignment, and the overall health of the eye, including the retina, cornea, lens, and optic nerve.",
    },
  ];

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-90" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  return (
    <div id="team">

      <div className=" py-8 pt-16 justify-center  mx-auto text-center lg:pt-16 ">
        <div className="mx-auto  px-6 lg:px-8">        
          <div className="lg:w-[90%] justify-center mx-auto text-center">
            <ul className="mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3">
              {data.map((profile, index) => (
                <li key={profile.id} className="p-2 rounded-lg shadow-xl">
                  <Image
                    height={750}
                    width={750}
                    className="aspect-[20/13] w-full rounded-2xl object-cover"
                    src={profile.imgSrc}
                    alt={profile.name}
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
                    {profile.name}
                  </h3>
                  {/* <p className="text-base leading-7">{profile.role}</p> */}
                  {/* <p className="text-sm leading-6">{profile.location}</p> */}

                  <div>
                    <Accordion
                      open={open === profile.id}
                      icon={<Icon id={profile.id} open={open} />}
                      className="px-2 lg:px-2 my-2 rounded-lg bg-gray-100 shadow-md hover:bg-orange-400 bg-opacity-30"
                    >
                      <AccordionHeader
                        style={{ border: "0" }}
                        className="text-md "
                        onClick={() => handleOpen(profile.id)}
                      >
                        More Information...
                      </AccordionHeader>
                      <AccordionBody className="bg-orange-400">
                        {profile.descp}
                      </AccordionBody>
                    </Accordion>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
