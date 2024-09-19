import { MovingBorder } from "@/components/animation/MovingBorder";
import BlogCard from "@/components/blogs/BlogCard";
import Link from "next/link";

import { FaFreeCodeCamp } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { SiSanity } from "react-icons/si";
export default function Blogs() {
  const blogs = [
    {
      title: "How to run Localhost on your Mobile Device using Ngrok",
      description:
        "Learn how to run and test your web applications changes without deploying using Ngrok—a globally distributed reverse proxy that creates secure tunnels to your web app",
      date: "Aug 6, 2024",
      time: "4 min",
      image: "/images/cardimage.png",
      link: "/blog/run-localhost-on-mobile-device-using-ngrok",
    },
    {
      title: "How to run Localhost on your Mobile Device using Ngrok",
      description:
        "Learn how to run and test your web applications changes without deploying using Ngrok—a globally distributed reverse proxy that creates secure tunnels to your web app",
      date: "Aug 6, 2024",
      time: "4 min",
      image: "/images/cardimage.png",
      link: "/blog/run-localhost-on-mobile-device-using-ngrok",
    },
    {
      title: "How to run Localhost on your Mobile Device using Ngrok",
      description:
        "Learn how to run and test your web applications changes without deploying using Ngrok—a globally distributed reverse proxy that creates secure tunnels to your web app",
      date: "Aug 6, 2024",
      time: "4 min",
      image: "/images/cardimage.png",
      link: "/blog/run-localhost-on-mobile-device-using-ngrok",
    },
    {
      title: "How to run Localhost on your Mobile Device using Ngrok",
      description:
        "Learn how to run and test your web applications changes without deploying using Ngrok—a globally distributed reverse proxy that creates secure tunnels to your web app",
      date: "Aug 6, 2024",
      time: "4 min",
      image: "/images/cardimage.png",
      link: "/blog/run-localhost-on-mobile-device-using-ngrok",
    },
    {
      title: "How to run Localhost on your Mobile Device using Ngrok",
      description:
        "Learn how to run and test your web applications changes without deploying using Ngrok—a globally distributed reverse proxy that creates secure tunnels to your web app",
      date: "Aug 6, 2024",
      time: "4 min",
      image: "/images/cardimage.png",
      link: "/blog/run-localhost-on-mobile-device-using-ngrok",
    },
  ];

  const blogSites = [
    {
      name: "FreeCodeCamp",
      link: "https://freecodecamp.org/news/author/victoreke/?ref=victoreke.com",
      icon: (
        <FaFreeCodeCamp className="flex-shrink-0 h-5 w-5 text-text-secondary group-hover:text-text-root duration-300" />
      ),
    },
    {
      name: "Hashnode",
      link: "https://eke.hashnode.dev?ref=victoreke.com",
      icon: (
        <FaHashnode className="flex-shrink-0 h-5 w-5 text-text-secondary group-hover:text-text-root duration-300" />
      ),
    },
    {
      name: "Sanity",
      link: "https://www.sanity.io/exchange/community/victoreke?ref=victoreke.com",
      icon: (
        <SiSanity className="flex-shrink-0 h-5 w-5 text-text-secondary group-hover:text-text-root duration-300" />
      ),
    },
  ];

  return (
    <div className="pt-10 pb-12">
      <div>
        <h1 className="text-center  text-text-root font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-5 sm:mb-6 lg:leading-[3.7rem]">
          Blog
        </h1>
        <p className="max-w-4xl text-center mx-auto text-[17px] sm:text-xl  text-text-primary leading-relaxed">
          Welcome to my blog domain where I share personal stories about things
          I&apos;ve learned, projects I&apos;m hacking on and just general
          findings. I also write for other publications.
        </p>
        <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
          {blogSites.map((site, index) => (
            <li key={index}>
              <Link
                rel="noopener"
                target="_blank"
                className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
                href={site.link}
              >
                {site.icon}
                &nbsp;
                <span>{site.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col  max-w-full lg:gap-y-8 gap-y-12 mb-12">
        {blogs.map((blog, index) => (
          <MovingBorder
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="20px"
            width={60}
            height={60}
            borderClassName={"h-60 w-60"}
          >
            <BlogCard blog={blog} />
          </MovingBorder>
        ))}
      </div>
    </div>
  );
}
