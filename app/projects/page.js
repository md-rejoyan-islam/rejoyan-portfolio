import { PinContainer } from "@/components/animation/3d-pin";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
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
      github: "",
      live: "",
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
      github: "",
      live: "",
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
      github: "",
      live: "",
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
      github: "",
      live: "",
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
      github: "",
      live: "",
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
      github: "",
      live: "",
    },
  ];

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
      <div className="pt-12 ">
        <ul className="flex items-center gap-4">
          <li>
            <Button
              size="small"
              className="text-button bg-button-bg px-2.5 text-[12px] py-1 border uppercase hover:bg-button-bg  "
            >
              All
            </Button>
          </li>
          <li>
            <Button
              size="small"
              className="text-text-secondary bg-transparent hover:bg-transparent hover:text-button px-2.5 text-[12px] py-1 border border-project-card-border uppercase"
            >
              Redux
            </Button>
          </li>
          <li>
            <Button
              size="small"
              className="text-text-secondary bg-transparent hover:bg-transparent hover:text-button px-2.5 text-[12px] py-1 border border-project-card-border uppercase"
            >
              Next.Js
            </Button>
          </li>
          <li>
            <Button
              size="small"
              className="text-text-secondary bg-transparent hover:bg-transparent hover:text-button px-2.5 text-[12px] py-1 border border-project-card-border uppercase"
            >
              Work
            </Button>
          </li>
        </ul>
      </div>
      <div className="py-6 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-x-5 gap-y-8 items-center relative">
          {projects?.map((project, index) => (
            <div key={index} className="h-full">
              <PinContainer
                title={"adeweere"}
                links={[
                  {
                    name: "Github",
                    href: project.github,
                    icon: <FaGithub className="text-button" />,
                  },
                  {
                    name: "Live",
                    href: project.live,
                    icon: <FaExternalLinkAlt className="text-button" />,
                  },
                ]}
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
