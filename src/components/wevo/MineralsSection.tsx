import { motion } from "framer-motion";

const minerals = [
  {
    label: "Calcium",
    value: "5%",
    description: "5% of the recommended daily intake of CALCIUM in one litre of WEVO water.",
  },
  {
    label: "TDS",
    value: "256",
    description: "Total Dissolved Solids of 256, which is ideal for good health and taste.",
  },
  {
    label: "pH",
    value: "7.1–7.9",
    description: "Optimum pH value makes WEVO water alkaline and supports overall health and gut health.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const MineralsSection = () => {
  return (
    <section id="minerals" className="wevo-section bg-wevo-navy relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wevo-ice/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-24"
        >
          <p className="wevo-label text-wevo-ice mb-4">The Science</p>
          <h2 className="wevo-heading-lg text-wevo-snow">
            Purest water bottled with<br />optimum minerals
          </h2>
          <p className="wevo-body text-wevo-glacier/60 mt-6 max-w-xl mx-auto">
            Nature's filtration delivers the perfect mineral balance in every bottle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
        >
          {minerals.map((mineral) => (
            <motion.div
              key={mineral.label}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-12 h-px bg-wevo-ice/40 mx-auto mb-8 group-hover:bg-wevo-ice group-hover:w-20 transition-all duration-500"
              />
              <p className="wevo-label text-wevo-ice mb-6">{mineral.label}</p>
              <motion.p
                className="font-display text-6xl md:text-7xl font-light text-wevo-snow mb-6"
                whileInView={{ scale: [0.9, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {mineral.value}
              </motion.p>
              <p className="font-body text-sm text-wevo-glacier/50 max-w-[280px] mx-auto leading-relaxed">
                {mineral.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MineralsSection;
