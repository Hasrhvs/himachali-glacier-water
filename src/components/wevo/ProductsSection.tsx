import { motion } from "framer-motion";
import can330 from "@/assets/wevo-can-330ml.png";
import can500 from "@/assets/wevo-can-500ml.png";

const products = [
  {
    name: "STILL MINERAL WATER (24 CANS × 330ML)",
    // price: "₹1500",
    desc: "Sustainable Canned water in a resealable container. Natural still mineral water with rich mineral contents.",
    image: can330,
    amazonLink: "https://www.amazon.in",
  },
  {
    name: "STILL MINERAL WATER (24 CANS × 500ML)",
    // price: "₹2000",
    desc: "Sustainable Canned water in a resealable container. Natural still mineral water with rich mineral contents.",
    image: can500,
    amazonLink: "https://www.amazon.in",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

const ProductsSection = () => {
  return (
    <section id="products" className="wevo-section bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#2e8ab8" }}
          >
            Our Products
          </h2>
        </motion.div>

        {/* Two-column product layout like reference */}
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-0">
          {/* Left product details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex-1 flex flex-col justify-center md:text-left text-center md:pr-8 lg:pr-12 py-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-foreground uppercase mb-3">
                {products[0].name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                {products[0].desc}
              </p>
              <a
                href={products[0].amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-[0.12em] font-medium bg-foreground text-background transition-all duration-300 hover:opacity-90 mb-4"
              >
                Buy
              </a>
            </motion.div>
          </motion.div>

          {/* Center cans */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex items-end justify-center gap-2 md:gap-4 py-8"
          >
            <motion.img
              src={can330}
              alt="WEVO 330ml Can"
              className="w-28 md:w-36 lg:w-44 h-auto object-contain drop-shadow-2xl"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            />
            <motion.img
              src={can500}
              alt="WEVO 500ml Can"
              className="w-32 md:w-40 lg:w-48 h-auto object-contain drop-shadow-2xl"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            />
          </motion.div>

          {/* Right product details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex-1 flex flex-col justify-center md:text-left text-center md:pl-8 lg:pl-12 py-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-foreground uppercase mb-3">
                {products[1].name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                {products[1].desc}
              </p>
              <a
                href={products[1].amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-[0.12em] font-medium bg-foreground text-background transition-all duration-300 hover:opacity-90 mb-4"
              >
                Buy
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
