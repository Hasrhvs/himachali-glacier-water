import { motion } from "framer-motion";
import bottlesLineup from "@/assets/wevo-bottles-lineup.png";

const products = [
  { size: "500 ml", price: "₹10" },
  { size: "750 ml", price: "₹15" },
  { size: "1 L", price: "₹20" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="wevo-section bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="wevo-label text-muted-foreground mb-4">Our Products</p>
          <h2 className="wevo-heading-lg text-foreground">
            Pure mountain water,<br />delivered to your door.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <img
            src={bottlesLineup}
            alt="WEVO water bottles - 500ml, 750ml, 1 Litre"
            className="w-full max-w-3xl object-contain"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.size}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center p-8 border border-border hover:border-accent transition-colors duration-500"
            >
              <p className="wevo-label text-muted-foreground mb-3">{product.size}</p>
              <p className="wevo-stat-number text-foreground">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
