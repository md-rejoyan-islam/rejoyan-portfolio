import Image from "next/image";

import { FaCalendarMinus } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function BlogCard({ index, blog }) {
  return (
    <CardContainer className="inter-var ">
      <CardBody
        className="bg-project-card-background relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  border-project-card-border w-auto  h-auto rounded-xl p-6 border  "
        onClick={() => {
          // navigator("hrl")
        }}
      >
        <CardItem translateZ="50" className="w-full mt-4">
          <Image
            alt={blog?.title}
            src={blog?.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <CardItem translateZ="50" className="w-full">
          <div className="relative overflow-hidden inline-block mb-4 ">
            <h2 className="relative z-10 transition duration-200 ease-in-out text-2xl font-incognito font-semibold tracking-tight ">
              {blog?.title}
            </h2>
          </div>
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
          <p className=" text-text-secondary text-[0.95rem]">
            {blog?.description}
          </p>
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
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
        </CardItem>
        {/* <Link
            className="flex  flex-col  items-start gap-8    group"
            href={blog?.link}
          >
            <div className="relative  overflow-cli"></div>
            <div className="text-left">
              <div className="relative overflow-hidden inline-block mb-4 ">
                <h2 className="relative z-10 transition duration-200 ease-in-out text-2xl font-incognito font-semibold tracking-tight ">
                  {blog?.title}
                </h2>
               
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
          </Link> */}
        {/* </article> */}
        <div className="absolute top-48 h-fit -translate-y-1/3 mx-auto  right-0 w-3/4">
          <div className="bg-[rgba(0,166,255,0.27)]  dark:bg-[rgba(255,0,174,0.7)] aspect-square  opacity-20 w-full max-w-full  rounded-full filter blur-3xl" />
        </div>
      </CardBody>
    </CardContainer>
  );
}
