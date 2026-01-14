// import Hero from "@/components/Home/Banner/Hero";

import Hero from "@/components/Home/Banner/Hero";
import FactsSection from "@/components/Home/FactsSection/FactsSection";
import FeaturesSection from "@/components/Home/FeaturesSection/FeaturesSection";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import Service from "@/components/Home/Service/Service";
import Sponsor from "@/components/Home/Sponsor/Sponsor";
import WhyChooseUs from "@/components/Home/WhychooseUs/WhyChooseUs";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";



export default  function Home() {
  // const session =await getServerSession(authOptions)
  return (
  <div>

   <Hero></Hero>
   <Service></Service>
   <FeaturesSection></FeaturesSection>
   <FactsSection></FactsSection>
   <WhyChooseUs></WhyChooseUs>
   <HowItWorks></HowItWorks>
   <Sponsor></Sponsor>

  </div>
  );
}
