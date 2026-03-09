import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBottle from "@/assets/wevo-hero-bottle.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wevo-glacier/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-wevo-ice/5 rounded-full blur-[120px]" />
      
      <motion.div
        style={{ opacity: textOpacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="wevo-label text-wevo-ice mb-10"
        >
          Sourced from Himachal Pradesh
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="wevo-heading-xl text-foreground"
          >
            Born where the
          </motion.h1>

          <motion.div
            style={{ y: bottleY }}
            initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={heroBottle}
              alt="WEVO premium water bottle"
              className="w-36 md:w-48 lg:w-56 object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="wevo-heading-xl text-foreground"
          >
            peaks touch clouds
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 max-w-2xl"
        >
          <p className="wevo-body text-muted-foreground leading-loose">
            Sourced from the ancient glacial aquifers of Himachal Pradesh. Thousands of years 
            of natural filtration through rock & ice deliver mineral-perfect water to your hands.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12"
        >
          <div className="w-16 h-px bg-wevo-ice" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14"
        >
          <a href="#products" className="wevo-button hover-scale">
            Explore Products
          </a>
        </motion.div>

        {/* Scroll indicator */}
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
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
