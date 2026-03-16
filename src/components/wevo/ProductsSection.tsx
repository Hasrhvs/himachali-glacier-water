import { motion } from "framer-motion";
import can330 from "@/assets/wevo-can-330ml.png";
import can500 from "@/assets/wevo-can-500ml.png";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const products = [
  {
    name: "STILL MINERAL WATER (24 CANS × 330ML)",
    desc: "Sustainable Canned water in a resealable container. Natural still mineral water with rich mineral contents.",
    image: can330,
    amazonLink: "https://www.amazon.in",
  },
  {
    name: "STILL MINERAL WATER (24 CANS × 500ML)",
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
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight uppercase"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#2e8ab8" }}
          >
            Our Products
          </h2>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent>
              {products.map((product, i) => (
                <CarouselItem key={i}>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="flex flex-col items-center text-center px-4"
                  >
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-36 sm:w-44 h-auto object-contain drop-shadow-2xl mb-6"
                      variants={itemVariants}
                    />
                    <motion.div variants={itemVariants}>
                      <h3 className="text-base sm:text-lg font-bold tracking-wide text-foreground uppercase mb-3">
                        {product.name}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-sm mx-auto">
                        {product.desc}
                      </p>
                      <a
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-[0.12em] font-medium bg-foreground text-background transition-all duration-300 hover:opacity-90"
                      >
                        Buy
                      </a>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex relative flex-row items-start justify-center gap-0">
          {/* Left product details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex-1 flex flex-col justify-center text-left pr-8 lg:pr-12 py-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl lg:text-2xl font-bold tracking-wide text-foreground uppercase mb-3">
                {products[0].name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-sm">
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
            className="flex-shrink-0 flex items-end justify-center gap-4 py-8"
          >
            <motion.img
              src={can330}
              alt="WEVO 330ml Can"
              className="w-36 lg:w-44 h-auto object-contain drop-shadow-2xl"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            />
            <motion.img
              src={can500}
              alt="WEVO 500ml Can"
              className="w-40 lg:w-48 h-auto object-contain drop-shadow-2xl"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            />
          </motion.div>

          {/* Right product details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex-1 flex flex-col justify-center text-left pl-8 lg:pl-12 py-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl lg:text-2xl font-bold tracking-wide text-foreground uppercase mb-3">
                {products[1].name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-sm">
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
