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

const WhyWevoSection = () => {
  return (
    <section id="why-wevo" className="wevo-section bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="wevo-label text-muted-foreground mb-4">Benefits</p>
          <h2 className="wevo-heading-lg text-foreground">Why WEVO?</h2>
          <p className="wevo-body text-muted-foreground mt-4 max-w-lg mx-auto">
            More than hydration — it's a lifestyle upgrade backed by nature.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-border group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 rounded-full">
                <benefit.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors duration-500" />
              </div>
              <h3 className="wevo-heading-md text-foreground mb-4">{benefit.title}</h3>
              <p className="wevo-body text-muted-foreground max-w-sm mx-auto text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWevoSection;
