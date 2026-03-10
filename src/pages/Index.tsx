import { useState, useCallback } from "react";
import Navbar from "@/components/wevo/Navbar";
import HeroSection from "@/components/wevo/HeroSection";
import QuoteSection from "@/components/wevo/QuoteSection";
import ProductsSection from "@/components/wevo/ProductsSection";
import MineralsSection from "@/components/wevo/MineralsSection";
import GlacialBanner from "@/components/wevo/GlacialBanner";
import OurStorySection from "@/components/wevo/OurStorySection";
import WhyWevoSection from "@/components/wevo/WhyWevoSection";
import FAQSection from "@/components/wevo/FAQSection";
import Footer from "@/components/wevo/Footer";
import SplashScreen from "@/components/wevo/SplashScreen";
import MarqueeTicker from "@/components/wevo/MarqueeTicker";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <div className="min-h-screen bg-background">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <ProductsSection />
      <MarqueeTicker />
      <MineralsSection />
      <GlacialBanner />
      <OurStorySection />
      <WhyWevoSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
