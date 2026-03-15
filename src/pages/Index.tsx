import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/wevo/Navbar";
import HeroSection from "@/components/wevo/HeroSection";
import BottleViewer from "@/components/wevo/BottleViewer";
import ProductsSection from "@/components/wevo/ProductsSection";
import MineralsSection from "@/components/wevo/MineralsSection";
import OurStorySection from "@/components/wevo/OurStorySection";
import WhyWevoSection from "@/components/wevo/WhyWevoSection";
import Footer from "@/components/wevo/Footer";
import SplashScreen from "@/components/wevo/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);
  const location = useLocation();

  useEffect(() => {
    if (!showSplash && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [showSplash, location.hash]);

  return (
    <div className="min-h-screen bg-background">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar />
      <HeroSection />
      <BottleViewer />
      <ProductsSection />
      <MineralsSection />
      <OurStorySection />
      <WhyWevoSection />
      <Footer />
    </div>
  );
};

export default Index;
