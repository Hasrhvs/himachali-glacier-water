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

const MineralsSection = () => {
  return (
    <section id="minerals" className="wevo-section bg-wevo-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="wevo-label text-wevo-glacier mb-4">The Science</p>
          <h2 className="wevo-heading-lg text-wevo-snow">
            Purest water bottled with<br />optimum minerals
          </h2>
          <p className="wevo-body text-wevo-stone mt-6 max-w-xl mx-auto">
            Nature's filtration delivers the perfect mineral balance in every bottle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {minerals.map((mineral, i) => (
            <motion.div
              key={mineral.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="wevo-divider mx-auto mb-6 bg-wevo-ice" />
              <p className="wevo-label text-wevo-ice mb-4">{mineral.label}</p>
              <p className="wevo-stat-number text-wevo-snow mb-4">{mineral.value}</p>
              <p className="wevo-body text-wevo-glacier/70 max-w-xs mx-auto text-sm">
                {mineral.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MineralsSection;
