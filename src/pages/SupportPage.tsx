import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/wevo/Navbar";
import Footer from "@/components/wevo/Footer";

const faqs = [
  {
    question: "Where does WEVO water come from?",
    answer: "WEVO water is sourced from the Shivalik ranges and canned at Karganoo, Sirmaur, Himachal Pradesh, ensuring every drop captures the purity of the mountains.",
  },
  {
    question: "Why is it called WEVO water?",
    answer: "The name reflects the essence of our product: it is as fresh and revitalizing as a wave.",
  },
  {
    question: "What is the shelf life of WEVO water?",
    answer: "Our water stays fresh and crisp for 12 months from the date of manufacture.",
  },
  {
    question: "Why does WEVO use cans instead of bottles?",
    answer: "Cans are infinitely recyclable and provide a premium, healthiest alternative to plastic bottles, helping to protect both you and the environment.",
  },
  {
    question: "Is WEVO water alkaline?",
    answer: "Yes, WEVO water is naturally alkaline, supporting your body's pH balance and overall wellness.",
  },
  {
    question: "Is the resealable lid recyclable?",
    answer: "Yes, our commitment to sustainability extends to our packaging; the resealable lid is fully recyclable.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="wevo-section pt-32 scroll-mt-20" style={{ backgroundColor: "#e1f2fa4d" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <p className="wevo-label text-wevo-ice mb-4">Support</p>
            <h2 className="wevo-heading-lg text-foreground">Frequently Asked</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <AccordionItem
                    value={`item-${i}`}
                    className="border border-border bg-card px-6 rounded-none hover:border-wevo-ice/30 transition-colors duration-500"
                  >
                    <AccordionTrigger className="font-display text-lg md:text-xl font-normal hover:no-underline text-foreground py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-lg md:text-xl text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="w-16 h-px bg-wevo-ice/40 mx-auto mb-8" />
            <p className="wevo-body text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a href="mailto:wevowater@gmail.com" className="inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-500">
            Contact Us
          </a>
          </motion.div>
        </div>
      </section>
      <Footer hideCTA />
    </div>
  );
};

export default SupportPage;
