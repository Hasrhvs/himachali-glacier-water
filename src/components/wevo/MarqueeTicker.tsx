import { motion } from "framer-motion";

const words = ["Pure", "Himalayan", "Alkaline", "Natural", "Glacial", "Mineral-Rich", "Pristine", "Mountain-Born"];
const duplicated = [...words, ...words, ...words];

const MarqueeTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-wevo-navy border-y border-wevo-ice/10 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((word, i) => (
          <span key={i} className="flex items-center mx-6 md:mx-10">
            <span className="font-display text-2xl md:text-4xl font-light text-wevo-snow/80 tracking-wide">
              {word}
            </span>
            <span className="ml-6 md:ml-10 text-wevo-ice/40 text-lg">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeTicker;
