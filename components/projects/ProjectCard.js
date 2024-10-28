"use client";

import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="moving-car">
      <div className=" backdrop-blur-xl relative border border-project-card-border  group overflow-hidden rounded-[15px] gap-x-4 bg-project-card-background  p-4">
        <Image
          src={project?.banner}
          alt="Currencee"
          loading="lazy"
          width={200}
          height={200}
          decoding="async"
          className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-1 w-full object-cover  h-[180px]"
          style={{ color: "transparent" }}
        />
        <div className="pt-3">
          <h2 className="text-xl font-medium tracking-wide mb-1 text-text-primary ">
            {project?.name}
          </h2>
          <div className="text-sm text-text-secondary ">
            {project?.description}
          </div>
        </div>
        <div className="py-2.5">
          <ul className="flex items-center gap-x-3 gap-y-2 flex-wrap">
            {project?.techStack?.map((tech, index) => (
              <li
                className="text-nowrap text-button border bg-button-bg px-2 py-1 rounded-md text-[10px]"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolut top-3 right-3 z-10 md:hidden ">
          <ul className="flex gap-2 items-center">
            {project?.links?.map((link, index) => (
              <li key={index}>
                <a
                  href={link?.href}
                  className=" flex items-center gap-2 border border-project-card-border  hover:bg-button-bg text-button h-fit rounded-md px-2 text-sm py-1.5"
                >
                  <span>{link?.name} </span>
                  {link?.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute z-[100] bottom-0 h-fit -translate-y-1/3 mx-auto  right-0 w-3/4">
        <div className="bg-[rgba(0,255,145,0.33)]  dark:bg-[rgba(115,0,255,0.48)] aspect-square  opacity-20 w-full max-w-full  rounded-full filter blur-3xl" />
      </div>
    </div>
  );
}
