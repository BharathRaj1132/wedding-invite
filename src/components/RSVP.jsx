import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <motion.div
      className="px-4 md:px-10 py-20 text-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgevents.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {/* ✅ SAME overlay as Venue */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center">

        <motion.h2
          className="text-3xl md:text-5xl text-white font-light tracking-[0.18em] mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Please Respond
        </motion.h2>

        <motion.p
          className="text-white/80 mb-10 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          "Your presence will make our day even more special 💫"
        </motion.p>

        <motion.a
          href="https://wa.me/+919003779644?text=I will attend"
          target="_blank"
          className="relative px-8 py-4 rounded-full text-white overflow-hidden"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600"></span>
          <span className="relative z-10">Confirm on WhatsApp 💬</span>
        </motion.a>

      </div>
    </motion.div>
  );
}