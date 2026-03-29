import { motion } from "framer-motion";

export default function Venue() {
  return (
    <motion.div
      className="px-4 md:px-10 py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgevents.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-30 md:gap-40">

        {/* 🚗 LEFT IMAGE */}
        <motion.img
          src="/images/locationcar.png"
          className="w-[300px] md:w-[420px]"
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          animate={{ y: [0, -10, 0] }}
        />

        {/* 📍 RIGHT CONTENT */}
        <div className="text-center md:text-left">

          <motion.h2
            className="text-3xl md:text-5xl text-white font-light tracking-[0.18em] mb-6"
            initial={{ x: 70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Venue
          </motion.h2>

          <motion.p
            className="text-white text-sm md:text-base leading-relaxed mb-8"
            initial={{ x: 70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sri Ganesh Mahal <br />
            Main Road, Ariyur <br />
            Vellore - 632055
          </motion.p>

          {/* QR */}
          <motion.img
            src="/images/locationqr.jpg"
            className="w-28 md:w-36 rounded-lg shadow-lg mx-auto md:mx-0"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          />

          <p className="text-white/70 text-xs mt-2 italic">
            Scan for location
          </p>
        </div>
      </div>
    </motion.div>
  );
}