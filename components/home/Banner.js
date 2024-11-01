"use client";

import { FaUserNinja } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { FlipWords } from "../ui/flip-words";
import { IconCloud } from "../ui/IconCloud";
import { TextGenerateEffect } from "../ui/text-generate-effect";

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
    <div className=" my-16 px-0 grid grid-cols-1 lg:grid-cols-3">
      <div className=" lg:col-span-2 order-2 lg:order-1">
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r  to-[#1cc8ff]   from-[#583cea] ">
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
              "bg-clip-text inline-block overflow-hidden text-wrap text-[3em] text-transparent bg-gradient-to-r from-[#4d1cb8] via-[#12e435] to-[#b72a77]"
            }
          />
        </motion.div>

        <motion.h2
          className="  text-[3em] font-semibold "
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
            className={"text-[#8892b0] text-[17px] sm:text-lg"}
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
            <AnimatedButton
              title={"Contact me"}
              icon={<FaUserNinja />}
            ></AnimatedButton>
          </motion.li>
          <motion.li style={{ opacity: 0, scale: 0.3, x: -50 }}>
            <AnimatedButton
              title={"Get Resume"}
              icon={<MdFileDownload />}
            ></AnimatedButton>
          </motion.li>
        </ul>
      </div>

      <div className=" w-0 lg:w-full  lg:col-span-1 order-1 lg:order-2 relative">
        <div className="lg:absolute top-0 bottom-0 my-auto flex flex-col justify-center -left-40 overflow-hidden">
          <div className="relative flex size-full items-center justify-center overflow-hidden  p-10 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </div>
  );
}
