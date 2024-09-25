"use client";
import { PinContainer } from "@/components/animation/3d-pin";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { stagger, useAnimate, motion } from "framer-motion";
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectss = [
    {
      name: "Currencee",
      description:
        "An ecommerce store for Lavidluxe clothings. Lavidluxe is a premium bespoke and ready-to-wear brand that provides high-quality yet affordable clothing.",
      techStack: [
        "Next Js",
        "Tailwind CSS",
        "Tanstack Query",
        "Sanity CMS",
        "Paystack",
      ],
      links: [
        {
          name: "Github",
          href: "",
          icon: <FaGithub className="text-button" />,
        },
        {
          name: "Live",
          href: "",
          icon: <FaExternalLinkAlt className="text-button" />,
        },
      ],
    },
    {
      name: "Currencee",
      description:
        "An ecommerce store for Lavidluxe clothings. Lavidluxe is a premium bespoke and ready-to-wear brand that provides high-quality yet affordable clothing.",
      techStack: [
        "Next Js",
        "Tailwind CSS",
        "Tanstack Query",
        "Sanity CMS",
        "Paystack",
      ],
      links: [
        {
          name: "Github",
          href: "",
          icon: <FaGithub className="text-button" />,
        },
        {
          name: "Live",
          href: "",
          icon: <FaExternalLinkAlt className="text-button" />,
        },
      ],
    },
    {
      name: "Currencee",
      description:
        "An ecommerce store for Lavidluxe clothings. Lavidluxe is a premium bespoke and ready-to-wear brand that provides high-quality yet affordable clothing.",
      techStack: [
        "Next Js",
        "Tailwind CSS",
        "Tanstack Query",
        "Sanity CMS",
        "Paystack",
      ],
      links: [
        {
          name: "Github",
          href: "",
          icon: <FaGithub className="text-button" />,
        },
        {
          name: "Live",
          href: "",
          icon: <FaExternalLinkAlt className="text-button" />,
        },
      ],
    },
    {
      name: "Currencee",
      description:
        "An ecommerce store for Lavidluxe clothings. Lavidluxe is a premium bespoke and ready-to-wear brand that provides high-quality yet affordable clothing.",
      techStack: [
        "Next Js",
        "Tailwind CSS",
        "Tanstack Query",
        "Sanity CMS",
        "Paystack",
      ],
      links: [
        {
          name: "Github",
          href: "",
          icon: <FaGithub className="text-button" />,
        },
        {
          name: "Live",
          href: "",
          icon: <FaExternalLinkAlt className="text-button" />,
        },
      ],
    },
    {
      name: "Currencee",
      description:
        "An ecommerce store for Lavidluxe clothings. Lavidluxe is a premium bespoke and ready-to-wear brand that provides high-quality yet affordable clothing.",
      techStack: [
        "Next Js",
        "Tailwind CSS",
        "Tanstack Query",
        "Sanity CMS",
        "Paystack",
      ],
      links: [
        {
          name: "Github",
          href: "",
          icon: <FaGithub className="text-button" />,
        },
        {
          name: "Live",
          href: "",
          icon: <FaExternalLinkAlt className="text-button" />,
        },
      ],
    },
    {
      name: "Currencee",
      description:
        "An ecommerce store for Lavidluxe clothings. Lavidluxe is a premium bespoke and ready-to-wear brand that provides high-quality yet affordable clothing.",
      techStack: [
        "Next Js",
        "Tailwind CSS",
        "Tanstack Query",
        "Sanity CMS",
        "Paystack",
      ],
      links: [
        {
          name: "Github",
          href: "",
          icon: <FaGithub className="text-button" />,
        },
        {
          name: "Live",
          href: "",
          icon: <FaExternalLinkAlt className="text-button" />,
        },
      ],
    },
  ];

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
  const staggerList = stagger(0.1, { startDelay: 0 });

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
    <div className="pt-10 pb-12">
      <div>
        <h1 className="text-center  text-text-root font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-5 sm:mb-6 lg:leading-[3.7rem]">
          Projects
        </h1>
        <p className="max-w-4xl text-center mx-auto text-[17px] sm:text-xl  text-text-primary leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas on how it can be
          improved.
        </p>
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
      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-16 items-center relative">
          {projects?.map((project, index) => (
            <div key={index} className="h-full">
              <PinContainer
                title={"adeweere"}
                project={project}
                links={project?.links}
              >
                <ProjectCard project={project} index={index} />
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
