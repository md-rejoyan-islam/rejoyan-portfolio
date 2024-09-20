"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import photo from "@/app/public/images/cardimage.png";
import { useRef } from "react";

export default function BlogCard({ index }) {
  const viewRef = useRef();
  const isInView = useInView(viewRef, { once: true });
  return (
    <motion.div
      className="w-full p-4 sm:p-6  border  rounded-[20px] border-project-card-border bg-project-card-background backdrop-blur-3xl "
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
      <article key={index}>
        <a
          className="flex lg:flex-row flex-col lg:items-center items-start gap-8    group"
          href="/blog/run-localhost-on-mobile-device-using-ngrok"
        >
          <div className="relative lg:max-w-[450px] lg:h-52 w-full h-56 overflow-clip">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                inset: 0,
              }}
            >
              <Image
                alt="How to run Localhost on your Mobile Device using Ngrok"
                sizes="100vw"
                src={photo}
                decoding="async"
                data-nimg="fill"
                className="dark:bg-zinc-800 bg-zinc-100 w-full rounded-md object-cover group-hover:scale-125 duration-300"
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
              <noscript />
            </span>
          </div>
          <div className="text-left">
            <div className="relative overflow-hidden inline-block mb-4 ">
              <h2 className="relative z-10 transition duration-200 ease-in-out text-2xl font-incognito font-semibold tracking-tight ">
                How to run Localhost on your Mobile Device using Ngrok
              </h2>
              <div className="absolute inset-0 bg-text-root dark:bg-button transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></div>
            </div>

            <p className=" text-text-secondary text-[0.95rem]">
              Learn how to run and test your web applications changes without
              deploying using Ngrok—a globally distributed reverse proxy that
              creates secure tunnels to your web app
            </p>
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
          </div>
        </a>
      </article>
    </motion.div>
  );
}
