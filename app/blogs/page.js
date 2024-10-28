"use client";
import ShowOneByOne from "@/components/animation/ShowOneByOne";
import BlogCard from "@/components/blogs/BlogCard";
import { Spotlight } from "@/components/ui/spotlight";
import { blogs, blogSites } from "@/data/blogs";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Blogs() {
  const [scope, animate] = useAnimate();
  const [blogScope, BlogAnimate] = useAnimate();

  const staggerList = stagger(0.1, { startDelay: 0.6 });
  const blogStaggerList = stagger(0.2, { startDelay: 1.3 });

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
    <div className="pt-10 pb-12 px-3 sm:px-4 relative">
      <Spotlight
        className="top-40 left-0 md:left-60 md:top-20 z-50  "
        fill="rgba(255, 182, 193, 0.60)"
      />

      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center  text-text-root font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-5 sm:mb-6 lg:leading-[3.7rem]"
        >
          <span>Blog</span>
          <div className="relative">
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/4 blur-sm" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/4" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl text-center mx-auto text-[17px] sm:text-xl  text-text-primary leading-relaxed"
        >
          In this space, I share personal stories, insights, and experiences
          from my journey as a web developer and freelancer. You&apos;ll find
          articles about the projects I&apos;m currently working on, lessons
          I&apos;ve learned, and general findings that might inspire or assist
          others in their own endeavors.
        </motion.p>
        <ul
          className="flex items-center flex-wrap gap-x-5 gap-y-10 my-10"
          ref={scope}
        >
          {blogSites.map((site, index) => (
            <motion.li key={index} style={{ opacity: 0, scale: 0.3, x: -50 }}>
              <Link
                rel="noopener"
                target="_blank"
                className="flex items-center group"
                href={site.link}
              >
                {site.icon}
                &nbsp;
                <span>{site.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.section
        className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 lg:gap-x-10  max-w-full lg:gap-y-12 gap-y-10 mb-12 box-border"
        ref={blogScope}
        transition={{ delay: 1.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            style={{ opacity: 0, scale: 0.3, x: -50 }}
          >
            <ShowOneByOne index={index}>
              <BlogCard blog={blog} index={index} />
            </ShowOneByOne>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}
