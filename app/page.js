import MagicButton from "@/components/animation/MagicButton";
import HomePorject from "@/components/home/HomePorject";
import { FaLocationArrow } from "react-icons/fa";
import { ChevronsDown, ExternalLink } from "lucide-react";
import HomeBlogCard from "@/components/home/HomeBlogCard";
import { PinContainer } from "@/components/animation/3d-pin";
import { BlogButton, ProjectButton } from "@/components/projects/HomeButtons";

export default function Home() {
  return (
    <div className="px-2 sm:px-4">
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
      <section className="py-10">
        <div className="flex justify-between items-center gap-12">
          <h2 className="font-incognito text-4xl text-text-root font-semibold tracking-tight">
            Blogs
          </h2>
          <BlogButton />
        </div>
        <div className="py-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 ">
          <PinContainer
            title={"reerer"}
            links={[
              {
                title: "View",
                href: "/blogs",
                icon: <ExternalLink className="text-button w-4 h-4" />,
              },
            ]}
          >
            <HomeBlogCard />
          </PinContainer>
          <PinContainer
            title={"reerer"}
            links={[
              {
                title: "View",
                href: "/blogs",
                icon: <ExternalLink className="text-button w-4 h-4" />,
              },
            ]}
          >
            <HomeBlogCard />
          </PinContainer>
          <PinContainer
            links={[
              {
                title: "View",
                href: "/blogs",
                icon: <ExternalLink className="text-button w-4 h-4" />,
              },
            ]}
          >
            <HomeBlogCard />
          </PinContainer>
        </div>
      </section>
    </div>
  );
}
