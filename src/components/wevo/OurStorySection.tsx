import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mountain, Droplets, FlaskConical, Truck, Award } from "lucide-react";

const timeline = [
  {
    year: "Origin",
    icon: Mountain,
    title: "The Discovery",
    description:
      "Deep in the Shivalik ranges of Himachal Pradesh, our founders discovered a pristine aquifer fed by ancient glacial melt — untouched for millennia.",
  },
  {
    year: "Source",
    icon: Droplets,
    title: "Natural Filtration",
    description:
      "Water journeys through layers of Himalayan rock for thousands of years, absorbing essential minerals — calcium and magnesium — in perfect balance.",
  },
  {
    year: "Science",
    icon: FlaskConical,
    title: "Purity Verified",
    description:
      "Every batch is lab-tested to ensure optimal TDS (256), alkaline pH (7.1–7.9), and zero contaminants. Nature does the work; we verify the results.",
  },
  {
    year: "Journey",
    icon: Truck,
    title: "From Peaks to You",
    description:
      "Canned at the source in Himachal Pradesh and delivered fresh — preserving the crisp, clean taste that only mountain water can offer.",
  },
  {
    year: "Mission",
    icon: Award,
    title: "Sustainable Future",
    description:
      "We're committed to protecting the Himalayan ecosystem. Recyclable aluminium cans, carbon-offset logistics, and community water programs define our path forward.",
  },
];

const OurStorySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="wevo-section bg-background relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-24"
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight uppercase"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#2e8ab8" }}
          >
            Our Story
          </h2>
          <p className="font-body text-lg md:text-2xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            A journey thousands of years in the making — rooted in nature, guided by purpose.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 w-px bg-wevo-ice/60 -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-20 md:gap-28">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      isLeft ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                    }`}
                  >
                    <p className="wevo-label text-wevo-ice mb-3">{item.year}</p>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-full border border-border bg-background flex items-center justify-center shadow-lg shadow-wevo-ice/5 hover:border-wevo-ice/50 hover:shadow-wevo-ice/15 transition-all duration-500"
                    >
                      <item.icon
                        className="w-6 h-6 text-wevo-ice"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom quote - no horizontal line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-28"
        >
          <p className="font-body text-2xl md:text-3xl text-muted-foreground italic font-display md:whitespace-nowrap">
            "We don't just can water — we preserve a piece of the Himalayas in every drop."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
