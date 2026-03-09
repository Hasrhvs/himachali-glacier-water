import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mountainsBg from "@/assets/wevo-mountains.jpg";

const QuoteSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.5, 0.7]);

  return (
    <section ref={ref} id="origin" className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-10%] bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img src={mountainsBg} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div className="absolute inset-0 bg-wevo-dark" style={{ opacity: overlayOpacity }} />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-3xl px-6 text-center"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-12 h-px bg-wevo-ice mx-auto mb-10"
        />
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="wevo-heading-md italic text-wevo-snow leading-relaxed"
        >
          "Each bottle carries the memory of snowmelt, the patience of stone, 
          and the clarity that only nature can engineer."
        </motion.blockquote>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-12 h-px bg-wevo-ice mx-auto mt-10"
        />
      </motion.div>
    </section>
  );
};

export default QuoteSection;
