import { motion } from "framer-motion";
import ring330 from "@/assets/24_cans_330ml_Ringpull_Lids.png.asset.json";
import reseal330 from "@/assets/24_cans_330ml_Resealable_Lids.png.asset.json";
import reseal500 from "@/assets/24_cans_500ml_Resealable_Lids.png.asset.json";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const products = [
  {
    name: "Still Water (24 Cans × 330ml) Ringpull Lids",
    desc: "Sustainable canned water with a ringpull lid. Natural still mineral water with rich mineral contents.",
    image: ring330.url,
    scale: 1,
    mobileScale: 1,
    mobileH: "h-64",
    dy: "0%",
    amazonLink:
      "https://www.amazon.in/gp/product/B0HLZ5SSLY/ref=cx_skuctr_share_ls_srb?smid=A31GAQCMBR62OQ&tag=ShopReferral_fdca4e7c-c09a-42a5-9db8-796a45b01685",
  },
  {
    name: "Still Water (24 Cans × 330ml) Resealable Lid",
    desc: "Sustainable canned water in a resealable container. Natural still mineral water with rich mineral contents.",
    image: reseal330.url,
    scale: 1,
    mobileScale: 1,
    mobileH: "h-64",
    dy: "0%",
    amazonLink:
      "https://www.amazon.in/gp/product/B0HLYZRMZR/ref=cx_skuctr_share_ls_srb?smid=A31GAQCMBR62OQ&tag=ShopReferral_3b852625-e6fd-43b2-a1b5-fd3224c3aa04&th=1",
  },
  {
    name: "Still Water (24 Cans × 500ml) Resealable Lids",
    desc: "Sustainable canned water in a resealable container. Natural still mineral water with rich mineral contents.",
    image: reseal500.url,
    scale: 1.45,
    mobileScale: 1.25,
    mobileH: "h-72",
    dy: "17%",
    amazonLink:
      "https://www.amazon.in/gp/product/B0HLZ7C6VW/ref=cx_skuctr_share_ls_srb?smid=A31GAQCMBR62OQ&tag=ShopReferral_61623416-054c-4476-b0b1-b2450343a605&th=1",
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

        {/* Mobile: swipeable carousel, one product at a time, image above details */}
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
                    <div
                      className="mb-6"
                      style={{ transform: `scale(${product.mobileScale})`, transformOrigin: "bottom center" }}
                    >
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className={`${product.mobileH} w-auto object-contain`}
                        variants={itemVariants}
                      />
                    </div>
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

        {/* Desktop: three product cards, image on top with details below */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden md:grid grid-cols-3 gap-8 lg:gap-12 items-stretch"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-72 lg:h-80 items-end justify-center mb-8">
                <div
                  className="flex h-full w-auto items-end justify-center"
                  style={{ transform: `translateY(${product.dy}) scale(${product.scale})`, transformOrigin: "bottom center" }}
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  />
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-bold tracking-wide text-foreground uppercase mb-3">
                {product.name}
              </h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xs mx-auto">
                {product.desc}
              </p>
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-[0.12em] font-medium bg-foreground text-background transition-all duration-300 hover:opacity-90"
              >
                Buy
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
