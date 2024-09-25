import Image from "next/image";

import { FaCalendarMinus } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export default function BlogCard({ index, blog }) {
  return (
    <div
      className="w-full p-4 sm:p-6  border  rounded-[20px] border-project-card-border bg-project-card-background backdrop-blur-3xl"
      style={{
        backgroundImage: `url('/gradient.svg')`,
      }}
    >
      <article key={index}>
        <a
          className="flex lg:flex-row flex-col lg:items-center items-start gap-8    group"
          href={blog?.link}
        >
          <div className="relative lg:max-w-[450px] lg:h-52 w-full h-56 overflow-clip">
            <figure>
              <Image
                alt={blog?.title}
                src={blog?.image}
                width={700}
                height={300}
                className=" bg-transparent w-full rounded-md object-cover group-hover:scale-125 duration-300"
              />
              <noscript />
            </figure>
          </div>
          <div className="text-left">
            <div className="relative overflow-hidden inline-block mb-4 ">
              <h2 className="relative z-10 transition duration-200 ease-in-out text-2xl font-incognito font-semibold tracking-tight ">
                {blog?.title}
              </h2>
              {/* <div className="absolute inset-0 bg-text-root dark:bg-button transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></div> */}
            </div>

            <p className=" text-text-secondary text-[0.95rem]">
              {blog?.description}
            </p>
            <div className="flex items-center gap-x-4 mt-3 text-sm">
              <div className="flex items-center gap-x-2">
                <FaCalendarMinus className="text-button" />
                <time
                  dateTime="2024-08-06T14:41:28.047Z"
                  className="text-text-secondary"
                >
                  {blog?.date}
                </time>
              </div>
              <div className="flex items-center gap-x-2">
                <IoTime className="text-button" />
                <div className="text-text-secondary">{blog?.time}</div>
              </div>
            </div>
          </div>
        </a>
      </article>
      <div className="absolute top-0 h-fit -translate-y-1/3 mx-auto  right-0 w-2/4">
        <div className="bg-[rgba(0,166,255,0.27)]  dark:bg-[rgba(255,0,174,0.4)] aspect-square  opacity-20 w-full max-w-full  rounded-full filter blur-3xl" />
      </div>
    </div>
  );
}
