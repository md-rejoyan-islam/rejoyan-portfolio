import { projects } from "@/data/projects";
import ShowOneByOne from "../animation/ShowOneByOne";
import { ProjectButton } from "../projects/HomeButtons";
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
            <div className="mb-12 lg:mb-0">
              <HomeProject
                title={project.title}
                description={project.description}
                image={project.banner}
                project={project}
                direction={index % 2 === 0 ? "reverse" : ""}
              />

              <div
                className={`${
                  array.length - 1 <= index ? " hidden " : "hidden lg:flex"
                } mx-auto  relative h-full  w-full  justify-center`}
              >
                {index % 2 === 1 ? (
                  <svg
                    width={600}
                    height={220}
                    viewBox="0 0 600 220"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "blue", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "purple", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <g>
                      <title>Layer 1</title>
                      <path
                        id="svg_1"
                        d="m4,216.20001c0,0 36,-193 317,-96c281,97 275,-116 275,-116.20001"
                        stroke="url(#lineGradient)"
                        fill="none"
                        strokeWidth={2}
                        strokeDasharray="5,5"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={600}
                    height={220}
                    viewBox="0 0 600 220"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "blue", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "purple", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <g>
                      <title>Layer 1</title>
                      <path
                        id="svg_1"
                        d="m3.99999,2.19999c0,0 26,199 290,111c264,-88 300,100 299.00001,99.80001"
                        stroke="url(#lineGradient)"
                        fill="none"
                        strokeWidth={2}
                        strokeDasharray="5,5"
                      />
                    </g>
                  </svg>
                )}

                {/*  */}
              </div>
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
