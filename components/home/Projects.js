import { ChevronsDown } from "lucide-react";
import { ProjectButton } from "../projects/HomeButtons";
import { projects } from "@/data/projects";
import ShowOneByOne from "../animation/ShowOneByOne";
import HomeProject from "./HomeProject";

export default function Projects() {
  return (
    <section className="py-10">
      <div className="flex justify-between items-center gap-12">
        <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
          Projects
        </h2>

        <ProjectButton />
      </div>
      <div className="py-10 ">
        {projects?.splice(0, 4).map((project, index, array) => (
          <ShowOneByOne key={index}>
            <div className="mb-10">
              <HomeProject
                title={project.title}
                description={project.description}
                image={project.banner}
                project={project}
                direction={index % 2 === 0 ? "reverse" : ""}
              />
              <ChevronsDown
                className={`${
                  array.length - 1 <= index ? "hidden" : ""
                } h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]`}
              />
            </div>
          </ShowOneByOne>
        ))}
        {/* <HomePorject direction="reverse" /> */}

        {/* <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />

        <HomePorject />
        <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />
        <HomePorject direction="reverse" />
        <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />
        <HomePorject /> */}
      </div>
    </section>
  );
}
