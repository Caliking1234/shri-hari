import Crousel from "./components/Crousel";
import Services from "./components/Services";
import AboutSection from "./components/aboutSection";
import HomePageBanner from "./components/homepageBanner";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {/* <Crousel /> */}
      <HeroSection />
      <Services />
      <HomePageBanner />
      <AboutSection />
      <div className=" w-full flex-col pb-10">
        <div className=" text-[#21397A] text-center">
          <h1 className=" text-6xl font-semibold">Our Centers</h1>
        </div>
        <div className=" w-full flex flex-col md:flex-row items-center justify-around py-5 gap-y-8">
          <div className=" w-full flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6403327996045!2d77.77417127496035!3d28.730292879635602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c8506a70e8a69%3A0x5ddc5f395169200a!2sShrihari%20Eye%20Care%20%26%20Laser%20Centre!5e0!3m2!1sen!2sin!4v1718423455850!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              className=" w-[280px] h-[300px] mx-auto md:w-[600px] md:h-[450px]"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className=" w-full flex flex-row items-center justify-between text-gray-600 text-xl">
              <div>Phone No. 7428383099</div>
              <div>Email:shriharieyecenter@gmail.com</div>
            </div>
          </div>
          <div className=" w-full flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.178562915489!2d77.18003407495868!3d28.68430468172873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0328925a157b%3A0xc7ff2d1da5b409f0!2sSHRIHARI%20EYE%20CARE%20%26%20LASER%20CENTRE!5e0!3m2!1sen!2sin!4v1718423499129!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              className=" w-[280px] h-[300px] mx-auto md:w-[600px] md:h-[450px]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className=" w-full flex flex-row items-center justify-between text-gray-600 text-xl">
              <div>Phone No. 7428377997</div>
              <div>Email:shriharieyecenter@gmail.com</div>
            </div>
          </div>
        </div>
        <div className=" w-full flex items-center justify-center">
          <button className=" bg-[#21397A] text-white py-3 px-2 rounded-md">
            Plan A Visit
          </button>
        </div>
      </div>
    </main>
  );
}
