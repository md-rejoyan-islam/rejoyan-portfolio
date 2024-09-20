"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import photo from "@/app/public/images/image.png";
import { useRef } from "react";
import { ExternalLinkIcon } from "lucide-react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function HomeBlogCard({ index }) {
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
          <h2 className="text-xl font-medium tracking-wide mb-1">Currencee</h2>
          <div className="text-sm dark:text-zinc-400 text-zinc-600">
            An ecommerce store for Lavidluxe clothings. Lavidluxe is a premium
            bespoke and ready-to-wear brand that provides high-quality yet
            affordable female and male wears, hoodies and joggers co-ord sets,
            luxury handmade unisex footwear and bags.
          </div>
        </div>
        <div className="flex items-center gap-x-4 mt-3 text-sm">
          <div className="flex items-center gap-x-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <time dateTime="2024-08-06T14:41:28.047Z">Aug 6, 2024</time>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z" />
            </svg>
            <div className="">4 min</div>
          </div>
        </div>
        <ul className="flex gap-2 items-center md:flex-col pt-4 md:hidden">
          <li>
            <a
              href=""
              className=" flex items-center gap-2 border-button-bg  text-button hover:bg-button-bg h-fit  rounded-md px-2 py-1 text-sm border "
            >
              <span>View</span>
              <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
