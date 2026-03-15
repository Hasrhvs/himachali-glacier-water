import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CalciumStat = () => {
  const { ref, display } = useCountUp({ end: 5, duration: 2000, decimals: 0, suffix: "%" });
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{display}</span>;
};

const TDSStat = () => {
  const { ref, display } = useCountUp({ end: 256, duration: 2200, decimals: 0 });
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{display}</span>;
};

const PHStat = () => {
  const { ref, display, hasStarted } = useCountUp({ end: 7.9, duration: 2000, decimals: 1 });
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {hasStarted ? `7.1–${display}` : "0.0"}
    </span>
  );
};

const minerals = [
  {
    label: "Calcium",
    Stat: CalciumStat,
    description: "5% of the recommended daily intake of CALCIUM in one litre of WEVO water.",
  },
  {
    label: "TDS",
    Stat: TDSStat,
    description: "Total Dissolved Solids of 256, which is ideal for good health and taste.",
  },
  {
    label: "pH",
    Stat: PHStat,
    description: "Optimum pH value makes WEVO water alkaline and supports overall health and gut health.",
  },
];

const MineralsSection = () => {
  return (
    <section id="minerals" className="wevo-section relative overflow-hidden" style={{ backgroundColor: "#e1f2fa4d" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-24"
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#2e8ab8" }}
          >
            The Science
          </h2>
          <p className="font-body text-lg md:text-2xl text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
            Nature's filtration delivers the perfect mineral balance in every can.
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
              <p className="font-display text-3xl md:text-4xl font-light mb-6" style={{ color: "#2e8ab8" }}>{mineral.label}</p>
              <p className="text-4xl md:text-6xl font-light text-foreground mb-6 tabular-nums tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                <mineral.Stat />
              </p>
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-[320px] mx-auto leading-relaxed">
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
