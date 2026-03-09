import { motion } from "framer-motion";
import mountainsBg from "@/assets/wevo-mountains.jpg";

const QuoteSection = () => {
  return (
    <section id="origin" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mountainsBg})` }}
      />
      <div className="absolute inset-0 bg-wevo-dark/60" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl px-6 text-center"
      >
        <div className="wevo-divider mx-auto mb-8 bg-wevo-glacier" />
        <blockquote className="wevo-heading-md italic text-wevo-snow leading-relaxed">
          "Each bottle carries the memory of snowmelt, the patience of stone, 
          and the clarity that only nature can engineer."
        </blockquote>
        <div className="wevo-divider mx-auto mt-8 bg-wevo-glacier" />
      </motion.div>
    </section>
  );
};

export default QuoteSection;
