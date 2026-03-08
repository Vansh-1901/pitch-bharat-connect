import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoCanApply from "@/components/landing/WhoCanApply";
import InvestorsSection from "@/components/landing/InvestorsSection";
import FeaturedStartups from "@/components/landing/FeaturedStartups";
import AboutKaroStartup from "@/components/landing/AboutKaroStartup";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <WhoCanApply />
      <InvestorsSection />
      <FeaturedStartups />
      <AboutKaroStartup />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
