import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import wevoLogo from "@/assets/Wevo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 50));
  }, [scrollY]);

  const links = [
    { label: "Shop", href: "#products" },
    { label: "Contact", href: "/support" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20">
        <Link to="/" className="flex items-center">
          <img src={wevoLogo} alt="WEVO" className="h-8 md:h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => {
            const isRoute = link.href.startsWith("/");
            const Component = isRoute ? Link : "a";
            const props = isRoute ? { to: link.href } : { href: link.href };
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Component
                  {...(props as any)}
                  className="wevo-label text-muted-foreground hover:text-foreground transition-colors duration-300 story-link flex items-center gap-2"
                >
                  <span>{link.label}</span>
                </Component>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link, i) => {
                const isRoute = link.href.startsWith("/");
                const Component = isRoute ? Link : "a";
                const props = isRoute ? { to: link.href } : { href: link.href };
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Component
                      {...(props as any)}
                      onClick={() => setIsOpen(false)}
                      className="wevo-label text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      {link.label}
                    </Component>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
