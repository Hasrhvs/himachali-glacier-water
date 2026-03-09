import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where is WEVO water sourced from?",
    answer: "WEVO water is sourced from ancient glacial aquifers deep within the Himachal Pradesh mountains, where thousands of years of natural filtration through rock and ice create mineral-perfect water.",
  },
  {
    question: "What makes WEVO different from regular bottled water?",
    answer: "WEVO undergoes natural filtration through Himalayan rock formations, resulting in an optimal mineral balance, alkaline pH, and micro-clustered water molecules that your body absorbs more efficiently.",
  },
  {
    question: "Is WEVO water alkaline?",
    answer: "Yes, WEVO water has a pH of 7.1–7.9, making it naturally alkaline. This supports overall health, digestion, and helps neutralize acidity in your body.",
  },
  {
    question: "Where can I buy WEVO water?",
    answer: "WEVO water is available for delivery to your door. Contact us to place an order or find a retailer near you.",
  },
  {
    question: "Is WEVO packaging sustainable?",
    answer: "We are committed to sustainability. Our bottles are designed with minimal environmental impact in mind, and we continuously work to reduce our carbon footprint across our entire supply chain.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="wevo-section bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="wevo-label text-muted-foreground mb-4">Support</p>
          <h2 className="wevo-heading-lg text-foreground">Frequently Asked</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border bg-card px-6 rounded-none"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl font-normal hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="wevo-body text-muted-foreground text-sm pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
