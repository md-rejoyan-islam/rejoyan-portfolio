"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function MovingBorder({
  borderRadius = "20px",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  width = 20,
  height = 20,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "bg-transparent w-fit relative text-xl p-[1px] overflow-hidden md:col-span-2",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{
          borderRadius: borderRadius,
        }}
      >
        <MovingButton duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              `opacity-[0.8] z-10 bg-[radial-gradient(var(--moving-border)_40%,transparent_60%)]`,
              borderClassName
            )}
          />
        </MovingButton>
      </div>

      <div
        className={cn(
          "relative   backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: borderRadius,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingButton = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 3,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
