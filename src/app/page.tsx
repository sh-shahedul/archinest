// import Hero from "@/components/Home/Banner/Hero";

import Hero from "@/components/Home/Banner/Hero";
import FactsSection from "@/components/Home/FactsSection/FactsSection";
import FeaturesSection from "@/components/Home/FeaturesSection/FeaturesSection";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import Sponsor from "@/components/Home/Sponsor/Sponsor";
import SponsorMarquee from "@/components/Home/Sponsor/Sponsor";
import WhyChooseUs from "@/components/Home/WhychooseUs/WhyChooseUs";



export default function Home() {
  return (
  <div>

   <Hero></Hero>
   <FeaturesSection></FeaturesSection>
   <FactsSection></FactsSection>
   <WhyChooseUs></WhyChooseUs>
   <HowItWorks></HowItWorks>
   <Sponsor></Sponsor>

  </div>
  );
}
