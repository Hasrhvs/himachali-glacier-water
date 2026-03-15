import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroMountains from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fixed parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-30%]"
      >
        <img
          src={heroMountains}
          alt="Pristine Himalayan peaks covered in snow"
          className="h-full w-full object-cover opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 glass-overlay" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl uppercase tracking-[0.2em] font-medium text-foreground mb-10"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Sourced From Himalayas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground whitespace-nowrap"
        >
          Born where the peaks touch clouds
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 max-w-2xl"
        >
          <p className="font-body text-lg md:text-xl font-light leading-relaxed text-foreground/80">
            Thousands of years of natural filtration through rock & ice deliver mineral-perfect water to your hands.
          </p>
        </motion.div>
{/* 
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-10"
        >
          <div className="w-16 h-px bg-wevo-ice" />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12"
        >
          <a href="#products" className="inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium bg-foreground text-background transition-all duration-500 ease-out hover:opacity-90 hover-scale">
            Explore Products
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-wevo-glacier" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
