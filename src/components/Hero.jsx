import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MusicPlayer from "./MusicPlayer";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ✅ Detect mobile
  const isMobile = window.innerWidth < 768;

  // ✅ KEY FIX: compress animation range for mobile
  const templeY = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.6] : [0, 1],   // 🔥 mobile finishes faster
    isMobile ? [400, -150] : [600, -200]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.08, 0.18] : [0, 0.1, 0.25],
    [1, 0.8, 0]
  );

  const textY = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.18] : [0, 0.25],
    [0, -60]
  );

  return (
    <div
      ref={ref}
      className="relative h-[180vh] md:h-[220vh] overflow-hidden"
      // slight mobile reduction only
    >
      <MusicPlayer />
      {/* Background */}
      <img
        src="/images/Herobg.jpg"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/40"></div>

      {/* Flowers */}
      <motion.img
        src="/images/flower.png"
        className="absolute left-6 top-20 w-32 opacity-90 blur-[1.5px]"
        animate={{ y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <motion.img
        src="/images/flower.png"
        className="absolute right-6 top-32 w-32 opacity-90 blur-[1.5px]"
        animate={{ y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <motion.img
        src="/images/flower.png"
        className="absolute left-10 top-[300px] w-36 opacity-85 blur-[1.5px]"
        animate={{ y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <motion.img
        src="/images/flower.png"
        className="absolute right-10 top-[420px] w-36 opacity-85 blur-[1.5px]"
        animate={{ y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* Temple */}
      <motion.img
        src="/images/temple.png"
        style={{ y: templeY }}
        className="absolute bottom-0 left-0 w-full z-10"
      />

      {/* TEXT */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute top-24 left-0 w-full flex flex-col items-center text-white text-center px-4 z-30"
      >
        <h1 className="text-5xl md:text-7xl font-serif drop-shadow-lg">
          Jaga ❤️ Priya
        </h1>

        <p className="mt-3 text-xl drop-shadow-md">
          We are getting married
        </p>
      </motion.div>

    </div>
  );
}