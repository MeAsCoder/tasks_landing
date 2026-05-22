import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveEarningsTicker from "@/components/LiveEarningsTicker";
import EarningCategories from "@/components/EarningCategories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TrustAndFAQ from "@/components/TrustAndFAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LiveEarningsTicker />
      <EarningCategories />
      <HowItWorks />
      <Testimonials />
      <TrustAndFAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
