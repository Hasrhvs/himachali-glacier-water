import { forwardRef } from "react";
import { motion } from "framer-motion";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-wevo-navy relative overflow-hidden">
      {/* CTA Banner */}
      <div className="border-b border-wevo-stone/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 text-center"
        >
          <p className="wevo-label text-wevo-ice mb-6">Ready to taste the difference?</p>
          <h2 className="wevo-heading-lg text-wevo-snow mb-10">Experience mountain purity.</h2>
          <a href="#products" className="inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium font-body border border-wevo-glacier/30 text-wevo-snow hover:bg-wevo-snow hover:text-wevo-navy transition-all duration-500">
            Order Now
          </a>
        </motion.div>
      </div>

      <div className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <h3 className="font-display text-3xl font-semibold text-wevo-snow mb-4 tracking-[0.1em]">WEVO</h3>
              <p className="font-body text-sm text-wevo-glacier/50 max-w-xs leading-relaxed">
                Mountain-born luxury water, sustainably sourced from the Himalayas.
              </p>
            </div>

            <div>
              <p className="wevo-label text-wevo-ice mb-6">Explore</p>
              <div className="flex flex-col gap-3">
                {["Origin", "Products", "Minerals", "Why WEVO", "FAQ"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="font-body text-sm text-wevo-glacier/50 hover:text-wevo-snow transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="wevo-label text-wevo-ice mb-6">Connect</p>
              <div className="flex flex-col gap-3">
                <a href="#" className="font-body text-sm text-wevo-glacier/50 hover:text-wevo-snow transition-colors duration-300">
                  Instagram
                </a>
                <a href="#" className="font-body text-sm text-wevo-glacier/50 hover:text-wevo-snow transition-colors duration-300">
                  Twitter
                </a>
                <a href="mailto:hello@wevo.in" className="font-body text-sm text-wevo-glacier/50 hover:text-wevo-snow transition-colors duration-300">
                  hello@wevo.in
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-wevo-stone/15 mt-14 pt-8">
            <p className="font-body text-xs text-wevo-glacier/30 text-center tracking-wider">
              © 2026 WEVO. All rights reserved. Mountain-born, naturally pure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
