import { ExternalLink } from "lucide-react";
import { PinContainer } from "../animation/3d-pin";
import { BlogButton } from "../projects/HomeButtons";
import HomeBlogCard from "./HomeBlogCard";

export default function Blogs() {
  return (
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
  );
}
