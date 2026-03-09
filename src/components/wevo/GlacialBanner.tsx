import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import glacialBg from "@/assets/wevo-glacial.jpg";

const GlacialBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-15%]"
      >
        <img src={glacialBg} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-wevo-dark/60 via-wevo-dark/20 to-wevo-dark/40" />
      
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="wevo-heading-lg text-wevo-snow drop-shadow-lg">
          A sustainable alternative<br />to ordinary bottled water.
        </h2>
      </motion.div>
    </section>
  );
};

export default GlacialBanner;
