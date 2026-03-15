import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import wevoLogo from "@/assets/Wevo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "exit">("logo");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("exit"), 2000);
    const timer2 = setTimeout(() => onComplete(), 2600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{ backgroundColor: "#e7f1f9" }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-[500px] h-[500px] rounded-full bg-wevo-ice blur-[120px]"
        />

        <motion.img
          src={wevoLogo}
          alt="WEVO"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-20 md:h-28 w-auto relative z-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="wevo-label text-wevo-ice/60 mt-6 relative z-10"
        >
          Sourced From Himalayas
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
