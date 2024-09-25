"use client";
import { useMotionValue, useTransform, motion } from "framer-motion";

export default function Move3D({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;

    x.set(xPos / 5);
    y.set(yPos / 5);
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
        // perspective: "2000",
      }}
    >
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-fit flex flex-col overflow-hidden   cursor-grab "
      >
        {children}
      </motion.div>
    </div>
  );
}
