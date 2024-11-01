"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";

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
            visible ? " " : "shadow-none"
          } w-full  fixed  border-b border-[#e9e8e8] dark:border-[#121b3d] bg-transparent  backdrop-blur-lg  inset-x-0 mx-auto  z-[500]   items-center justify-center`,
          className
        )}
      >
        <Navbar />
      </motion.div>
    </div>
  );
};
