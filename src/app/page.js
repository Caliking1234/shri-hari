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
    </main>
  );
}
