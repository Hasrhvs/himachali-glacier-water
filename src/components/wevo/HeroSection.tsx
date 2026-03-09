import { motion } from "framer-motion";
import heroBottle from "@/assets/wevo-hero-bottle.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-wevo-glacier/20 via-transparent to-transparent" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="wevo-label text-muted-foreground mb-8"
        >
          Sourced from Himachal Pradesh
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
        >
          <h1 className="wevo-heading-xl text-foreground">
            Born where the
          </h1>
          <motion.img
            src={heroBottle}
            alt="WEVO premium water bottle"
            className="w-32 md:w-44 lg:w-52 object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
          <h1 className="wevo-heading-xl text-foreground">
            peaks touch clouds
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 max-w-2xl"
        >
          <p className="wevo-body text-muted-foreground">
            Sourced from the ancient glacial aquifers of Himachal Pradesh. Thousands of years 
            of natural filtration through rock & ice deliver mineral-perfect water to your hands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <div className="wevo-divider mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16"
        >
          <a href="#products" className="wevo-button">
            Explore Products
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
