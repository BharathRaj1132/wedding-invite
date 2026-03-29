import { motion } from "framer-motion";
import { useState } from "react";

export default function EntryGate({ onEnter }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">

      {!open ? (
        <button
          onClick={handleOpen}
          className="text-white text-2xl border px-6 py-3 rounded-xl"
        >
          Open Invitation
        </button>
      ) : (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-white text-3xl"
        >
          Welcome 💛
        </motion.div>
      )}

    </div>
  );
}