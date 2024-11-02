"use client";

import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TextShimmer } from "../ui/TextShimmer";

export default function AnimatedButton({ title, icon }) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-md"
      as="button"
      className={`flex font-semibold items-center text-[#fff] bg-[#583cea] dark:bg-[#12133583] gap-2  ${
        icon ? "hover:gap-4  transition-all duration-300" : ""
      } `}
    >
      <TextShimmer duration={1.2}>{title}</TextShimmer>

      {icon && icon}
    </HoverBorderGradient>
  );
}
