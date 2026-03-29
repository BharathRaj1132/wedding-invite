import { motion } from "framer-motion";

export default function Footer() {
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
      {/* ✅ SAME overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center">

        <motion.p
          className="text-white/80 italic mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          "Two souls, one journey, a lifetime begins…"
        </motion.p>

        <motion.h3
          className="text-xl md:text-2xl text-white font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Made with ❤️ for our wedding
        </motion.h3>

        <div className="w-16 h-[1px] bg-white/40 my-4"></div>

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