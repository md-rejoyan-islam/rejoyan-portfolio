"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ShowOneByOne({ children, index }) {
  const viewRef = useRef();
  const isInView = useInView(viewRef, { once: true });
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50, scale: 0.3 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      ref={viewRef}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
