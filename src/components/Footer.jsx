import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const weddingDate = new Date("2026-08-30T00:00:00");

  const [timeLeft, setTimeLeft] = useState(getTime());

  function getTime() {
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0);
    const minutes = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0);
    const seconds = Math.max(Math.floor((diff / 1000) % 60), 0);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="px-4 md:px-10 py-16 text-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgevents.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* 💫 Countdown */}
        <motion.div
          className="flex gap-4 mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {Object.entries(timeLeft).map(([label, value], i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-light tracking-widest">
                {String(value).padStart(2, "0")}
              </div>
              <div className="text-xs text-white/70 uppercase tracking-widest mt-1">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ✨ quote */}
        <motion.p
          className="text-white/80 italic mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          "Two souls, one journey, a lifetime begins…"
        </motion.p>

        {/* ❤️ main */}
        <motion.h3
          className="text-xl md:text-2xl text-white font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Made with ❤️ for our wedding
        </motion.h3>

        {/* divider */}
        <div className="w-16 h-[1px] bg-white/40 my-4"></div>

        {/* names */}
        <p className="text-white/70 text-sm tracking-widest">
          Jaga ❤️ Priya
        </p>

        <p className="text-white/50 text-xs mt-2 italic">
          Thank you for being part of our story
        </p>

      </div>
    </motion.div>
  );
}