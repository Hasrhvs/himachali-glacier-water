import Navbar from "@/components/wevo/Navbar";
import HeroSection from "@/components/wevo/HeroSection";
import QuoteSection from "@/components/wevo/QuoteSection";
import ProductsSection from "@/components/wevo/ProductsSection";
import MineralsSection from "@/components/wevo/MineralsSection";
import GlacialBanner from "@/components/wevo/GlacialBanner";
import WhyWevoSection from "@/components/wevo/WhyWevoSection";
import FAQSection from "@/components/wevo/FAQSection";
import Footer from "@/components/wevo/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <ProductsSection />
      <MineralsSection />
      <GlacialBanner />
      <WhyWevoSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
