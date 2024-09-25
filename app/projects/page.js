"use client";
import { PinContainer } from "@/components/animation/3d-pin";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { stagger, useAnimate, motion } from "framer-motion";
import { useEffect } from "react";
export default function Projects() {
  const filters = [
    {
      name: "All",
    },
    {
      name: "Redux",
    },
    {
      name: "Next.Js",
    },
    {
      name: "Work",
    },
  ];

  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0.6 });

  const [scopeRef, projectAnimate] = useAnimate();
  const projectStaggerList = stagger(0.2, { startDelay: 1.3 });

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

  useEffect(() => {
    projectAnimate(
      "section",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: projectStaggerList,
      }
    );
  }, [projectStaggerList, projectAnimate]);

  return (
    <div className="pt-10 pb-12">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center  text-text-root font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-5 sm:mb-6 lg:leading-[3.7rem]"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl text-center mx-auto text-[17px] sm:text-xl  text-text-primary leading-relaxed"
        >
          Over the years, I&apos;ve worked on a variety of projects that reflect
          my passion for web development. Here are some of the ones I&apos;m
          most proud of. Many of these are open-source, so feel free to explore
          the code, and if something sparks your interest, you&apos;re welcome
          to contribute or suggest improvements.
        </motion.p>
      </div>
      <div className="py-11 ">
        <ul className="flex items-center gap-4" ref={scope}>
          {filters?.map((item, index) => (
            <motion.li key={index} style={{ opacity: 0, scale: 0.3, x: -50 }}>
              <Button
                size="small"
                className={` px-2.5 text-[12px] py-1 border uppercase hover:bg-button-bg ${
                  index === 0
                    ? "text-button bg-button-bg"
                    : "text-text-secondary bg-transparent hover:bg-transparent hover:text-button"
                } `}
              >
                {item?.name}
              </Button>
            </motion.li>
          ))}
        </ul>
      </div>
      <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 1.4 }}
      >
        <motion.section
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-16 items-center relative"
          ref={scopeRef}
          transition={{ delay: 1.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {projects?.map((project, index) => (
            <motion.section
              key={index}
              className="h-full"
              style={{ opacity: 0, scale: 0.3, x: -50 }}
            >
              <PinContainer
                title={"adeweere"}
                project={project}
                links={project?.links}
              >
                <ProjectCard project={project} index={index} />
              </PinContainer>
            </motion.section>
          ))}
        </motion.section>
      </div>
    </div>
  );
}
