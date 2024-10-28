"use client";

import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function AnimatedButton({ title, icon }) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className={`flex items-center bg-[#12133583] gap-2  ${
        icon ? "hover:gap-4  transition-all duration-300" : ""
      } `}
    >
      <span>{title}</span>
      {icon && icon}
    </HoverBorderGradient>
  );
}
