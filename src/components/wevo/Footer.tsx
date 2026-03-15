import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import wevoLogo from "@/assets/wevo-white.png";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} id="footer" className="relative overflow-hidden">
      {/* CTA Banner - White background */}
      <div className="border-b border-border bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 text-center"
        >
          <p className="wevo-label text-wevo-ice mb-6">Ready to taste the difference?</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-10">Experience mountain purity.</h2>
          <a href="#products" className="inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-500">
            Order Now
          </a>
        </motion.div>
      </div>


      {/* Footer bottom - Black background */}
      <div className="py-16 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <img src={wevoLogo} alt="WEVO" className="h-10 md:h-12 w-auto inline-block" /> 
              <p className="font-body text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Mountain-born premium water, sustainably sourced from the Himalayas.
              </p>
            </div>

            <div>
              <p className="wevo-label mb-6" style={{ color: "hsl(200 60% 45%)" }}>Explore</p>
              <div className="flex flex-col gap-3">
                <Link to="/#products" className="font-body text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.5)" }}>Shop</Link>
                <a href="#footer" className="font-body text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.5)" }}>Contact</a>
                <Link to="/faq" className="font-body text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.5)" }}>FAQ</Link>
              </div>
            </div>

            <div>
              <p className="wevo-label mb-6" style={{ color: "hsl(200 60% 45%)" }}>Connect</p>
              <div className="flex flex-col gap-3">
                <a href="https://www.instagram.com/wevowater/" target="_blank" rel="noopener noreferrer" className="font-body text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.5)" }}>Instagram</a>
                <a href="mailto:wevowater@gmail.com" className="font-body text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.5)" }}>Email</a>
                <a href="https://wa.me/918074496613" target="_blank" rel="noopener noreferrer" className="font-body text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.5)" }}>WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="border-t mt-14 pt-8" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <p className="font-body text-xs text-center tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
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
