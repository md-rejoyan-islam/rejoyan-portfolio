"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Move3D({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [10, -10]);
  const rotateY = useTransform(x, [-40, 40], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const xPos = e.clientX - rect.left - rect.width;
    const yPos = e.clientY - rect.top - rect.height;

    x.set(xPos / 30);
    y.set(yPos / 30);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="w-full  flex items-center justify-center  z-20  "
      style={{
        perspective:
          "calc(100vw + 100vh + 100vmin + 100vmax + 100vmin + 100vmax)",
      }}
    >
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
          perspective:
            "calc(100vw + 100vh + 100vmin + 100vmax + 100vmin + 100vmax)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-fit flex flex-col overflow-hidden   cursor-grab "
      >
        {children}
      </motion.div>
    </div>
  );
}
