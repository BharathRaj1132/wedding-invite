import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Events() {
  const data = ["Mehendi", "Haldi", "Reception"];
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftLeafY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rightLeafY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.div
      ref={ref}
      className="w-full py-10 text-center relative overflow-hidden -mb-[2px]" 
      // 🔥 negative margin removes gap
      style={{
        backgroundImage: "url('/images/bgevents.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* extra layer to avoid line */}
      <div className="absolute inset-0 scale-[1.01]"></div>

      {/* 🌿 Left Leaf */}
      <motion.img
        src="/images/leaves.png"
        style={{ y: leftLeafY }}
        className="absolute top-0 left-0 w-32 md:w-44 opacity-90"
        initial={{ x: -80, y: -80, rotate: -25, opacity: 0 }}
        animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 🌿 Right Leaf */}
      <motion.img
        src="/images/leaves.png"
        style={{ y: rightLeafY }}
        className="absolute top-0 right-0 w-32 md:w-44 opacity-90 scale-x-[-1]"
        initial={{ x: 80, y: -80, rotate: 25, opacity: 0 }}
        animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          <img src="/images/ganapathi.png" className="w-20 md:w-24 mb-3" />
          <p className="text-white text-sm md:text-base italic leading-relaxed">
            With the heavenly blessings of <br />
            <span className="font-semibold text-amber-200">
              Mr.Bharath Raj S & Mrs.Bharath Raj S
            </span>
          </p>
        </motion.div>

        <h2 className="text-3xl mb-8 text-white font-serif tracking-wide">
          Wedding Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="w-full aspect-[4/5] max-w-[220px] mx-auto rounded-xl shadow-xl text-white relative overflow-hidden"
            >
              <img
                src="/images/eventcardbg.jpg"
                className="absolute inset-0 w-full h-full object-contain bg-black"
              />
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center text-sm">
                <h3 className="text-lg font-serif mb-1">{event}</h3>
                <p className="italic">March 12, 2026</p>
                <p className="italic">6:00 PM</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}