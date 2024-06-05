import Crousel from "./components/Crousel";
import Services from "./components/Services";
import AboutSection from "./components/aboutSection";
import HomePageBanner from "./components/homepageBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Crousel />
      <div className="px-5 py-10 text-3xl md:text-5xl text-neutral-600 flex flex-col items-center justify-center gap-5 text-center">
        <h1>
          {" "}
          Welcome to <span className=" text-[#233976] font-bold">
            ShriHari
          </span>{" "}
          Eye Care Center
        </h1>
        <p className=" text-2xl text-[#233976]">
          Your Perfection Vision Is Our Dream
        </p>
      </div>
      <Services />
      <HomePageBanner />
      <AboutSection />
    </main>
  );
}
