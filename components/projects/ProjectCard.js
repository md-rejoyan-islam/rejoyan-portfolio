"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import photo from "@/app/public/images/image.png";
import { useRef } from "react";

export default function ProjectCard({ index }) {
  const viewRef = useRef();
  const isInView = useInView(viewRef, { once: true });

  return (
    <motion.div
      className="moving-card"
      key={index}
      initial={{ opacity: 0, x: 150 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      ref={viewRef}
    >
      <div className="border border-project-card-border backdrop-blur-xl relative group overflow-hidden rounded-[15px] gap-x-4 bg-project-card-background  p-4">
        <Image
          src={photo}
          alt="Currencee"
          loading="lazy"
          width={200}
          height={200}
          decoding="async"
          className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2 w-full object-fill h-[220px]"
          style={{ color: "transparent" }}
        />
        <div className="pt-3">
          <h2 className="text-xl font-medium tracking-wide mb-1 text-text-primary ">
            Currencee
          </h2>
          <div className="text-sm text-text-secondary ">
            An ecommerce store for Lavidluxe clothings. Lavidluxe is a premium
            bespoke and ready-to-wear brand that provides high-quality yet
            affordable female and male wears, hoodies and joggers co-ord sets,
            luxury handmade unisex footwear and bags.
          </div>
        </div>
        <div className="py-2.5">
          <ul className="flex items-center gap-x-3 gap-y-2 flex-wrap">
            <li className="text-nowrap text-button border bg-button-bg px-2 py-1 rounded-md text-[10px]">
              Next Js
            </li>
            <li className="text-nowrap text-button border bg-button-bg px-2 py-1 rounded-md text-[10px]">
              Tailwind CSS
            </li>
            <li className="text-nowrap text-button border bg-button-bg px-2 py-1 rounded-md text-[10px]">
              Tanstack Query
            </li>
            <li className="text-nowrap text-button border bg-button-bg px-2 py-1 rounded-md text-[10px]">
              Sanity CMS
            </li>
            <li className="text-nowrap text-button border bg-button-bg px-2 py-1 rounded-md text-[10px]">
              Paystack
            </li>
          </ul>
        </div>
        <div className="absolut top-3 right-3 z-10 md:hidden ">
          <ul className="flex gap-2 items-center">
            <li>
              <a
                href=""
                className=" flex items-center gap-2 border border-project-card-border  hover:bg-button-bg text-button h-fit rounded-md px-2 text-sm py-1.5"
              >
                <span>GitHub </span>
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href=""
                className=" flex items-center gap-2 border border-project-card-border  hover:bg-button-bg text-button h-fit rounded-md text-sm px-2 py-1.5"
              >
                <span>Preview </span>
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
