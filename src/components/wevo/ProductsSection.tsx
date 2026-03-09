import { motion } from "framer-motion";
import bottlesLineup from "@/assets/wevo-bottles-lineup.png";

const products = [
  { size: "500 ml", price: "₹10", desc: "Perfect for on-the-go" },
  { size: "750 ml", price: "₹15", desc: "Your daily companion" },
  { size: "1 L", price: "₹20", desc: "Full hydration, all day" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProductsSection = () => {
  return (
    <section id="products" className="wevo-section bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-8"
        >
          <p className="wevo-label text-wevo-ice mb-4">Our Products</p>
          <h2 className="wevo-heading-lg text-foreground">
            Pure mountain water,<br />delivered to your door.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center mb-20"
        >
          <img
            src={bottlesLineup}
            alt="WEVO water bottles - 500ml, 750ml, 1 Litre"
            className="w-full max-w-3xl object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {products.map((product) => (
            <motion.div
              key={product.size}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group text-center p-10 border border-border hover:border-wevo-ice/50 hover:shadow-lg hover:shadow-wevo-ice/5 transition-all duration-500 bg-card"
            >
              <p className="wevo-label text-muted-foreground mb-4 group-hover:text-wevo-ice transition-colors duration-500">{product.size}</p>
              <p className="wevo-stat-number text-foreground mb-3">{product.price}</p>
              <p className="font-body text-xs text-muted-foreground">{product.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
