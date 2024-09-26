"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";

export const StickyNav = ({ className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() === 1) {
        return setVisible(true);
      }
      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div className="h-[70px]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          ` ${
            visible
              ? " shadow-[0_10px_30px_-10px_var(--navbar-shadow)]"
              : "shadow-none"
          } w-full  fixed   backdrop-blur-lg  inset-x-0 mx-auto  z-[500]   items-center justify-center`,
          className
        )}
      >
        <Navbar />
      </motion.div>
    </div>
  );
};
