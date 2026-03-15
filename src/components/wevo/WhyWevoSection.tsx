import { motion } from "framer-motion";
import { Droplets, Zap, Heart } from "lucide-react";
import wevoLogo from "@/assets/Wevo.png";

const benefits = [
  {
    icon: Heart,
    title: "Deep Detox",
    description: "Natural alkaline water helps flush toxins from your body, supporting kidney function and cellular rejuvenation.",
  },
  {
    icon: Droplets,
    title: "Peak Hydration",
    description: "Micro-clustered water molecules are absorbed faster by your cells, keeping you hydrated longer than regular water.",
  },
  {
    icon: Zap,
    title: "Natural Energy",
    description: "Rich mineral content provides sustained energy throughout the day without caffeine or artificial stimulants.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const WhyWevoSection = () => {
  return (
    <section id="why-wevo" className="wevo-section" style={{ backgroundColor: "#e1f2fa4d" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight text-foreground flex items-center justify-center gap-4">
            <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '1em' }}>Why</span> <img src={wevoLogo} alt="WEVO" className="h-12 md:h-20 w-auto inline-block" /><span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '1em' }}>?</span>
          </h2>
          <p className="font-body text-lg md:text-2xl text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            More than hydration — it's a lifestyle upgrade backed by nature.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="text-center group cursor-default"
            >
              <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center border border-border group-hover:border-wevo-ice group-hover:bg-wevo-ice/10 transition-all duration-500 rounded-full group-hover:shadow-lg group-hover:shadow-wevo-ice/10">
                <benefit.icon className="w-8 h-8 text-muted-foreground group-hover:text-wevo-ice transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">{benefit.title}</h3>
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-sm mx-auto leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWevoSection;
