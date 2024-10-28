import { blogs } from "@/data/blogs";
import { ExternalLink } from "lucide-react";
import ThreeDPin from "../animation/3d-pin";
import ShowOneByOne from "../animation/ShowOneByOne";
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
      <div className="py-10 gap-y-12 gap-x-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs?.slice(0, 4).map((blog, index) => (
          <ShowOneByOne key={index} index={index}>
            <ThreeDPin
              title={"reerer"}
              project={<HomeBlogCard blog={blog} />}
              links={[
                {
                  title: "View",
                  href: "/blogs",
                  icon: <ExternalLink className="text-button w-4 h-4" />,
                },
              ]}
            >
              <HomeBlogCard blog={blog} />
            </ThreeDPin>
          </ShowOneByOne>
        ))}
      </div>
    </section>
  );
}
