import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"letters" | "logo" | "exit">("letters");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("logo"), 1800);
    const timer2 = setTimeout(() => setPhase("exit"), 3200);
    const timer3 = setTimeout(() => onComplete(), 3800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const letters = [
    { char: "W ", delay: 0, font: "'Times New Roman', Times, serif" },
    { char: "E ", delay: 0.15, font: "'Times New Roman', Times, serif" },
    { char: "V ", delay: 0.3, font: "'Times New Roman', Times, serif" },
  ];

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
        {/* Radial glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ backgroundColor: "hsl(200 60% 45%)" }}
        />

        {/* Water ripple rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.5 + i * 0.4,
              ease: "easeOut",
              repeat: 0,
            }}
            className="absolute w-32 h-32 rounded-full border"
            style={{ borderColor: "hsl(200 60% 45% / 0.3)" }}
          />
        ))}

        {/* Logo: W E V + O (favicon) */}
        <div className="relative z-10 flex items-center gap-1">
          {letters.map((l) => (
            <motion.span
              key={l.char}
              initial={{ opacity: 0, y: 40, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: l.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl md:text-7xl font-normal tracking-tight"
              style={{
                fontFamily: l.font,
                color: "hsl(0 0% 5%)",
              }}
            >
              {l.char}
            </motion.span>
          ))}

          {/* O as favicon */}
          <motion.img
            src="/favicon.png"
            alt="O"
            initial={{ opacity: 0, y: 40, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: phase === "letters" || phase === "logo" ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="wevo-label mt-6 relative z-10"
          style={{ color: "hsl(200 60% 45% / 0.6)" }}
        >
          Sourced From Himalayas
        </motion.p>

        {/* Water drop animation */}
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.2, delay: 1.4, ease: "easeIn" }}
          className="absolute bottom-1/3 z-10"
        >
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
            <path
              d="M6 0C6 0 0 8 0 12C0 15.3 2.7 18 6 18C9.3 18 12 15.3 12 12C12 8 6 0 6 0Z"
              fill="hsl(200 60% 45% / 0.4)"
            />
          </svg>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
