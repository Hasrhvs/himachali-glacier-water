import { motion } from "framer-motion";
import glacialBg from "@/assets/wevo-glacial.jpg";

const GlacialBanner = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${glacialBg})` }}
      />
      <div className="absolute inset-0 bg-wevo-dark/30" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="wevo-heading-lg text-wevo-snow">
          A sustainable alternative<br />to ordinary bottled water.
        </h2>
      </motion.div>
    </section>
  );
};

export default GlacialBanner;
