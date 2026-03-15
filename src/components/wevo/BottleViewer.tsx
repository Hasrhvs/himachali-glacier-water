import { motion } from "framer-motion";
import { Recycle, Package, Droplets } from "lucide-react";
import can330 from "@/assets/wevo-can-330ml.png";

const features = [
  {
    icon: Recycle,
    title: "Recycles Forever",
  },
  {
    icon: Package,
    title: "Resealable Lid",
  },
  {
    icon: Droplets,
    title: "Mineral Rich Water",
  },
];

const BottleViewer = () => {
  return (
    <section className="wevo-section" style={{ backgroundColor: "#e1f2fa4d" }} id="explore">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-border group-hover:border-wevo-ice group-hover:bg-wevo-ice/10 transition-all duration-500 rounded-full">
                  <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-wevo-ice transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Can Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <motion.img
              src={can330}
              alt="WEVO Can"
              className="w-52 md:w-72 lg:w-80 h-auto object-contain drop-shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottleViewer;
