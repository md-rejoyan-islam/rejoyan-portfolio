"use client";
import { blogs } from "@/data/blogs";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import ShowOneByOne from "../animation/ShowOneByOne";
import BlogCard from "../blogs/BlogCard";
import { BlogButton } from "../projects/HomeButtons";
import TextAnimation from "../ui/TextAnimation";

export default function Blogs() {
  const [blogScope, BlogAnimate] = useAnimate();

  const blogStaggerList = stagger(0.2, { startDelay: 1.3 });
  useEffect(() => {
    BlogAnimate(
      "article",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: blogStaggerList,
      }
    );
  }, [blogStaggerList, BlogAnimate]);
  return (
    <section className="py-10">
      <div className="flex justify-between items-center gap-12">
        <h2 className="font-incognito text-4xl text-text-root font-semibold tracking-tight">
          <TextAnimation
            text="Blogs"
            as="span"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
          />
        </h2>
        <BlogButton />
      </div>
      <motion.div
        className="py-10 gap-y-12 gap-x-7 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        ref={blogScope}
        transition={{ delay: 1.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {blogs?.slice(0, 3).map((blog, index) => (
          <motion.article
            key={index}
            style={{ opacity: 0, scale: 0.3, x: -50 }}
          >
            <ShowOneByOne index={index}>
              <BlogCard blog={blog} index={index} />
            </ShowOneByOne>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
