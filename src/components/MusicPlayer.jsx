import { useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const soundRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/music/song.mp3"],
      loop: true,
      volume: 0.5,
    });

    return () => soundRef.current.unload();
  }, []);

  const toggleMusic = () => {
    if (!playing) {
      soundRef.current.play();
      setPlaying(true);
    } else {
      soundRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={toggleMusic}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl overflow-hidden"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {/* gradient bg */}
        <span className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500"></span>

        {/* ripple animation */}
        {playing && (
          <motion.span
            className="absolute w-full h-full rounded-full border-2 border-white/40"
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        )}

        {/* icon */}
        <motion.span
          key={playing ? "pause" : "play"}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 text-lg"
        >
          {playing ? "⏸" : "▶"}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}