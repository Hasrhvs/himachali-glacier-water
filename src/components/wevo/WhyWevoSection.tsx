import { motion } from "framer-motion";
import { Droplets, Zap, Heart } from "lucide-react";

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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhyWevoSection = () => {
  return (
    <section id="why-wevo" className="wevo-section bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20"
        >
          <p className="wevo-label text-wevo-ice mb-4">Benefits</p>
          <h2 className="wevo-heading-lg text-foreground">Why WEVO?</h2>
          <p className="wevo-body text-muted-foreground mt-4 max-w-lg mx-auto">
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
              <h3 className="wevo-heading-md text-foreground mb-4">{benefit.title}</h3>
              <p className="wevo-body text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
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
