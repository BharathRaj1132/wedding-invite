import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Gallery() {
  const images = [
    { src: "/images/couple5.jpg", text: "The beginning 💫" },
    { src: "/images/couple1.jpg", text: "Smiles & chaos 😄" },
    { src: "/images/couple2.jpg", text: "Forever vibes ❤️" },
    { src: "/images/couple3.jpg", text: "Little memories ✨" },
    { src: "/images/couple4.jpg", text: "Us always 💍" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="px-4 md:px-10 py-20 text-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgevents.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* lighter overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* heading */}
        <motion.h2
          className="text-3xl md:text-5xl mb-4 text-white font-extralight tracking-[0.2em]"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Moments
        </motion.h2>

        {/* quote */}
        <motion.p
          className="text-white/80 text-sm md:text-base mb-10 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          "Every picture tells our story…"
        </motion.p>

        {/* image slider */}
        <div className="relative w-[300px] md:w-[380px] h-[420px] overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index].src}
              alt="gallery"
              className="absolute w-full h-full object-cover rounded-3xl"
              initial={{ opacity: 0, scale: 1.1, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -60 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
            />
          </AnimatePresence>

          {/* caption */}
          <motion.div
            key={images[index].text}
            className="absolute bottom-4 left-0 right-0 text-white text-sm tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {images[index].text}
          </motion.div>
        </div>

        {/* counter */}
        <div className="text-white/70 mt-4 text-sm tracking-widest">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* dots */}
        <div className="flex gap-2 mt-4">
          {images.map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
              animate={{ scale: i === index ? 1.4 : 1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}