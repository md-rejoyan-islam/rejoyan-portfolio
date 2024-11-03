"use client";

import { FaUserNinja } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

import { motion, stagger, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { FlipWords } from "../ui/flip-words";
import { IconCloud } from "../ui/IconCloud";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TimelineContent } from "../ui/TimeLineContent";
import TextShimmerButton from "./TextShimmerButton";

export default function Banner() {
  const words = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.Js Expert",
  ];

  const paraWords = `I'm a full stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on creating accessible, user-centered products that make a difference.`;

  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 5.5 });

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  const bannerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: staggerList,
      }
    );
  }, [staggerList, animate]);

  return (
    <div
      className=" my-0 sm:my-2 lg:my-16 px-0 grid grid-cols-1 lg:grid-cols-3 overflow-hidden"
      ref={bannerRef}
    >
      <TimelineContent
        animationNum={1}
        timelineRef={bannerRef}
        x={-40}
        style={"lg:col-span-2 order-2 lg:order-1"}
      >
        <div className=" ">
          <motion.h2
            className="text-text-primary text-3xl font-semibold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Hi, I&apos;m{" "}
          </motion.h2>
          <motion.h2
            className="  text-[35px] sm:text-[45px] md:text-[55px] lg:text-[60px] font-semibold "
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <span className="bg-clip-text  text-transparent bg-gradient-to-r  to-[#1cc8ff]   from-[#583cea] ">
              Md. Rejoyan Islam
            </span>{" "}
            <br />
          </motion.h2>

          {/* type data  */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FlipWords
              words={words}
              className={
                "bg-clip-text inline-block overflow-hidden text-wrap text-[2em] sm:text-[3em] text-text-secondary font-medium"
              }
            />
          </motion.div>

          <motion.h2
            className="  text-[2em] sm:text-[3em] font-semibold "
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <span className="text-text-secondary">
              I build things for the web.
            </span>
          </motion.h2>

          <motion.div
            className="lg:w-2/3 pt-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <TextGenerateEffect
              words={paraWords}
              className={"text-[#666687] text-[17px] sm:text-lg"}
              duration={0.01}
            />
          </motion.div>

          <ul
            className="resume flex gap-4 items-center pt-8 pb-4"
            // initial={{ opacity: 0, x: -30 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5, delay: 5.5 }}
            ref={scope}
          >
            <motion.li style={{ opacity: 0, scale: 0.3, x: -50 }}>
              <div
                onClick={() => {
                  router.push("/contact");
                }}
              >
                <TextShimmerButton
                  duration={1.2}
                  title={"Contact me"}
                  icon={true}
                  width={"w-[160px] hover:gap-4"}
                >
                  <span className="group-hover:animate-pulse">
                    <FaUserNinja />
                  </span>
                </TextShimmerButton>
              </div>
            </motion.li>
            <motion.li style={{ opacity: 0, scale: 0.3, x: -50 }}>
              <div
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/RESUME.pdf";
                  link.download = "rejoyan_resume.pdf";
                  link.click();
                }}
              >
                <TextShimmerButton
                  duration={1.2}
                  title={"Get Resume"}
                  icon={true}
                >
                  <span className=" group-hover:animate-bounce">
                    <MdFileDownload />
                  </span>
                </TextShimmerButton>
              </div>
            </motion.li>
          </ul>
        </div>
      </TimelineContent>
      <TimelineContent
        animationNum={0}
        timelineRef={bannerRef}
        x={60}
        style={"w-full lg:w-full  lg:col-span-1 order-1 lg:order-2 relative"}
      >
        <div className=" ">
          <div className="lg:absolute top-0 bottom-0 my-auto flex flex-col justify-center -left-40 overflow-hidden">
            <div className="relative flex size-full items-center justify-center overflow-hidden p-4  sm:p-10 ">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </TimelineContent>
    </div>
  );
}
