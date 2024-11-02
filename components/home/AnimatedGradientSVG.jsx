"use client";
import { motion } from "framer-motion";

const AnimatedStrokeAbove = () => {
  return (
    <svg
      width={600}
      height={220}
      viewBox="0 0 600 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="movingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="blue" />
          <stop offset="100%" stopColor="purple" />
        </linearGradient>
      </defs>
      <g>
        <title>Layer 1</title>

        {/* Original stroke */}
        <path
          d="M4,216.2 C40,-193 317,-96 275,-116.2"
          stroke="black"
          fill="none"
          strokeWidth={2}
          strokeDasharray="5,5"
        />

        {/* Animated stroke moving above */}
        <motion.path
          d="M4,216.2 C40,-193 317,-96 275,-116.2"
          stroke="url(#movingGradient)"
          fill="none"
          strokeWidth={4} // Make this thicker for visibility
          animate={{
            strokeDashoffset: [0, -1000], // Move to the left
          }}
          transition={{
            duration: 2, // Adjust duration for speed
            ease: "linear",
            loop: Infinity, // Keep looping
          }}
          strokeDasharray="1000" // This should be longer than the path length for the effect
        />
      </g>
    </svg>
  );
};

export default AnimatedStrokeAbove;
