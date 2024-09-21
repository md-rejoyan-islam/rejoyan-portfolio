import { ChevronsDown } from "lucide-react";
import { ProjectButton } from "../projects/HomeButtons";
import HomePorject from "./HomePorject";

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
        <HomePorject direction="reverse" />

        <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />

        <HomePorject />
        <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />
        <HomePorject direction="reverse" />
        <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />
        <HomePorject />
      </div>
    </section>
  );
}
